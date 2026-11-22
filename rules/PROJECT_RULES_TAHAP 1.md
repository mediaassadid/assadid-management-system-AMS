# AMS — PROJECT RULES
## As-Sadid Management System

### 1. PROJECT OBJECTIVE
Bangun **As-Sadid Management System (AMS)**, sebuah sistem informasi manajemen sekolah terpadu untuk Pondok Pesantren Modern As-Sadid.

Sistem dirancang untuk mengelola seluruh aktivitas administrasi pendidikan secara terpusat, terstruktur, efisien, aman, dan dapat dikembangkan dalam jangka panjang.

AMS merupakan aplikasi untuk satu institusi dengan empat unit pendidikan:
- PAUD/TK
- SD
- SMP
- SMA

### 2. TECHNOLOGY STACK
Gunakan teknologi berikut:
- Frontend & Backend: Next.js (App Router) + TypeScript
- Styling: Tailwind CSS
- Database: Supabase PostgreSQL
- File Storage: Supabase Storage
- Validation: Zod
- Form Management: React Hook Form
- Version Control: GitHub
- Deployment: Vercel

**Authentication:** Custom authentication tanpa Supabase Auth. Gunakan username dan password, password hashing Argon2id, serta session management yang aman di server.

### 3. USER ROLES
Sistem harus mendukung role-based access control (RBAC):
- Super Admin
- Pimpinan
- Kepala Sekolah
- Admin
- Guru
- Wali Kelas
- Staf Keuangan
- Siswa

Ketentuan:
- Akun dibuat dan dikelola oleh Super Admin.
- Mendukung pembuatan akun individual dan import massal.
- Tidak ada registrasi publik.
- Satu pengguna dapat memiliki lebih dari satu role.
- Hak akses dapat dibatasi berdasarkan unit pendidikan.

### 4. INITIAL DEVELOPMENT PRIORITY
Fokus tahap awal hanya pada:
1. Authentication & Session Management.
2. Manajemen pengguna dan hak akses.
3. Master data unit pendidikan.
4. Tahun ajaran dan kelas.
5. Data siswa.
6. Data guru dan pegawai.

Jangan mengembangkan seluruh modul sekaligus. Selesaikan dan uji setiap modul sebelum melanjutkan.

### 5. DATABASE PRINCIPLES
- Gunakan PostgreSQL relational database.
- Gunakan UUID sebagai primary key.
- Gunakan snake_case untuk nama tabel dan kolom.
- Pisahkan data akun, profil, siswa, dan pegawai.
- Satu identitas siswa berlaku lintas jenjang pendidikan.
- Riwayat pendidikan siswa dicatat melalui enrollment.
- Kelas harus terhubung dengan unit pendidikan dan tahun ajaran.
- Hindari duplikasi data.
- Gunakan foreign key, unique constraint, dan index secara tepat.
- Perubahan database wajib menggunakan migration yang terdokumentasi.
- Data penting sebaiknya diarsipkan, bukan langsung dihapus.

### 6. CODING STANDARDS
- Gunakan modular architecture dengan pemisahan fitur.
- Pisahkan UI, business logic, database access, validation, dan authorization.
- Gunakan reusable components.
- Hindari duplikasi kode.
- Gunakan TypeScript secara konsisten dan hindari `any`.
- Gunakan server-side validation.
- Jangan menaruh business logic penting hanya di frontend.
- Buat kode sederhana, bersih, konsisten, dan mudah dipelihara.
- Jangan membuat abstraksi berlebihan.

### 7. SECURITY RULES
- Jangan menggunakan Supabase Auth.
- Jangan menyimpan password dalam plaintext.
- Jangan mengekspos database credentials atau secret keys ke frontend.
- Semua pemeriksaan autentikasi dan otorisasi dilakukan di server.
- Terapkan session expiration, revocation, rate limiting, dan proteksi CSRF.
- Terapkan prinsip least privilege.
- UI hiding bukan pengganti authorization.
- Lindungi data berdasarkan role dan unit pendidikan.
- Catat aktivitas penting melalui audit logs.

### 8. UI/UX PRINCIPLES
Gunakan desain:
- Modern, minimalis, profesional, dan responsif.
- Dashboard administratif yang mudah dipahami.
- Navigasi konsisten berdasarkan role.
- Tabel data dengan pencarian, filter, sorting, dan pagination.
- Form sederhana dengan validasi dan pesan kesalahan yang jelas.
- Loading, empty, success, dan error states harus tersedia.
- Prioritaskan desktop, tetapi tetap nyaman digunakan di perangkat mobile.

### 9. AI VIBE CODING RULES
Saat mengembangkan sistem:
1. Pahami struktur proyek sebelum mengubah kode.
2. Jangan mengubah arsitektur utama tanpa alasan dan persetujuan.
3. Kerjakan secara bertahap berdasarkan modul.
4. Jangan merusak fitur yang sudah berjalan.
5. Selalu jelaskan file yang dibuat atau diubah.
6. Berikan implementasi lengkap, bukan pseudocode.
7. Periksa konsistensi database dan relasi sebelum membuat fitur.
8. Jalankan lint, type-check, dan build setelah perubahan yang relevan.
9. Perbaiki error sebelum melanjutkan.
10. Dokumentasikan keputusan teknis penting.

### 10. LONG-TERM SCALABILITY
Arsitektur harus memungkinkan pengembangan modul berikutnya:
- Presensi siswa dan pegawai.
- Jadwal pelajaran.
- Mata pelajaran.
- Penilaian dan rapor.
- Keuangan dan pembayaran SPP.
- Inventaris.
- Perpustakaan.
- Surat-menyurat.
- Notifikasi WhatsApp.
- Portal orang tua dan siswa.

**FINAL DIRECTIVE:**

Bangun AMS sebagai sistem manajemen pendidikan yang terintegrasi, bukan sekadar kumpulan halaman CRUD. Prioritaskan integritas data, keamanan, kemudahan penggunaan, modularitas, dan kemampuan pengembangan jangka panjang. Jangan mengimplementasikan fitur di luar ruang lingkup tahap aktif tanpa persetujuan.