# 🌐 Web Portofolio — Fuad Abdul Baqi

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Web portofolio pribadi milik **Fuad Abdul Baqi**, mahasiswa D3 Manajemen Informatika semester 6. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework — ringan, cepat, dan mudah dikustomisasi.

---

## ✨ Fitur

- **Desain Minimalis & Clean** — tampilan elegan dengan palet warna natural
- **Fully Responsive** — tampil baik di desktop maupun mobile
- **Smooth Scroll & Animasi** — scroll reveal dan transisi halus
- **Navigasi Aktif** — highlight otomatis menu sesuai posisi scroll
- **Form Kontak** — form pesan langsung di halaman
- **Tanpa Framework** — murni HTML, CSS, JS (tidak butuh npm/build tool)

---

## 📁 Struktur Proyek

```
portfolio-fuad/
│
├── index.html        # File utama (semua konten & styling)
└── README.md         # Dokumentasi ini
```

> Semua kode (HTML, CSS, JS) ada dalam satu file `index.html` untuk kemudahan deployment.

---

## 🗂️ Halaman & Seksi

| Seksi | Keterangan |
|-------|------------|
| **Hero** | Intro nama, tagline, dan tombol CTA |
| **Tentang Saya** | Deskripsi diri, info akademik, dan status |
| **Skills** | Teknologi Frontend, Backend, dan Tools |
| **Proyek** | Card proyek dengan deskripsi dan link |
| **Kontak** | Form pesan + link email, GitHub, LinkedIn |

---

## 🚀 Cara Menjalankan

Tidak perlu instalasi apapun. Cukup:

1. Clone atau unduh repositori ini
   ```bash
   git clone https://github.com/username/portfolio-fuad.git
   ```

2. Buka file `index.html` langsung di browser

   ```bash
   # Atau gunakan Live Server di VS Code
   open index.html
   ```

---

## ✏️ Cara Kustomisasi

### 1. Ganti Data Pribadi
Buka `index.html` dan cari bagian berikut:

```html
<!-- Nama & tagline di HERO -->
<h1>Fuad Abdul<br><em>Baqi.</em></h1>
<p class="hero-desc">Mahasiswa D3 Manajemen Informatika...</p>
```

### 2. Tambahkan Foto
Cari emoji `👨‍💻` di bagian **Tentang Saya**, ganti dengan tag `<img>`:

```html
<!-- Sebelum -->
<div class="about-avatar">👨‍💻</div>

<!-- Sesudah -->
<div class="about-avatar">
  <img src="foto-kamu.jpg" alt="Foto Fuad" style="width:100%;height:100%;object-fit:cover;">
</div>
```

### 3. Edit Proyek
Cari class `.project-card` dan sesuaikan nama, deskripsi, teknologi, serta link:

```html
<div class="project-name">Nama Proyekmu</div>
<p class="project-desc">Deskripsi proyekmu di sini.</p>
<a href="https://github.com/username/repo" class="project-link">Lihat Detail</a>
```

### 4. Update Info Kontak
```html
<a href="mailto:emailkamu@gmail.com" class="contact-item">...</a>
<a href="https://github.com/usernamekamu" class="contact-item">...</a>
<a href="https://linkedin.com/in/usernamekamu" class="contact-item">...</a>
```

### 5. Ubah Warna Tema
Edit CSS variable di bagian `:root`:

```css
:root {
  --bg: #F7F5F0;       /* Warna background */
  --ink: #1A1A18;      /* Warna teks utama */
  --accent: #2D6A4F;   /* Warna aksen (hijau) */
  --accent-light: #D8F3DC; /* Aksen muda */
}
```

---

## 🛠️ Teknologi

- **HTML5** — struktur halaman
- **CSS3** — styling, animasi, layout Grid & Flexbox
- **JavaScript (Vanilla)** — scroll reveal & navigasi aktif
- **Google Fonts** — DM Serif Display, DM Mono, DM Sans

---

## 📦 Deployment

Web ini bisa langsung di-deploy ke berbagai platform gratis:

| Platform | Cara Deploy |
|----------|-------------|
| **GitHub Pages** | Push ke repo → Settings → Pages → pilih branch `main` |
| **Netlify** | Drag & drop folder ke [netlify.com/drop](https://netlify.com/drop) |
| **Vercel** | `vercel deploy` atau import repo dari GitHub |

---

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan pribadi.

---

> Dibuat oleh **Fuad Abdul Baqi** — Mahasiswa D3 Manajemen Informatika, Semester 6