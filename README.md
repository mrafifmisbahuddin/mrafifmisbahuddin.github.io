# Portofolio Muhammad Rafif Misbahuddin, S.Kom., M.Kom.

Website multi-halaman responsif berbasis HTML, CSS, JavaScript, Bootstrap 5, dan Bootstrap Icons.

## Halaman
- `index.html` — Beranda
- `tentang.html` — Tentang Saya dan identitas sekolah
- `keahlian.html` — Bidang keahlian
- `pendidikan.html` — Pendidikan, pengalaman, sertifikasi
- `kontak.html` — Formulir kontak

## Menjalankan website
1. Ekstrak ZIP.
2. Buka folder project.
3. Buka `index.html` dengan browser.
4. Internet diperlukan untuk memuat Bootstrap, Bootstrap Icons, dan Google Fonts dari CDN.

## Kustomisasi
- Lengkapi riwayat pendidikan, pengalaman, sertifikasi, dan kontak berdasarkan data yang benar.
- Pada `script.js`, isi `emailTujuan` dengan alamat email tujuan yang ingin digunakan.
- Form kontak memakai `mailto:` dan tidak menyimpan data ke server.
- Pertahankan folder `assets` agar foto dan logo dapat ditampilkan.
- Untuk GitHub Pages, unggah seluruh isi folder ini ke repository dan aktifkan Pages.

## File utama
- `style.css`: gaya visual dan responsivitas.
- `script.js`: tema terang/gelap, navigasi, dan formulir email.


## Animasi
- Hero text masuk dengan efek fade-up.
- Foto profil melayang perlahan, dengan orbit dekoratif berputar.
- Badge profil memiliki gerakan mengambang.
- Kartu keahlian dan pintasan memiliki efek hover serta kilau.
- Kartu konten muncul ketika digulir ke area pandang (scroll reveal).
- Animasi mengikuti pengaturan `prefers-reduced-motion` untuk aksesibilitas.

## Penyesuaian tampilan PC
Ukuran judul, deskripsi, kartu, dan heading diperkecil secara khusus untuk layar desktop. Tampilan HP tetap mengikuti aturan responsif yang sudah ada.

- `assets/logo-unpam.png`: logo Universitas Pamulang untuk halaman Pendidikan.
