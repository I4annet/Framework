# Jobsheet 8 - Client Side Rendering & Data Fetching

###  Langkah Praktikum

Langkah 1 - Setup Data Produk
---

<li><h3> Menambah field yang berisi image address di Firebase </h3></li>

![images](images/Praktikum1.png)

<li><h3> Hasil jalankan browser http://localhost:3000/api/produk : </h3></li>

![images](images/Hasil1.png)

Langkah 2 - Implementasi CSR dengan useEffect
---

<li><h3> Membuat file index.tsx pada folder views/products </h3></li>

![images](images/Praktikum2.1.png)

<li><h3> Modifikasi index.tsx</h3></li>

![images](images/Hasil2.png)

<li><h3>Buka file index.tsx pada pages/produk/</h3></li>

<li><h3>Modifikasi index.tsx pada pages/produk/</h3></li>

Langkah 3 - Setup Firebase
---

![images](images/Praktikum3.1.gif)


![images](images/Praktikum3.2.png)

![images](images/Praktikum3.3.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil3.png)

<li><h3> Klik add app dan pilih Web </li>

![images](images/Praktikum3.4.png)

<li><h3> Klik register app </li>

![images](images/Praktikum3.5.png)

<li><h3> Klik continue to console </li>

![images](images/Praktikum3.6.png)

<li><h3> Aktifkan Firestore Database </li>

![images](images/Praktikum3.7.png)

<li><h3> Create Database </li>

![images](images/Praktikum3.8.png)

<li><h3> Pilih Location (Jakarta) </li>

![images](images/Praktikum3.9.png)

<li><h3> Dan klik Create </li>

![images](images/Praktikum3.10.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil4.png)

<li><h3> Ubah rulesnya menjadi true dan publish </h3></li>

![images](images/Praktikum3.11.png)

<li><h3> Buat collection (products) </h3></li>

![images](images/Praktikum3.12.png)

<li><h3> Gunakan auto-id dan tambahkan field </h3></li>

![images](images/Praktikum3.13.png)

<li><h3> Hasil Akhir : </h3></li>

![images](images/Hasil5.png)

Langkah 4 - Install Firebase
---

<li><h3> Install firebase menggunakan perintah <i>npm install firebase</i></li>

![image](images/Praktikum4.1.png)

<li><h3> Buat folder dan file ts pada pages utlis/db/firebase.ts </li>

![image](images/Praktikum4.2.png)

<h4>Lalu copy paste kode yang ada di firebase ke dalam file firebase.ts</h4>

Langkah 5 - Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush
di repository
---

<li><h3> Buat file: .env.local </li>

![image](images/Praktikum5.1.png)

<li><h3> Modifikasi kode dan sesuaikan dengan firebase Isikan sesuai dengan yang ada pada ( tanpa koma dan petik dua) </li>

![image](images/Praktikum5.2.png)

Langkah 6 - Konfigurasi Firebase 
---

<li><h3> Modifikasi firebase.ts </li>

![image](images/Praktikum6.1.png)

Langkah 7 - Ambil Data dari Firestore
---

<li><h3> Buat file servicefirebase.js </li>

![image](images/Praktikum7.1.png)

<li><h3>modifikasi file servicefirebase.js </li>

![image](images/Praktikum7.2.png)

Langkah 8 - API Mengambil Data Firebase
---

<li><h3> Edit pages/api/produk.js: </li>

![image](images/Praktikum8.1.png)

<li><h3> Hasil : </h3></li>

![image](images/Hasil6.png)

<li><h3> Modifikasi index.ts pada produk sesuaikan nama typenya dan db nya </li>

![image](images/Praktikum8.2.png)

<li><h3> Hasil : </h3></li>

![image](images/Hasil7.png)


### Tugas Praktikum

![image](images/Hasil8.png)

![image](images/Hasil9.png)

### Pertanyaan Refleksi 

Pertanyaan Evaluasi

1. Apa fungsi API Routes pada Next.js?

Jawaban : untuk membuat endpoint backend langsung di dalam proyek yang sama dengan frontend.

2. Mengapa .env.local tidak boleh di-push ke repository?

Jawaban : Karena biasanya berisi informasi yang sensitif seperti API Key, password database dan lain-lain.

3. Apa perbedaan data statis dan data dinamis?

Jawaban : Data statis adalah data yang tetap dan tidak dapat berubah selama aplikasi berjalan, sedangkan Data Dinamis adalah data yang dapat berubah-ubah dan biasanya diambil dari database, API, atau input pengguna saat aplikasi dijalankan.

4. Mengapa Next.js disebut framework fullstack?

Jawaban : Karena dapat menangani backend dan frontend dalam satu framework.