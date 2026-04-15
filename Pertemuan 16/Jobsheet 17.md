# Jobsheet 17 - Implementasi Login Google Provider dengan NextAuth.js + Firebase

###  Langkah Praktikum

Bagian 1 - Konfigurasi Google OAuth
---

<li><h3>Langkah 1 – Masuk ke Google Cloud Console Buka: https://console.cloud.google.com/apis/credentials</h3></li>

![images](images/Langkah1.png)

<li><h3>Langkah 2 – Buat Project Baru </h3></li>

![images](images/Langkah1.0.png)

<li><h4>Klik New Project </h4></li>

![images](images/Langkah1.1.png)


<li><h4>Nama project: MyAppNext </h4></li>

![images](images/Langkah1.2.png)

<li><h4>Klik Create: Setelah berhasil klik https://console.cloud.google.com/apis/credentials pastikan
projectnya MyAppNext </h4></li>


<li><h3>Langkah 3 – Konfigurasi OAuth Consent Screen </h3></li>

<li><h4>Pilih OAuth Consenst Screen dan Pilih Get Started </h4></li>

![images](images/Langkah3.png)

<li><h4>Isikan </h4></li>

![images](images/Langkah3.1.png)

![images](images/Langkah3.2.png)

![images](images/Langkah3.3.png)

![images](images/Langkah3.4.png)

<li><h3>Langkah 4 – Buat OAuth Credentials </h3></li>

<li><h4>Klik create client pada Clients</h4></li>

![images](images/Langkah4.png)

Bagian 2 - Tambahkan Environment Variables
---

<li><h3>Copy dan paste client ID dan Client secret ke .env</h3></li>


Bagian 3 -Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
---

<li><h3>Buka file [...nextauth].ts pada folder api/auth dan modifikasi menjadi berikut </li> 

![images](images/Kode3.png)

![images](images/Kode3.1.png)


Bagian 4 - Tambahkan Button Login Google
---

<li><h3>Modifikasi file index.tsx pada folder views/auth/login</h3></li>

![images](images/Kode4.png)

<li><h3> Jalankan browser localhost:3000/auth/login masuk melalui sign in with google.Jika
berhasil maka akan terhubung dengan akun google. </h3></li>

![images](images/Hasil4.png)

<li><h3>Menampilkan image dari google</h3></li>

![images](images/Kode4.1.png)

<li><h3>Buka file navbar.module.css dan tambahkan code berikut</h3></li>

![images](images/Kode4.2.png)

<li><h3> Hasil: </h3></li>

![images](images/Hasil4.1.png)

Bagian 5 - Simpan Data Google ke Database
---

<li><h3>Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa
kode beriku dan tambahkan juga code berikut </h3></li>

![images](images/Kode5.png)

<li><h3>Panggil Service di JWT Callback buka file [...nextAuth].ts</h3></li>

![images](images/Kode5.1.png)

<li><h3>Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika
data akun googlenya masuk ke database maka anda telah berhasil</h3></li>

![images](images/Hasil5.png)

### Pertanyaan Individu

1. Apa perbedaan login credential dan login Google?

Jawaban : Credential memakai email & password yang disimpan sendiri di database. Sedangkan Google memakai akun Google (OAuth), tanpa perlu simpan password di sistem kita.

2. Mengapa data Google tetap perlu disimpan ke database?

Jawaban : Agar aplikasi punya data user sendiri (role, profil, histori, dll) yang tidak disediakan penuh oleh Google.

3. Apa fungsi JWT callback?

Jawaban : Untuk menyimpan dan mengatur data penting (seperti email, role) ke dalam token agar bisa digunakan di seluruh aplikasi tanpa query ulang ke database.

4. Mengapa perlu multi-role?

Jawaban : Untuk membedakan hak akses user (misalnya admin, user) sehingga tiap user hanya bisa mengakses fitur sesuai perannya.

5. Apa risiko jika tidak menyimpan user ke database?

Jawaban : Tidak bisa mengatur role, menyimpan data tambahan, atau mengelola user (semua bergantung ke provider seperti Google).