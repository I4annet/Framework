# Jobsheet 4 

###  Langkah Praktikum

Langkah 1 - Global CSS
---
![images](/images/kode1.png)

![images](/images/kode2.png)

Langkah 2 - CSS Module (Local Scope)
---

![images](images/gambar1.png)

<li>/shop/clothes </li>

![images](images/kode3.png)

<li>/shop/clothes/tops </li>

![images](images/kode4.png)

<li> /shop/clothes/tops/t-shirt

![images](images/kode5.png)

![images](images/gambar2.png)

Langkah 3 - Styling untuk Pages (CSS Module)
---

![images](images/kode6.png)

![images](images/kode7.png)

![images](images/gambar3.png)

Langkah 4 - Conditional Rendering Navbar (Tanpa Navbar di Login)
---

![images](images/kode8.png)

![image](images/gambar4.png)


Langkah 5 - Refactoring Struktur Project (Best Practice)
---

![image](/images/kode1.png)

Langkah 6 - Inline Styling (CSS-in-JS)
---

![image](/images/gambar9.png)


Langkah 7 - Kombinasi Global CSS + CSS Module 
---


Langkahb 8 - SCSS (SASS)
---

Langkah 9 - Tailwind CSS
---

### Tugas Praktikum

Tugas 1 (Wajib)
---

1. Buat catch-all route: 
2. /category/[...slug].js 
3.  Tampilkan seluruh parameter URL dalam bentuk list.

![image](/images/gambar10.png)

Tugas 2 (Wajib)
---

1. Buat navigasi: 

o Login → Product (imperatif) 

o Login ↔ Register (Link)

![image](/images/gambbar11.gif)

Tugas 3 (Pengayaan)
---
1. Terapkan redirect otomatis ke login jika user belum login.

![image](/images/gambar13.png)

<h3> Hasil : </h3>

![image](/images/gambar12.gif)


### Pertanyaan Refleksi 

1. Apa perbedaan [id].js dan [...slug].js?

Jawaban : [id].js digunakan untuk menangkap satu parameter saja, sedangkan [...slug].js digunakan untuk menangkan banyak URL

2. Mengapa slug berbentuk array?

Jawaban : Karena [...slug] bisa menerima lebih dari satu bagian URL, jadi disimpan dalam bentuk array

3. Kapan sebaiknya menggunakan Link dan router.push()? 

Jawaban : Link digunakan untuk perpindahan navigasi biasa seperti (klik menu/tombol), sedangkan router.push() digunakan untuk navigasi aksin tertentu contohnya (Login)

4. Mengapa navigasi Next.js tidak me-refresh halaman?

Jawaban : Karena Next.js menggunakan client-side navigation, jadi hanya konten yang berubah tanpa reload seluruh halaman