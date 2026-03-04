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

<li><h3> Buka file index.tsx pada folder views/products dan modfikasi kode index.tsx </h3></li>

![images](images/Praktikum2.png)

<li><h3> Modifikasi index.tsx pada pages/produk/ </h3></li>

![images](images/Praktikum2.1.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil2.png)

<li><h3>Modifikasi produk.modules.scss/</h3></li>

![images](images/Praktikum2.3.png)


<li><h3>Modifikasi Pada file index.tsx pada folder pages/views/product</h3></li>

![images](images/Praktikum2.2.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil3.png)

Langkah 3 - Implementasi Skeleton Loading
---

<li><h3> Modfikasi file index.tsx pada folder views/product/index.tsx </li>

![images](images/Praktikum3.1.png)

<li><h3> Modifikasi file product.module.scss </li>

![images](images/Praktikum3.png)

<li><h3> Hasil Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip : </h3></li>

![images](images/Hasil4.png)

<li><h3> Modifikasi pada index.tsx pada folder views/product/index.tsx </li>

![images](images/Praktikum3.2.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil5.png)

Langkah 4 - Implementasi SWR
---

<li><h3> Install SWR menggunakan perintah <i>npm install swr</i></li>

![image](images/Praktikum4.1.png)

<li><h3> Buka dan modifkasi file index.tsx pada folder pages/product/ </li>

![image](images/Praktikum4.2.png)

<li><h3> Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js </li>

![image](images/Praktikum5.1.png)

<li><h3> Modifikasi file fetcher.ts </li>

![image](images/Praktikum5.2.png)

<li><h3> Modifikasi file index.tsx pada folder pages/produk </li>

![image](images/Praktikum6.1.png)




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