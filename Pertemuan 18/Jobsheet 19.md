# Jobsheet 19 - Implementasi Unit Testing pada Next.js menggunakan Jest

###  Langkah Praktikum

Praktikum 1 - Setup Jest di Next.js
---

<li><h3>1. Install Dependencies</h3></li>

<li><h4>Jalankan : npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force</h4></li>

![images](images/Kode1.png)

<li><h3>2. Buat File Konfigurasi</h3></li>

<li><h4>Buat file:
o jest.config.mjs dan modifikasi </h4></li>

![images](images/Kode1.1.png)

<li><h3>3. Tambahkan Script di package.json</h3></li>

![images](images/Kode1.2.png)

Praktikum 2 - Struktur Folder Testing
---

<li><h3>Buat folder: src/_test_/</h3></li>

![images](images/Kode2.png)

Praktikum 3 - Testing Halaman About
---

<li><h3>Buat File Testing </li> 
<li><h4>src/__test__/pages/about.spec.tsx </h4></li>

![images](images/Kode3.png)

<li><h3> Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut :</h3></li>

![images](images/Kode3.1.png)

<li><h3>Jalan Testing </li> 
<li><h4>npm run test, jika berhasil PASS about.spec.tsx</h4></li>

![images](images/Hasil3.png)

Praktikum 4 – Coverage Report
---

<li><h3>Jalankan: npm run test:coverage</h3></li>

![images](images/Hasil4.png)

<li><h3> Akan muncul folder dan Buka:
▪ coverage/lcov-report/index.html ( buka di melalui explorer) </h3></li>
Minimum 80% coverage

![images](images/Kode4.png)
![images](images/Hasil4.1.png)

Praktikum 5 – Konfigurasi Coverage Lengkap
---

<li><h3>Update jest.config.mjs:</h3></li>

![images](images/Kode5.png)

<li><h3> Jalankan npm run test:coverage </h3></li>

![images](images/Hasil5.png)

<li><h3> Jika dilihat di index.htmlnya </h3></li>

![images](images/Hasil5.2.png)

Praktikum 6 – Testing dengan getByTestId
---

<li><h3>Tambahkan pada About Page </h3></li>

![images](images/Kode6.png)

<li><h3> Update Testing pada about.spec.tsx </h3></li>

![images](images/Kode6.1.png)

<li><h3> Dicoba untuk di run </h3></li>

![images](images/Hasil6.png)

<li><h3>Coba Jika dibuat Salah: Rubah menjadi toBe("About")</h3></li>

![images](images/Kode6.2.png)

<li><h3>Jalan kan dan Hasil: FAIL Expected: "About",Received: "About Page"</h3></li>

![images](images/Hasil6.1.png)

Praktikum 7 – Testing Page dengan Router (Mocking)
---
<h3>Kita coba untuk melakukan testing pada halaman produk </h3>
<li><h3>Buat file product.spec.tsx </h3></li>

![images](images/Kode7.png)

<li><h3>Tambahkan kode berikut</h3></li>

![images](images/Kode7.1.png)

<li><h3>Ketika testing halaman Product, sering muncul error: NextRouter was not mounted </h3></li>

![images](images/Hasil7.png)

<li><h3>Solusi: Mock Next Router
Tambahkan di file product.spec.tsx</h3></li>

![images](images/Kode7.2.png)


### Pertanyaan Individu

1. Mengapa <img> biasa tidak optimal?

Jawaban : Karena tidak ada optimasi otomatis (lazy loading, resize, format modern). Bisa bikin loading lambat dibanding komponen seperti next/image.

2. Apa perbedaan font CDN dan next/font?

Jawaban : CDN mengambil dari server luar sedangkan next/font berada di host lokal membuat lebih cepat & konsisten (tanpa request eksternal)

3. Mengapa script bisa membuat website lambat?

Jawaban : Karena script bisa memblokir rendering (blocking), menambah beban JavaScript, dan memperlambat waktu load halaman.

4. Kapan harus menggunakan dynamic import?

Jawaban : Saat komponen tidak perlu dimuat di awal (misalnya modal, chart, atau fitur berat) agar load awal lebih ringan.

5. Apa dampak bundle size terhadap UX?

Jawaban : Semakin besar bundle membuat loading semakin lebih lama dan membuat UX buruk (lambat, tidak responsif).