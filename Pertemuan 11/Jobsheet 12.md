# Jobsheet 12 - Incremental Static Regeneration (ISR)

###  Langkah Praktikum

Bagian 1 - Membuat Dynamic Route
---

<li><h3>Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )</h3></li>

![images](images/Praktikum1.png)

<li><h3> Hasil jalankan browser http://localhost:3000/produk : </h3></li>

![images](images/Hasil1.png)

Bagian 2 - Implementasi CSR (Client Rendering)
---

<li><h3> Modifikasi pada file [produk].tsx pada folder src/pages/produk/ </h3></li>

![images](images/Praktikum2.png)

<li><h3> Modifikasi file servicefirebase.ts</h3></li>

![images](images/Praktikum2.1.png)

<li><h3> Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts dan modifikasi isi kode pada file</h3></li>

![images](images/Praktikum2.2.png)

<li><h3> Jalankan alamat url http://localhost:3000/api/produk/123 </h3></li>

![images](images/Hasil2.png)

<li><h3>Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga
file dengan nama detailProduct.module.scss dan modifikasi filenya </h3></li>

![images](images/Praktikum2.3.png)

<li><h3>Modifikasi index.tsx pada folder DetailProduct</h3></li>

![images](images/Praktikum2.4.png)

<li><h3>Modifikasi file pada [product].tsx </h3></li>

![images](images/Praktikum2.5.png)

<li><h3>Modifikasi index.tsx pada folder views/detailProduct line 16 </h3></li>

![images](images/Praktikum2.4.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil2.1.png)

<h3><li>Agar tulisan detail produk ditengah maka modifikasi file detailProduct.module.scss line
103-108 dan file index.tsx tambahkan code pada line 7,8 dan 22 menjadi </h3></li>

![images](images/Praktikum2.7.png)
![images](images/Praktikum2.6.png)

<h3><li> Hasil : </h3></li>

![images](images/Hasil2.2.png)

Bagian 3 - Implementasi SSR
---

<li><h3> Modifikasi [produk].tsx pada folder src/pages/produk dan comment line 9 sampai 20
dikarena kita akan menggunakan metode SSR. Tambahkan beberapa kode untuk SSR </li>

![images](images/Praktikum3.png)

<li><h3>Jalankan browser http://localhost:3000/produk/server </h3></li>

![images](images/Hasil3.gif)

Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)
---

<li><h3> Buka file [produk].tsx dan modifikasi seperti berikut </i></li>

![image](images/Praktikum4.1.png)

<li><h3> Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11 </li>

![image](images/Praktikum4.png)

<li><h3> Jalankan browser http://localhost:3000/produk </li>

![image](images/Hasil4.gif)

### Pertanyaan Analisis

1. Mengapa getStaticPaths wajib pada dynamic SSG?

Jawaban : Karena Next.js perlu mengetahui daftar parameter (seperti ID) untuk membuat halaman dynamic saat build time. Tanpa ini, halaman tidak bisa digenerate. 

2. Mengapa CSR membutuhkan loading state?

Jawaban : Karena data diambil di sisi client setelah halaman ditampilkan, sehingga perlu indikator saat menunggu data.

3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?

Jawaban : Karena data diambil hanya pada saat build, sehingga perubahan setelah build tidak langsung terlihat

4. Mana metode terbaik untuk halaman detail e-commerce?

Jawaban : Menggunakan SSG + ISR, karena dibutuhkan performa yang cepat seperti SSG namun bisa memperbarui data secara berkala

5. Apa risiko menggunakan SSG untuk produk yang sering berubah?

Jawaban : data tidak menjadi up to date, sehingga data seperti harga atau stok yang sudah berubah tetapi masih menampilkan data yang lama