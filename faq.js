// Basis pengetahuan bot: diambil dari FAQ Edabu BPJS Kesehatan.
// Format WhatsApp: *tebal*, _miring_

const faq = [
  {
    title: 'Pendaftaran Perusahaan Baru',
    keywords: ['daftar perusahaan', 'perusahaan baru', 'badan usaha baru', 'daftar badan usaha', 'registrasi', 'virtual account', 'aktivasi', 'edabu mobile', 'username'],
    answer: `*1. Pendaftaran Perusahaan Baru*

Pendaftaran Badan Usaha lewat website BPJS Kesehatan / Portal Bersama BPJS / Aplikasi Edabu Mobile:

1. Akses www.bpjs-kesehatan.go.id, www.bpjs.go.id atau aplikasi *Edabu Mobile* (Google Playstore / App Store).
2. BPJS Kesehatan mengirim *link aktivasi* ke email Badan Usaha.
3. Setelah aktivasi kepesertaan, BPJS Kesehatan mengirim *nomor Virtual Account, Username dan Password* Edabu ke email Badan Usaha.
4. Badan Usaha mendaftarkan pekerja dan anggota keluarga di aplikasi Edabu.
5. Tagihan iuran muncul setelah Badan Usaha melakukan *approval* pendaftaran di Edabu.
6. Status kepesertaan *Aktif* setelah iuran dibayar. Identitas peserta berupa *KIS Digital* bisa diunduh di Aplikasi Mobile JKN.`,
  },
  {
    title: 'Lupa Password Edabu',
    keywords: ['lupa password', 'reset password', 'password', 'lupa sandi', 'ganti password', 'captcha'],
    answer: `*2. Lupa Password Edabu*

1. Di halaman login, klik *Lupa Password*.
2. Isi *username*, *email terdaftar*, dan *captcha*.
3. Klik *Kirim Email*.

Password baru akan dikirim langsung ke email yang kamu input.`,
  },
  {
    title: 'Daftar Pekerja yang Belum Pernah Terdaftar BPJS Kesehatan',
    keywords: ['pekerja baru', 'belum pernah terdaftar', 'daftar pekerja', 'tambah pekerja', 'input pekerja', 'karyawan baru'],
    answer: `*3. Pendaftaran Pekerja yang Belum Pernah Terdaftar BPJS Kesehatan*

Lewat aplikasi Edabu:
1. Menu *Peserta* > *Input Data*
2. Pilih *Kategori Pencarian* > masukkan *NIK* > *Selanjutnya*
3. Di kolom *Mutasi* pilih *Pindahkan Sebagai Pekerja* > tekan *tombol panah biru*
4. Isi informasi lain > *Simpan*
5. Cek *nomor tiket* di menu *Home*`,
  },
  {
    title: 'Daftar Pekerja dari PPU / PBI APBN / PD Pemda / PBPU Mandiri ke PPU Badan Usaha',
    keywords: ['pindah segmen', 'dari mandiri', 'pbpu', 'pbi', 'apbn', 'pemda', 'pindahkan sebagai pekerja', 'sudah terdaftar mandiri', 'ppu'],
    answer: `*4. Pendaftaran Pekerja dari Segmen PPU Badan Usaha / PBI APBN / PD Pemda / PBPU Mandiri ke PPU Badan Usaha*

1. Menu *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK / No JKN-KIS* > *Selanjutnya*
2. Cek data yang muncul. Di kolom *Mutasi* pilih *Pindahkan Sebagai Pekerja* > tekan *tombol panah biru*
3. Isi data pekerjaan > *Selanjutnya* > cek data keluarga > centang *3 poin disclaimer* > *Simpan*
4. Cek *nomor tiket* di menu *Home*`,
  },
  {
    title: 'Tambah Anggota Keluarga yang Belum Pernah Terdaftar',
    keywords: ['anggota keluarga baru', 'tambah anggota keluarga', 'tambah keluarga', 'istri', 'suami', 'anak', 'tanggungan', 'kartu keluarga', 'inkuiri'],
    answer: `*5. Menambahkan Anggota Keluarga yang Belum Pernah Terdaftar BPJS Kesehatan (jadi tanggungan pekerja)*

1. Menu *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK Pekerja* > *Selanjutnya*
2. Cek data yang muncul. Di kolom *Mutasi* pilih *Tambah Anggota Keluarga* > tekan *tombol panah biru*
3. Klik *Inkuiri Kartu Keluarga* > pilih anggota keluarga
4. Isi data diri. *Nomor HP wajib* (boleh pakai nomor HP karyawan), email tidak wajib.
5. *Selanjutnya* > cek data alamat > *Selanjutnya* > isi *fasilitas kesehatan* > *Simpan*`,
  },
  {
    title: 'Tambah Anggota Keluarga yang Sudah Pernah Terdaftar',
    keywords: ['keluarga sudah terdaftar', 'anggota keluarga sudah pernah', 'pindahkan sebagai anggota keluarga', 'pindah keluarga'],
    answer: `*6. Menambahkan Anggota Keluarga yang Sudah Pernah Terdaftar BPJS Kesehatan (jadi tanggungan pekerja)*

1. Menu *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK / No JKN-KIS calon anggota keluarga* > *Selanjutnya*
2. Pastikan nama calon anggota keluarga benar. Di kolom *Mutasi* pilih *Pindahkan Sebagai Anggota Keluarga Pekerja* > tekan *tombol panah biru*
3. Muncul pop up > input *Nomor BPJS Pekerja* > pilih *Pindahkan sebagai* > tekan *Lanjut*`,
  },
  {
    title: 'Update Gaji (per orang)',
    keywords: ['update gaji', 'ubah gaji', 'ganti gaji', 'gaji baru', 'mutasi gaji', 'perubahan gaji', 'naik gaji'],
    answer: `*7. Cara Update Gaji*

1. Menu *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK / No JKN-KIS* > *Selanjutnya*
2. Cek data yang muncul. Di kolom *Mutasi* pilih *Ubah Gaji* > tekan *tombol panah biru*
3. Isi *gaji baru* > centang *disclaimer* di form mutasi gaji > *Simpan*
4. Cek *nomor tiket* di menu *Home*

_Untuk banyak peserta sekaligus, pilih *Update Gaji Massal* di menu Pekerja._`,
  },
  {
    title: 'Update Gaji Massal',
    keywords: ['gaji massal', 'update massal', 'upload gaji', 'formulir perubahan gaji', 'upload data', 'banyak peserta'],
    answer: `*8. Cara Update Gaji Massal*

1. Menu *Referensi* > klik *Formulir Perubahan Gaji* (download).
2. Isi formulir: *No urut, Nomor kartu JKN-KIS, Gaji baru*. Minimal *5 data peserta*.
3. Menu *Peserta* > *Upload Data* > pilih *unit kerja* > masukkan jumlah peserta di formulir.
4. Klik *Telusuri* file formulir > *Selanjutnya*.
5. Cek data halaman per halaman. Jika ada yang gagal, akan muncul di kolom keterangan. Pilih *Hapus* agar tidak terupload (beri catatan/tanda pada data yang gagal).
6. Centang kotak *disclaimer* > *Simpan*.
7. Cek tiket di menu *Home*.

*Catatan:* data yang gagal dan sudah dihapus bisa diproses ulang satu per satu lewat menu *Update Gaji* (per orang) di kategori Pekerja.`,
  },
  {
    title: 'Ganti Faskes Tingkat Pertama',
    keywords: ['faskes', 'ganti faskes', 'pindah faskes', 'puskesmas', 'klinik', 'fasilitas kesehatan', 'ubah faskes', 'call center', '165'],
    answer: `*9. Cara Mengganti Faskes Tingkat Pertama*

Perubahan faskes tingkat pertama dilakukan *oleh peserta* sendiri:
- lewat aplikasi *Mobile JKN* (Playstore / App Store), atau
- lapor ke *Call Center BPJS Kesehatan 165*.`,
  },
  {
    title: 'Penonaktifan Pekerja',
    keywords: ['nonaktif', 'non aktif', 'penonaktifan', 'nonaktifkan', 'resign', 'mengundurkan diri', 'habis kontrak', 'meninggal', 'phk', 'pensiun', 'form 1', 'form 2', 'form 3', 'form 4a', 'form 4b', 'berhenti'],
    answer: `*10. Cara Penonaktifan Pekerja Badan Usaha*

1. Buka Edabu > *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK / No JKN-KIS* > *Selanjutnya*
2. Cek data. Di kolom *Mutasi* pilih *Nonaktif Selain PHK* > tekan *tombol panah biru*
3. Pilih *jenis nonaktif*. Wajib isi *nomor telepon, email, dan nomor surat pemberitahuan penonaktifan pekerja (Form 1)* > *Lanjut*
4. *Daftar Dokumen* > *Selanjutnya* > centang *disclaimer* > *Simpan*
5. Cek *nomor tiket* di menu *Home* (Disetujui / Belum Disetujui)

*Batas waktu:* nonaktifkan via Edabu *sebelum tanggal 20* setiap bulan agar iuran tidak ditagihkan lagi bulan berikutnya. Khusus *meninggal*, bisa dilaporkan paling lambat *1 hari sebelum akhir bulan*.

*Dokumen untuk non-PHK (meninggal, habis kontrak, mengundurkan diri):*
1. Surat Pemberitahuan penonaktifan pekerja (*Form 1*) - _wajib_
2. Surat pertanggungjawaban mutlak dari pimpinan perusahaan (*Form 2*) - _wajib_
3. Daftar Nama Pekerja (*Form 3*) - _wajib_
4. Dokumen pendukung:
   - Alasan meninggal: surat kematian
   - Alasan habis kontrak: *Form 4a* (pengganti surat perjanjian kontrak / paklaring), atau lampirkan surat perjanjian kontrak / paklaring
   - Alasan resign / mengundurkan diri / pensiun: *Form 4b* (pengganti surat pemecatan, surat pengunduran diri, surat keterangan pensiun), atau lampirkan surat-surat tersebut`,
  },
  {
    title: 'Cetak Kartu Peserta dari Edabu',
    keywords: ['cetak kartu', 'cetak kis', 'kartu peserta', 'print kartu', 'kartu kis'],
    answer: `*11. Cara Cetak Kartu Peserta dari Edabu*

1. Menu *Peserta* > *Input Data* > pilih *Kategori Pencarian* > masukkan *NIK / No JKN-KIS* > *Selanjutnya*
2. Cek data yang muncul. Di kolom *Mutasi* pilih *Cetak KIS* > tekan *tombol panah biru*`,
  },
  {
    title: 'Pengajuan Cetak Sertifikat BPJS Kesehatan',
    keywords: ['sertifikat', 'cetak sertifikat', 'update sertifikat', 'pemeriksaan kepatuhan', 'siup', 'tdp', 'akta', 'npwp', 'spt', 'materai'],
    answer: `*12. Pengajuan Cetak Sertifikat BPJS Kesehatan*

Pengurusan atau update sertifikat perlu memenuhi persyaratan. Berkas pemeriksaan dikoordinasikan dengan *RO* (kontak RO: ketik *RO*).

*Dokumen yang disiapkan:*
1. Legalitas pemberi kerja (SIUP / TDP / Akta Pendirian dan NPWP perusahaan)
2. Data pekerja bulan berjalan (soft copy)
3. SPT Pajak Pasal 21 dan Pasal 26 bulan terakhir
4. Dokumen pendukung:
   a. Badan Usaha mendaftarkan *seluruh karyawan dan anggota keluarganya* menjadi peserta JKN-KIS
   b. Sudah membayar iuran dan *tidak ada tunggakan*
   c. Data gaji sesuai data sebenarnya (dasar iuran: *gaji pokok dan tunjangan tetap*)
   d. Tidak ada tunggakan iuran atas peserta yang sebelumnya terdaftar segmen PBPU / Mandiri
   e. Bersedia diperiksa oleh Tim Pemeriksa Kepatuhan BPJS Kesehatan
5. Data kepesertaan dan billing statement *BPJS Ketenagakerjaan*
6. Billing statement BPJS Kesehatan bulan berjalan
7. Formulir permohonan cetak sertifikat (template minta ke petugas RO)
8. Materai 10.000 (2 buah)`,
  },
  {
    title: 'Tutup Badan Usaha',
    keywords: ['tutup badan usaha', 'tutup perusahaan', 'perusahaan tutup', 'bubar', 'tutup usaha', 'disnaker', 'notaris'],
    answer: `*13. Cara Tutup Badan Usaha*

Dokumen yang diperlukan:
1. Surat pernyataan tutup dari pihak perusahaan
2. Bukti tutup yang dikeluarkan oleh disnaker / notaris / pengadilan
3. Bukti bayar iuran terakhir

Badan Usaha *wajib menonaktifkan seluruh pekerja* di aplikasi Edabu.`,
  },
  {
    title: 'Prosedur Penambahan / Penonaktifan Pekerja (batas waktu)',
    keywords: ['batas waktu', 'deadline', 'h-2', 'tagihan iuran', 'penambahan pekerja', 'tanggal 1', 'cut off', 'cutoff'],
    answer: `*14. Prosedur Penambahan atau Penonaktifan Pekerja*

Penambahan dan penonaktifan pekerja yang berpengaruh pada *tagihan iuran* harus dilakukan paling lambat *H-2 sebelum tanggal 1 di bulan berikutnya*.`,
  },
  {
    title: 'Panduan Layanan Bagi Peserta JKN-KIS',
    keywords: ['panduan layanan', 'flyer', 'edukasi', 'panduan', 'brosur'],
    answer: `*15. Panduan Layanan Bagi Peserta JKN-KIS BPJS Kesehatan*

*Panduan Layanan:*
https://drive.google.com/file/d/1wr1QC2_Ui6tQx1J6PQf0yiK9QbLU9L3s/view?usp=sharing

*Flyer Edukasi:*
https://drive.google.com/file/d/1GdmENN5N-G8OXyg2mEZ_SopGtUV_TnKq/view?usp=sharing`,
  },
  {
    title: 'Kode Fasilitas Kesehatan Tingkat Pertama',
    keywords: ['kode faskes', 'kode fasilitas', 'aplicares', 'kode puskesmas'],
    answer: `*16. Kode Fasilitas Kesehatan Tingkat Pertama*

Bisa diakses di:
https://faskes.bpjs-kesehatan.go.id/aplicares`,
  },
  {
    title: 'Kontak RO BPJS Kesehatan Makassar',
    keywords: ['kontak ro', 'nomor ro', 'no ro', 'hubungi ro', 'contact person', 'cp ro', 'petugas ro', 'relationship officer', 'narahubung', 'ro bpjs', 'ro makassar', 'nomor hp ro', 'kontak bpjs makassar'],
    answer: `*17. Contact Person RO BPJS Kesehatan Makassar*

1. Muh. Akbar - 08114488437
2. Normala Sari - 08114705989
3. Amaludin - 08114005860
4. Andi Jihan Fakhirah Syamsu - 081111128756
5. Mutiara Ningrum Wekoila Putri Abd Halim - 081355918625
6. Nurul Andyani Ahmad - 08114161620
7. Novita - 081144412508

_Hubungi RO untuk koordinasi pemeriksaan sertifikat, kendala penonaktifan, dan kasus khusus lainnya._`,
  },
];

// ---------- Kategori menu ----------
// ids = nomor urut FAQ di array `faq` (mulai dari 1). Di layar, tiap kategori
// diberi nomor urut 1, 2, 3, ... sesuai urutan ids di bawah ini.
const categories = [
  { name: 'Perusahaan', emoji: '🏢', ids: [1, 2, 11, 12, 13, 15] },
  { name: 'Pekerja', emoji: '👷', ids: [3, 4, 7, 8, 9, 10, 14, 16] },
  { name: 'Keluarga Pekerja', emoji: '👨‍👩‍👧', ids: [5, 6] },
];
const RO_ID = faq.length; // item terakhir = Kontak RO (menu utama nomor 4)

const catOf = (id) => {
  const i = categories.findIndex((c) => c.ids.includes(id));
  return i === -1 ? null : i;
};
const categoryName = (id) => {
  const i = catOf(id);
  return i === null ? 'Kontak' : categories[i].name;
};

// Hapus nomor lama di judul jawaban ("*12. Judul*" -> "*Judul*")
const clean = (text) => text.replace(/^\*\d+\.\s*/, '*');

const mainMenuText = () =>
  `Halo! 👋 Saya asisten FAQ *Edabu BPJS Kesehatan*.

Pilih kategori dengan membalas *angka*:

${categories.map((c, i) => `*${i + 1}.* ${c.emoji} ${c.name}`).join('\n')}
*${categories.length + 1}.* 📞 Kontak RO BPJS Kesehatan Makassar

Atau langsung ketik pertanyaanmu.
Ketik *0* atau *menu* kapan saja untuk kembali ke sini.
_Bot ini tidak resmi. Untuk kasus khusus, hubungi RO / Call Center BPJS Kesehatan 165._`;

const categoryMenuText = (ci) => {
  const c = categories[ci];
  return `${c.emoji} *${c.name}*

Balas dengan *nomor* pertanyaan:

${c.ids.map((id, i) => `*${i + 1}.* ${faq[id - 1].title}`).join('\n')}

Ketik *0* untuk kembali ke menu utama.`;
};

const normalize = (s) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim();

const greetings = ['halo', 'hai', 'hi', 'p', 'permisi', 'assalamualaikum', 'selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam', 'menu', 'help', 'bantuan', 'start', 'kembali', 'back', '0'];

function keywordMatch(t) {
  let best = null;
  let bestScore = 0;
  faq.forEach((item, idx) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (t.includes(kw)) score += kw.split(' ').length; // frasa lebih panjang = skor lebih tinggi
    }
    if (score > bestScore) {
      bestScore = score;
      best = idx + 1;
    }
  });
  return best;
}

// state = { cat: null | index kategori yang sedang dibuka }
// return = { type: 'menu' | 'answer' | 'none', text?, state }
function route(input, state = { cat: null }) {
  const t = normalize(input || '');
  if (!t) return { type: 'none', state };

  // inCat = true jika jawaban dipilih dari daftar kategori (tetap di kategori itu)
  const answer = (id, inCat) => ({
    type: 'answer',
    text:
      clean(faq[id - 1].answer) +
      (inCat
        ? '\n\n_Balas nomor lain untuk pertanyaan berikutnya, atau *0* untuk menu utama._'
        : '\n\n_Ketik *0* untuk kembali ke menu utama._'),
    state: { cat: inCat ? state.cat : null },
  });

  if (greetings.includes(t)) return { type: 'menu', text: mainMenuText(), state: { cat: null } };
  if (t === 'ro') return answer(RO_ID, false);

  if (/^\d{1,2}$/.test(t)) {
    const n = parseInt(t, 10);

    if (state.cat === null) {
      // Menu utama: 1-3 = kategori, 4 = kontak RO
      if (n >= 1 && n <= categories.length) {
        return { type: 'menu', text: categoryMenuText(n - 1), state: { cat: n - 1 } };
      }
      if (n === categories.length + 1) return answer(RO_ID, false);
    } else {
      // Di dalam kategori: nomor urut kategori tersebut
      const ids = categories[state.cat].ids;
      if (n >= 1 && n <= ids.length) return answer(ids[n - 1], true);
    }
    const menu = state.cat === null ? mainMenuText() : categoryMenuText(state.cat);
    return { type: 'menu', text: 'Nomor tidak ada di daftar 🙏\n\n' + menu, state };
  }

  const id = keywordMatch(t);
  if (id) return answer(id, false); // jawaban dari ketikan bebas -> kembali ke menu utama
  return { type: 'none', state };
}

module.exports = { faq, categories, categoryName, mainMenuText, categoryMenuText, route };
