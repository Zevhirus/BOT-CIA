# Bot WhatsApp FAQ Edabu (Tidak Resmi)

## Cara menjalankan
1. Install Node.js 18+ (https://nodejs.org).
2. Buka terminal di folder ini, lalu:
   ```
   npm install
   npm start
   ```
3. Scan QR yang muncul di terminal: WhatsApp > Pengaturan > *Perangkat tertaut* > *Tautkan perangkat*.
4. Selesai. Chat ke nomor tersebut dari nomor lain, ketik `halo` atau `menu`.

## Cara kerja
- Ketik **angka 1-16** untuk jawaban langsung sesuai nomor FAQ.
- Ketik pertanyaan bebas, misalnya "cara nonaktifkan karyawan resign". Bot mencocokkan *kata kunci* di `faq.js`.
- Tidak cocok apa-apa? Bot menampilkan menu.

## Mengedit isi / menambah kata kunci
Semua jawaban dan kata kunci ada di `faq.js`. Tambahkan kata kunci di array `keywords` agar bot lebih paham variasi pertanyaan.

## Peringatan (karena tidak resmi)
- Ini bukan WhatsApp Business API resmi. Ada **risiko nomor diblokir** oleh WhatsApp. Pakai *nomor khusus*, jangan nomor utama.
- Jangan dipakai untuk broadcast / kirim pesan massal. Bot ini hanya membalas pesan yang masuk.
- Komputer / server harus tetap menyala agar bot aktif (bisa dijalankan di VPS dengan `pm2 start index.js`).
- Jika nanti sudah siap, bisa migrasi ke WhatsApp Business Platform resmi. File `faq.js` bisa dipakai ulang.
# BOT-CIA
