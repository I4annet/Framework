# Jobsheet 10 - Static Site Generation (SSG)

###  Langkah Praktikum

Bagian 1 - Setup Halaman Static
---

<li><h3> Buat file baru pada pages/products/server.tsx </h3></li>

![images](images/Praktikum1.1.png)

<li><h3> Modifikasi file server.tsx : </h3></li>

![images](images/Praktikum1.png)

<li><h3> Jalankan browser : http://localhost:3000/produk/server </h3></li>

<li><h3> Hasil Bagian 1: </h3></li>

![images](images/Hasil1.png)

Bagian 2 - Implementasi getServerSideProps pada server.tsx
---

<li><h3> Menambahkan getServerSideProps() di pages/produk/server.tsx </h3></li>

![images](images/Praktikum2.png)

<li><h3> Hasil Bagian 2 : </h3></li>

![images](images/Hasil2.png)

Bagian 3 - Refactor Type ( produk type )
---

<li><h3> Buat folder types pada folder pages dan buat file Product.type.ts </li>

![images](images/Praktikum3.1.png)

<li><h3> Modifikasi Product.type.ts </li>

![images](images/Praktikum3.png)

<li><h3> Modifikasikan juga pada file server.tsx </h3></li>

![images](images/Praktikum3.2.png)

Bagian 4 - Uji Perbedaan CSR vs SSR
---

<li><h3> Uji 1 - Skeleton </h3></li>

  <li><h4> CSR </h4></li>

![image](images/Praktikum4.1.gif)

 <li><h4> SSR </h4></li>

![image](images/Praktikum4.gif)

<li><h3> Uji 2 - Network Tab </li>

<li><h4> SSR </h4></li>

![image](images/Praktikum4.2.png)

  <li><h4> CSR </h4></li>

![image](images/Praktikum4.3.png)

<li><h3> Uji 3 - Response HTML </li>

<li><h4> CSR </h4></li>

![image](images/Praktikum4.4.png)

<li><h4> SSR </h4></li>

![image](images/Praktikum4.5.png)


### Tugas Praktikum

Analisis : Berdasarkan hasil pengujian yang dilakukan, dapat disimpulkan bahwa Client Side Rendering (CSR) menampilkan skeleton loading karena data diambil setelah halaman dimuat di browser. HTML awal yang dikirim server juga tidak berisi data produk.

Sedangkan pada Server Side Rendering (SSR), data sudah diproses di server sehingga HTML yang dikirim ke browser sudah lengkap. Hal ini menyebabkan halaman dapat langsung menampilkan data tanpa skeleton loading.

Dengan demikian, SSR lebih unggul dalam kecepatan tampilan awal dan SEO, sedangkan CSR lebih fleksibel untuk aplikasi yang membutuhkan interaksi tinggi di sisi client.

### Studi Analisis 
Jawab pertanyaan berikut:
1. Mengapa SSR lebih baik untuk SEO?

<i>Jawaban:</i> Karena HTML yang dikirim ke browser sudah berisi konten lengkap sehingga mesin pencari dapat langsung membaca dan mengindeks halaman.

2. Kapan sebaiknya menggunakan SSR?

<i>Jawaban:</i> Saat halaman membutuhkan data yang selalu terbaru dan ketika SEO penting, contohnya website berita atau e-commerce

3. Apa kekurangan SSR dibanding CSR?

<i>Jawaban:</i> Beban server lebih besar karena server harus merender halamana setiap ada permintaan pengguna

4. Mengapa skeleton tidak muncul pada SSR?

<i>Jawaban:</i> Karena data sudah diproses di server sehingga halaman langsung menampilkan data tanpa proses loading di browser