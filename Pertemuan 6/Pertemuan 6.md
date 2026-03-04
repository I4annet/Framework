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

Langkah 2 - Fetch Data API di Frontend
---

<li><h3> Tambahkan useEffect() dan comment useEffect untuk isLogin pada pages/product/index.tsx </h3></li>

![images](images/Praktikum2.1.png)

<li><h3> Hasil : </h3></li>

![images](images/Hasil2.png)

Langkah 3 - Setup Firebase
---
<li><h3>Buka Firebase Go To Console dan buat project </h3></li>

![images](images/Praktikum3.1.gif)

<li><h3>Buat project baru: Framework-next</h3></li>

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