# Jobsheet 6 - Custom Document dan Custom Error Page pada Next.js

###  Langkah Praktikum

Langkah 1 - Membuat Custom Document
---
![images](images/gambar1.1.png)

<li><h3> Hasil : </h3></li>

![images](images/gambar1.2.png)

Langkah 2 - Pengaturan Title per Halaman
---
![images](images/gambar2.2.png)

<li><h3> Hasil : </h3></li>

![images](images/gambar2.1.png)

Langkah 3 -– Membuat Custom Error Page (404)
---
<li><h3>Membuat file 404.tsx </h3></li>

![images](images/gambar3.1.png)

![images](images/gambar3.2.png)

<li><h3> Hasil : </h3></li>

![images](images/gambar3.3.png)

Langkah 4 - Styling Halaman 404
---

<li><h3> Buat file 404.module.scss di folder styles</li>

![image](images/gambar4.1.png)

<li><h3> Buat kode 404.module.scss </li>

![image](images/gambar4.2.png)

<li><h3> Modifikasi kode 404.tsx </li>

![image](images/gambar4.3.png)

<h3> Hasil: </h3>

![image](images/gambar4.4.png)

<li><h3> Menghilangkan Navbar </li>

![image](images/gambar4.5.png)

<h3> Hasil: </h3>

![image](images/gambar4.6.png)

Langkah 5 - Menampilkan Gambar dari Folder Public
---

<li><h3> Modifikasi index.tsx pada Navbar </li>

![image](../pertemuan-2/images/gambar16.png)

<li><h3> Modifikasi global.css </li>

![image](../pertemuan-2/images/gambar19.png)

<li><h3> Modifikasi index.ts pada folder pages </li>

![image](../pertemuan-2/images/gambar17.png)

<li><h3> Modifikasi _app.tsx ( pastikan import styles dalam keadaan aktif) </li>

![image](../pertemuan-2/images/gambar18.png)

<H3> Hasil: </h3>

![image](../pertemuan-2/images/gambar20.png)

Langkah 6 - Membuat Layout Global (App Shell)
---

<li><h3> Modifikasi index.tsx pad AppShell </li>

![image](../pertemuan-2/images/gambar21.png)

Langkah 7 -  Implementasi Layout di _app.tsx
---

![image](../pertemuan-2/images/gambar22.png)

<h3> Hasil: </h3>

![image](../pertemuan-2/images/gambar23.png)

### Tugas Praktikum

Tugas 1
---

1. Buat halaman:

o /profile

o /profile/edit

2. Pastikan routing berjalan tanpa error
<h3> Hasil: </h3>

![image](../pertemuan-2/images/gambar24.png)

Tugas 2
---

1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

![image](../pertemuan-2/images/gambar25.png)

Tugas 3 – Layout
---
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

<h3> Hasil : </h3>

![image](../pertemuan-2/images/gambar26.png)


### Pertanyaan Refleksi 

1. Apa perbedaan routing berbasis file dan routing manual?

Jawaban : Routing berbasis file otomatis membuat rute berdasarkan struktur folder, sedangkan routing manual mengharuskan developer mendefinisikan rute secara eksplisit

2. Mengapa dynamic routing penting dalam aplikasi web?

Jawaban : karena memungkinkan satu template halaman menangani banyak data berbeda berdasarkan parameter URL

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

Jawaban : Karena struktur seperti header dan footer dapat digunakan ulang di semua halaman tanpa duplikasi kode.