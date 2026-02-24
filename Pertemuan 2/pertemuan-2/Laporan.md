# Jobsheet 3 - Page Dan Layout

###  Langkah Praktikum

Langkah 1 - Routing Dasar (Static Routing)
---
![images](/pertemuan-2/images/gambar1.png)

Langkah 2 - Routing Menggunakan Folder
---
![images](/pertemuan-2/images/gambar2.png)
![images](/pertemuan-2/images/gambar1.png)

Langkah 3 - Nested Routing
---
<li><h3> Modifikasi kode app.tsx dan tampilkan hasilnya  </li>

![images](/pertemuan-2/images/gambar6.png)
![images](/pertemuan-2/images/gambar7.png)

<li><h3> Modifikasi kode user.tsx dan tampilkan hasilnya  </li>

![images](/pertemuan-2/images/gambar5.png)
![images](/pertemuan-2/images/gambar8.png)

<li><h3>Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting
dipindah ke folder user dan rubah file user.tsx menjadi index.tsx </li>

![image](/pertemuan-2/images/gambar10.png)
![image](/pertemuan-2/images/gambar9.png)

<li><h3> Nested Lebih Dalam </li>

![image](/pertemuan-2/images/gambar11.png)

Langkah 4 - Dynamic Routing 
---

<h3><b> a. Buat Halaman Produk </h3>

![image](/pertemuan-2/images/gambar12.png)

<h3> Hasil: </h3>

![image](/pertemuan-2/images/gambar14.png)
![image](/pertemuan-2/images/gambar13.png)

Langkah 5 - Membuat Komponen Navbar 
---

<li><h3> Modifikasi index.tsx pada Navbar </li>

![image](/pertemuan-2/images/gambar16.png)

<li><h3> Modifikasi global.css </li>

![image](/pertemuan-2/images/gambar19.png)

<li><h3> Modifikasi index.ts pada folder pages </li>

![image](/pertemuan-2/images/gambar17.png)

<li><h3> Modifikasi _app.tsx ( pastikan import styles dalam keadaan aktif) </li>

![image](/pertemuan-2/images/gambar18.png)

<H3> Hasil: </h3>

![image](/pertemuan-2/images/gambar20.png)

Langkah 6 - Membuat Layout Global (App Shell)
---

<li><h3> Modifikasi index.tsx pad AppShell </li>

![image](/pertemuan-2/images/gambar21.png)

Langkah 7 -  Implementasi Layout di _app.tsx
---

![image](/pertemuan-2/images/gambar22.png)

<h3> Hasil: </h3>

![image](/pertemuan-2/images/gambar23.png)

### Tugas Praktikum

Tugas 1
---

1. Buat halaman:

o /profile

o /profile/edit

2. Pastikan routing berjalan tanpa error
<h3> Hasil: </h3>

![image](/pertemuan-2/images/gambar24.png)

Tugas 2
---

1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

![image](/pertemuan-2/images/gambar25.png)

Tugas 3 – Layout
---
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

<h3> Hasil : </h3>

![image](/pertemuan-2/images/gambar26.png)


### Pertanyaan Refleksi 

1. Apa perbedaan routing berbasis file dan routing manual?

Jawaban : Routing berbasis file otomatis membuat rute berdasarkan struktur folder, sedangkan routing manual mengharuskan developer mendefinisikan rute secara eksplisit

2. Mengapa dynamic routing penting dalam aplikasi web?

Jawaban : karena memungkinkan satu template halaman menangani banyak data berbeda berdasarkan parameter URL

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

Jawaban : Karena struktur seperti header dan footer dapat digunakan ulang di semua halaman tanpa duplikasi kode.