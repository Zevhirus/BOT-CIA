require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { mainMenuText, route } = require('./faq');
const { askGemini } = require('./gemini');

const client = new Client({
  authStrategy: new LocalAuth(), // sesi tersimpan, tidak perlu scan QR tiap restart
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

// Posisi menu tiap pengirim (kategori yang sedang dibuka), kedaluwarsa 30 menit
const states = new Map();
const STATE_TTL = 30 * 60 * 1000;
const getState = (u) => {
  const s = states.get(u);
  return s && Date.now() - s.ts < STATE_TTL ? { cat: s.cat } : { cat: null };
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

client.on('qr', (qr) => {
  console.log('Scan QR ini lewat WhatsApp > Perangkat tertaut:');
  qrcode.generate(qr, { small: true });
});

client.on('loading_screen', (p, m) => console.log('Loading:', p, m));
client.on('change_state', (s) => console.log('State:', s));
client.on('ready', () => console.log('Bot siap! ✅'));
client.on('auth_failure', (m) => console.error('Auth gagal:', m));
client.on('disconnected', (r) => console.log('Terputus:', r));

client.on('message', async (msg) => {
  try {
    // Abaikan grup, status, dan pesan non-teks
    if (msg.from.endsWith('@g.us') || msg.from === 'status@broadcast') return;
    if (msg.fromMe || msg.type !== 'chat') return;

    await sleep(800 + Math.random() * 1200); // jeda acak agar lebih natural

    const result = route(msg.body, getState(msg.from));
    let text;

    if (result.type === 'menu' || result.type === 'answer') {
      text = result.text;
      states.set(msg.from, { ...result.state, ts: Date.now() });
    } else {
      // Di luar FAQ: coba tanya Gemini
      const ai = await askGemini(msg.from, msg.body);
      if (ai) {
        text = ai + '\n\n_Jawaban otomatis oleh AI, bisa keliru. Ketik *0* untuk menu utama atau *RO* untuk kontak RO._';
      } else {
        text =
          'Maaf, saya belum menemukan jawaban untuk itu 🙏\nCoba pilih dari menu di bawah, atau hubungi RO (ketik *RO*) / Call Center BPJS Kesehatan *165*.\n\n' +
          mainMenuText();
        states.set(msg.from, { cat: null, ts: Date.now() });
      }
    }

    await client.sendMessage(msg.from, text, { sendSeen: false });
  } catch (err) {
    console.error('Gagal membalas pesan:', err.message);
  }
});

// Cegah bot mati total kalau ada error tak terduga
process.on('unhandledRejection', (e) => console.error('Unhandled:', e));

client.initialize().catch((e) => console.error('Gagal start:', e));
