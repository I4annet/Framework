# Jobsheet 7 - API Routes

###  Langkah Praktikum

Langkah 1 - Membuat API Produk
---

<li><h3> Buat file pad pages/api/produk.js</h3></li>

![images](images/Praktikum1.1.png)

<li><h3> Buat kode statis</h3></li>

![images](images/Praktikum1.2.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil1.png)

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

<li><h3> Simpan gambar not-found.png ke folder public/ dan rename agar memudahkan </li>

![image](images/gambar5.1.png)

<li><h3> Modifikasi kode pada 404.tsx: </li>

![image](images/gambar5.2.png)

<h3> Hasil : </h3>

![image](images/gambar5.3.png)


### Tugas Praktikum

![image](images/tugas1.1.png)

![image](images/tugas1.2.png)

<h3> Hasil : </h3>


![image](images/tugas1.3.gif)


### Pertanyaan Refleksi 

Pertanyaan Evaluasi
1. Apa fungsi utama _document.js?

Jawaban : Untuk mengatur dan memodifikasi struktur dasar dokumen HTML aplikasi secara global. File tersebut juga digunakan untuk mengatur elemen < html >, < head >, dan < body > yang membungkus seluruh halaman aplikasi.

2. Mengapa < title> tidak disarankan di _document.js?

Jawaban : Karena file tersebut bersifat global dan tidak mendukung perubahan dinamis untuk setiap halaman, jika < title > diletakkan disana maka semua halaman memiliki judul yang sama.

3. Apa perbedaan halaman biasa dan halaman 404.js?

Jawaban : Halaman biasa adalah halaman yang dibuat sesuai dengan sistem routing Next.js dan dapat diakses melalui URL tertentu, seperti /about atau /produk sedangkan halaman 404.js adalah halama khusus yang secara otomatis ditampilkan oleh Next.js ketika akses URL nya tidak tersedia.

4. Mengapa folder public tidak perlu di-import?

Jawaban : Karena folder public merupakan root path nya aplikasi sehingga kita tidak perlu mengimportnya melainkan dengan cara mengakses URL nya.