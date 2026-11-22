# AMS — DESIGN RULES

## UI/UX & Visual Design Guidelines

**Referensi:** Aturan Desain & Brand Guidelines Pondok Modern As-Sadid v1.0

Dokumen ini menjadi pedoman wajib AI Coding Assistant dalam merancang dan mengembangkan seluruh antarmuka As-Sadid Management System (AMS).

Tujuan utama: menghasilkan sistem administrasi pendidikan yang profesional, modern, minimalis, konsisten, mudah digunakan, dan memiliki identitas visual Pondok Modern As-Sadid.

---

## 1. DESIGN PRINCIPLES

Terapkan prinsip berikut:

1. **Professional & Authoritative:** tampilan berwibawa dan profesional.
2. **Warm & Friendly:** tetap hangat dan nyaman digunakan.
3. **Minimalist:** hindari dekorasi dan elemen yang tidak memiliki fungsi.
4. **Consistent:** seluruh halaman menggunakan sistem desain yang sama.
5. **Readable:** prioritaskan keterbacaan dan aksesibilitas.
6. **Functional:** setiap elemen visual harus mendukung fungsi sistem.

Jangan membuat desain berdasarkan selera pribadi. Gunakan design tokens sebagai satu-satunya sumber standar visual.

## 2. COLOR PALETTE

Gunakan palet warna resmi As-Sadid:

| Token        | Warna        | Hex       | Penggunaan                       |
| ------------ | ------------ | --------- | -------------------------------- |
| `emerald`    | Hijau zamrud | `#0B3D2E` | Warna utama, tombol, ikon, judul |
| `forest`     | Hijau tua    | `#062A20` | Sidebar gelap, footer, hover     |
| `gold`       | Emas         | `#C9A227` | Aksen dan indikator              |
| `gold-light` | Emas muda    | `#E6C766` | Aksen pada latar gelap           |
| `gold-dark`  | Emas tua     | `#8A6D14` | Focus ring dan statistik         |
| `ivory`      | Krem gading  | `#FAF7EF` | Kartu dan input                  |
| `sand`       | Pasir        | `#F1EBDA` | Latar alternatif                 |
| `ink`        | Arang hijau  | `#1C2B25` | Teks utama                       |
| `white`      | Putih        | `#FFFFFF` | Latar utama                      |

### Color Distribution

Gunakan proporsi visual:

- 60% warna terang: Ivory dan Sand.
- 30% warna hijau: Emerald dan Forest.
- 10% warna emas: Gold dan turunannya.

### Color Restrictions

- Jangan menambahkan warna baru tanpa persetujuan.
- Jangan menggunakan emas sebagai warna dominan.
- Jangan menggunakan teks emas di atas latar Ivory atau Sand.
- Jangan menggunakan teks putih di atas latar Gold.
- Jangan menggunakan warna sebagai satu-satunya penanda status.
- Warna merah untuk error hanya boleh digunakan sesuai ketentuan dan persetujuan brand.
- Pastikan kontras memenuhi WCAG 2.2 AA.

## 3. TYPOGRAPHY

Gunakan **Poppins** sebagai satu-satunya keluarga font.

Bobot yang diperbolehkan:

- 400 — Regular
- 500 — Medium
- 600 — SemiBold
- 700 — Bold

Dilarang menggunakan font lain atau bobot di luar ketentuan.

### Typography Scale

| Elemen     | Desktop | Mobile |  Weight |
| ---------- | ------: | -----: | ------: |
| Display    |    56px |   36px |     700 |
| H1         |    44px |   32px |     700 |
| H2         |    32px |   26px |     600 |
| H3         |    24px |   20px |     600 |
| H4         |    20px |   18px |     600 |
| Body Large |    18px |   16px |     400 |
| Body       |    16px |   16px |     400 |
| Small      |    14px |   14px | 400/500 |
| Caption    |    12px |   12px |     500 |

Ketentuan:

- Teks isi minimal 16px.
- Ukuran terkecil yang diizinkan 12px.
- Line height mengikuti skala tipografi resmi.
- Judul menggunakan letter-spacing `-0.01em`.
- Teks paragraf rata kiri.
- Gunakan maksimal lebar baris 65ch.
- Hindari penggunaan huruf kapital semua untuk kalimat panjang.

## 4. LAYOUT & SPACING

Gunakan sistem jarak berbasis kelipatan 4px.

| Token      | Ukuran |
| ---------- | -----: |
| `space-1`  |    4px |
| `space-2`  |    8px |
| `space-3`  |   12px |
| `space-4`  |   16px |
| `space-6`  |   24px |
| `space-8`  |   32px |
| `space-12` |   48px |
| `space-16` |   64px |
| `space-24` |   96px |

Ketentuan:

- Hindari angka spacing di luar skala.
- Gunakan layout yang rapi dan memiliki hierarki visual.
- Pastikan konten tidak terlalu padat.
- Gunakan whitespace untuk memisahkan kelompok informasi.
- Gunakan grid dan alignment yang konsisten.

### Border Radius

| Token         | Ukuran |
| ------------- | -----: |
| `radius-sm`   |    8px |
| `radius-md`   |   12px |
| `radius-lg`   |   20px |
| `radius-xl`   |   32px |
| `radius-pill` |  999px |

### Responsive Breakpoints

- 480px
- 768px
- 1024px
- 1280px

Gunakan pendekatan mobile-first dan pastikan tidak ada horizontal overflow.

## 5. COMPONENT DESIGN

### Buttons

- Bentuk pill penuh.
- Tinggi minimum 44px.
- Padding horizontal 32px.
- Font Poppins 600.
- Maksimal satu tombol primer dalam satu bagian.
- Gunakan transisi 150ms ease-out.

Varian:

1. Primary: Emerald dengan teks Ivory.
2. Accent: Gold dengan teks Forest.
3. Secondary: Transparan dengan border Emerald.
4. Text: Tautan teks dengan underline saat hover.

### Cards

- Latar putih.
- Border radius 20px.
- Padding 16–24px.
- Gunakan shadow-card.
- Struktur konten harus jelas.
- Maksimal satu aksi utama per kartu.

### Forms

- Tinggi input 48px.
- Bentuk pill.
- Border Emerald 1.5px.
- Latar putih.
- Setiap input wajib memiliki label.
- Focus menggunakan ring Gold Dark.
- Error harus memiliki ikon dan pesan yang menjelaskan cara memperbaiki.

### Tables

Untuk AMS, tabel merupakan komponen utama pengelolaan data.

- Gunakan tampilan bersih dan mudah dibaca.
- Header tabel harus memiliki hierarki visual yang jelas.
- Gunakan warna netral resmi untuk permukaan dan pemisah.
- Sediakan pencarian, filter, sorting, dan pagination jika diperlukan.
- Bedakan status menggunakan teks dan ikon, bukan warna saja.
- Pastikan tabel tetap nyaman digunakan di perangkat mobile.

### Navigation

- Gunakan navigasi yang konsisten.
- Tampilkan menu berdasarkan permission pengguna.
- Gunakan Emerald dan Forest sebagai identitas utama.
- Indikator halaman aktif harus terlihat jelas.
- Jangan menampilkan menu yang tidak memiliki fungsi.

### Icons

- Gunakan ikon bergaya outline.
- Ketebalan garis 1.5–2px.
- Ukuran 20px, 24px, atau 32px.
- Hindari emoji sebagai ikon fungsional.
- Gunakan warna Emerald pada latar terang dan Ivory/Gold Light pada latar gelap.

## 6. SHADOW & MOTION

Gunakan shadow yang lembut dan tidak berlebihan.

- Card: `shadow-card`.
- Primary button: `shadow-button`.
- Tombol selain primary tidak menggunakan shadow.
- Transisi umum 150–250ms dengan ease-out.
- Animasi tidak boleh melebihi 400ms.
- Animasi hanya untuk feedback interaksi.
- Hormati `prefers-reduced-motion`.

## 7. APPLICATION UI/UX

Terapkan standar khusus aplikasi administrasi:

- Dashboard harus mengutamakan informasi penting.
- Sidebar dan navigasi harus konsisten.
- Gunakan breadcrumb untuk navigasi bertingkat jika diperlukan.
- Form input harus terstruktur dan tidak berlebihan.
- Tampilkan konfirmasi untuk tindakan penting.
- Sediakan loading, empty, success, dan error states.
- Data penting harus mudah ditemukan.
- Gunakan modal atau drawer hanya jika memang membantu alur kerja.
- Hindari penggunaan terlalu banyak kartu statistik.
- Prioritaskan kecepatan akses dan efisiensi pekerjaan administrasi.

## 8. ACCESSIBILITY

- Target sentuh minimum 44 × 44px.
- Kontras teks normal minimal 4.5:1.
- Kontras teks besar dan ikon minimal 3:1.
- Semua elemen interaktif dapat digunakan dengan keyboard.
- Focus state harus terlihat.
- Gunakan semantic HTML.
- Semua gambar bermakna wajib memiliki alt.
- Setiap input memiliki label.
- Gunakan pesan error yang jelas.

## 9. DESIGN TOKEN IMPLEMENTATION

Seluruh warna, font, spacing, radius, shadow, dan motion harus dikelola melalui satu sumber design tokens.

AI wajib:

1. Membuat atau menggunakan centralized design tokens.
2. Menggunakan CSS variables atau Tailwind theme configuration.
3. Tidak menulis hex color langsung pada komponen.
4. Tidak menulis ukuran spacing di luar token.
5. Tidak menggunakan inline styling untuk warna dan tipografi.
6. Menggunakan nama class berdasarkan fungsi, bukan warna.
7. Mengubah token terlebih dahulu jika diperlukan penambahan gaya baru.

Jangan membuat token duplikat untuk fungsi yang sama.

## 10. AI DESIGN WORKING RULES

Saat mengembangkan UI:

1. Periksa design tokens dan komponen yang sudah tersedia.
2. Gunakan kembali komponen yang ada.
3. Jangan membuat desain baru yang bertentangan dengan guideline.
4. Jangan mengubah identitas warna atau tipografi tanpa persetujuan.
5. Pastikan konsistensi antarhalaman.
6. Jangan membuat tombol dekoratif tanpa fungsi.
7. Periksa tampilan desktop dan mobile.
8. Periksa kontras, spacing, alignment, dan hierarki visual.
9. Jalankan pemeriksaan sebelum menyelesaikan tugas.
10. Laporkan setiap kebutuhan desain yang belum tercakup dalam guideline.

Jika kebutuhan desain belum tersedia, usulkan penambahan design token atau komponen terlebih dahulu. Jangan membuat pengecualian sendiri.

---

## FINAL DIRECTIVE

**ONE BRAND — ONE DESIGN SYSTEM — CONSISTENT EXPERIENCE.**

Seluruh antarmuka AMS harus mengikuti identitas visual resmi Pondok Modern As-Sadid.

Prioritaskan konsistensi, keterbacaan, kesederhanaan, aksesibilitas, dan kemudahan penggunaan daripada dekorasi visual.

Tidak boleh ada halaman yang memiliki gaya visual sendiri di luar sistem desain yang telah ditetapkan.
