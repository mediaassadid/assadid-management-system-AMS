# TASK RULES — AMS TAHAP 1
## AI Coding Assistant Working Instructions

Dokumen ini mengatur cara kerja AI Coding Assistant selama pengembangan As-Sadid Management System (AMS) Tahap 1.

AI wajib mengikuti aturan ini pada setiap permintaan pengembangan, perbaikan, maupun perubahan kode.

---

## 1. READ BEFORE WORKING

Sebelum mengerjakan tugas:

1. Baca `PROJECT_RULES_TAHAP 1.md`.
2. Baca `TASK_RULES_TAHAP 1.md`.
3. Periksa struktur folder dan teknologi yang sudah digunakan.
4. Periksa file terkait dengan tugas yang diberikan.
5. Pahami relasi database, komponen, dan fungsi yang sudah tersedia.
6. Jangan mengasumsikan struktur atau kode yang belum diperiksa.

Jangan membuat ulang file atau fitur yang sebenarnya sudah tersedia.

## 2. TASK ANALYSIS

Sebelum menulis kode:

1. Pahami tujuan dan hasil yang diminta.
2. Identifikasi modul serta file yang terdampak.
3. Periksa kemungkinan konflik dengan fitur yang sudah berjalan.
4. Identifikasi kebutuhan database, validasi, autentikasi, dan otorisasi.
5. Tentukan solusi paling sederhana yang sesuai dengan arsitektur AMS.

Jika instruksi tidak jelas atau terdapat keputusan penting yang belum ditentukan, tanyakan terlebih dahulu.

## 3. IMPLEMENTATION WORKFLOW

Kerjakan tugas dengan urutan berikut:

**A. Planning**
- Jelaskan pendekatan implementasi secara singkat.
- Sebutkan file yang akan dibuat atau diubah.
- Identifikasi perubahan database jika diperlukan.

**B. Implementation**
- Implementasikan kode secara lengkap.
- Ikuti struktur folder dan coding standards AMS.
- Gunakan komponen yang dapat digunakan kembali.
- Pisahkan UI, business logic, database access, validation, dan authorization.
- Jangan mengubah fitur lain yang tidak berkaitan dengan tugas.

**C. Verification**
- Jalankan lint.
- Jalankan TypeScript type-check.
- Jalankan build jika relevan.
- Periksa error dan perbaiki sebelum menyelesaikan tugas.
- Uji alur utama dan kondisi gagal.

**D. Completion Report**
Setelah selesai, berikan laporan berisi:
- Ringkasan perubahan.
- Daftar file yang dibuat atau diubah.
- Perubahan database atau migration.
- Hasil pengujian.
- Hal yang belum selesai atau perlu perhatian.

Jangan menyatakan berhasil jika belum diverifikasi.

## 4. DATABASE RULES

- Periksa skema dan relasi sebelum mengubah database.
- Jangan mengubah struktur tabel secara langsung tanpa migration.
- Setiap perubahan schema harus memiliki migration baru.
- Jangan menghapus tabel, kolom, atau data tanpa persetujuan.
- Pertahankan integritas foreign key dan unique constraint.
- Gunakan transaction untuk operasi yang melibatkan beberapa perubahan data.
- Periksa dampak migration terhadap fitur sebelumnya.
- Jangan menjalankan migration production secara otomatis.

## 5. SECURITY RULES

- Authentication dan authorization wajib dilakukan di server.
- Jangan mempercayai input dari frontend.
- Validasi semua input menggunakan schema validation.
- Jangan menyimpan atau menampilkan password plaintext.
- Gunakan Argon2id untuk password hashing.
- Jangan mengekspos secret key, database credentials, atau session token.
- Lindungi seluruh endpoint dan server actions yang memproses data sensitif.
- Periksa role dan permission sebelum melakukan operasi.
- Terapkan pembatasan akses berdasarkan unit pendidikan jika diperlukan.
- Catat aktivitas penting pada audit logs.

## 6. CODE QUALITY

- Gunakan TypeScript dengan tipe yang jelas.
- Hindari penggunaan `any`.
- Hindari kode duplikat dan fungsi yang terlalu panjang.
- Gunakan penamaan variabel dan fungsi yang deskriptif.
- Pisahkan komponen berdasarkan tanggung jawab.
- Hindari penggunaan dependency baru tanpa alasan yang jelas.
- Jangan menggunakan workaround yang mengorbankan keamanan atau integritas data.
- Jangan meninggalkan kode sementara, debugging, atau TODO tanpa penjelasan.

## 7. UI/UX RULES

- Pertahankan konsistensi desain AMS.
- Gunakan komponen UI yang sudah tersedia sebelum membuat komponen baru.
- Pastikan seluruh form memiliki validasi.
- Tampilkan feedback untuk loading, success, empty, dan error states.
- Gunakan konfirmasi sebelum tindakan penting seperti penghapusan atau perubahan status.
- Pastikan tampilan responsif.
- Jangan membuat tombol atau menu yang belum memiliki fungsi nyata.
- Pastikan navigasi sesuai dengan hak akses pengguna.

## 8. SCOPE CONTROL

- Fokus pada tugas yang sedang diberikan.
- Jangan mengembangkan modul di luar Tahap 1 tanpa instruksi.
- Jangan melakukan refactoring besar tanpa kebutuhan.
- Jangan mengganti framework, database, atau arsitektur tanpa persetujuan.
- Jangan mengubah file konfigurasi penting tanpa menjelaskan dampaknya.
- Jika menemukan masalah di luar lingkup tugas, laporkan terlebih dahulu.

## 9. ERROR HANDLING

Jika terjadi error:

1. Identifikasi penyebab sebenarnya.
2. Periksa log dan file terkait.
3. Jangan menutupi error dengan menghapus validasi atau menonaktifkan keamanan.
4. Perbaiki akar masalah.
5. Jalankan kembali pengujian.
6. Laporkan jika masalah belum dapat diselesaikan.

Jangan melanjutkan ke implementasi berikutnya jika error kritis belum diselesaikan.

## 10. AUTONOMY & APPROVAL

AI boleh secara mandiri:
- Membaca dan menganalisis kode.
- Membuat komponen dan fungsi yang diperlukan.
- Memperbaiki bug dalam ruang lingkup tugas.
- Menambahkan migration baru.
- Menambahkan test.
- Melakukan refactoring kecil yang diperlukan.

AI wajib meminta persetujuan sebelum:
- Menghapus data atau tabel.
- Mengubah arsitektur utama.
- Mengganti teknologi utama.
- Mengubah autentikasi atau kebijakan keamanan secara fundamental.
- Melakukan perubahan yang berdampak luas pada fitur lain.
- Menjalankan tindakan destructive pada database.

Jangan mengklaim telah melakukan deployment, migrasi, atau perubahan eksternal jika tindakan tersebut belum benar-benar dilakukan.

---

## FINAL WORKING PRINCIPLE

**UNDERSTAND → PLAN → IMPLEMENT → VERIFY → REPORT**

Utamakan ketepatan, keamanan, konsistensi, dan integritas data daripada kecepatan menghasilkan kode.

Setiap fitur harus benar-benar berfungsi, teruji, dan mengikuti `PROJECT_RULES_TAHAP 1.md`.

Jangan hanya membuat kode yang terlihat selesai. Bangun kode yang siap dikembangkan dan dipelihara dalam jangka panjang.