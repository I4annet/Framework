# Jobsheet 14 - Sistem Autentikasi & Proteksi Route 

###  Langkah Praktikum

Bagian 1 - Install NextAuth
---

<li><h3> npm install next-auth –force </h3></li>

![images](images/Kode1.png)


Bagian 2 - Konfigurasi API Auth
---

<li><h3> Buat file dan folder pada folder pages/api/auth/[...nextauth].ts </h3></li>

![images](images/Kode2.png)

<li><h3> Modifikasi file [...nextauth].ts </h3></li>

![images](images/Kode2.1.png)

Bagian 3 - Tambahkan Secret
---

<li><h3> Buka file .env.local dan tambahkan code pada line 12 </li> 

`NEXTAUTH_SECRET=RANDOM_BASE64_STRING`

![images](images/Kode3.png)

Bagian 4 – Batasi Route Tertentu
---

<li><h3> Untuk mengatasi pada bagian 3 maka perlu pembatasan route </i></li>

![image](images/Kode4.png)

<li><h3> Artinya: </h3></li>

• Middleware hanya berlaku untuk /products dan /about

• Halaman lain tetap normal

• Ketika user mengakses halaman produk dan about maka akan langsung redirect
ke halaman home

Bagian 5 – Simulasi Sistem Login
---

<li><h3> Modifikasi file middleware.ts </li>

![image](images/Kode5.png)

<li><h3> Jika user langsung mengakses ke alamat http://localhost:3000/produk tidak akan bisa
user akan diarahkan ke halaman login </li>

![image](images/Hasil5.png)

### Pengujian

<li><h3> Uji 1 – isLogin = false </h3></li>

<h4> Akses: /products </h4>

![image](images/Kode5.png)

<h4> Hasil:
Redirect ke /login </h4>

![image](images/Hasil5.png)

<li><h3> Uji 2 – isLogin = true </h3></li>

<h4> Ubah:
const isLogin = true </h4>

![image](images/KodeUji2.png)

<h4> Hasil:
Bisa mengakses /products</h4>

![image](images/HasilUji2.png)

<li><h3>Uji 3 – Tambahkan Multiple Route </h3></li>

![image](images/KodeUji3.png)

### Tugas Praktikum 

1. Buat halaman:

o /products

```text
src/pages/produk
```

o /about
```text
src/pages/produk
```

o /login
```text
src/pages/produk
```

2. Implementasikan Middleware:

```typescript

export function middleware(request: NextRequest) {
    // const isLogin = false;
        const isLogin = true;  // Ganti dengan true

    if (isLogin) {
        return NextResponse.next();
    }else {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}
    // return NextResponse.redirect(new URL("/", request.url));
    // return NextResponse.next();
```

3. Tambahkan proteksi hanya untuk route tertentu.

```typescript
export const config = { 
    matcher: ["/produk", "/about"],
};
```

4. Dokumentasikan:

o Screenshot sebelum dan sesudah redirect.

<li><h3> Sebelum login (isLogin = false) </h3></li>

![image](images/gif1.gif)

User dapat masuk ke dalam / belum login dan user tidak bisa mengakses `/produk` dan`/about`
lalu akan di-redirect atau di pindahkan ke halaman login 

<li><h3> Sesudah login (isLogin = true)</h3></li>

![image](images/gif2.gif)

User sudah login dan dapat mengakses halaman `/produk` dan `/about`

o Perbandingan dengan useEffect.

<h3>Perbandingan Middleware vs useEffect</h3>

<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>Aspek</th>
      <th>Middleware</th>
      <th>useEffect (Client-side)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Waktu eksekusi</td>
      <td>Sebelum halaman dirender (server-side)</td>
      <td>Setelah halaman dirender (client-side)</td>
    </tr>
    <tr>
      <td>Keamanan</td>
      <td>Lebih aman (tidak bisa dimanipulasi user)</td>
      <td>Kurang aman (bisa dimanipulasi di browser)</td>
    </tr>
    <tr>
      <td>Tampilan (UX)</td>
      <td>Tidak ada glitch / flicker</td>
      <td>Bisa terjadi glitch (flash sebelum redirect)</td>
    </tr>
    <tr>
      <td>Redirect</td>
      <td>Langsung sebelum halaman tampil</td>
      <td>Terjadi setelah halaman sempat tampil</td>
    </tr>
    <tr>
      <td>Performa</td>
      <td>Lebih optimal untuk proteksi route</td>
      <td>Kurang optimal karena render dulu</td>
    </tr>
    <tr>
      <td>Akses langsung URL</td>
      <td>Langsung dicegah</td>
      <td>Masih sempat mengakses sebelum redirect</td>
    </tr>
    <tr>
      <td>Kompleksitas</td>
      <td>Sedikit lebih kompleks (konfigurasi)</td>
      <td>Lebih mudah (cukup di komponen React)</td>
    </tr>
    <tr>
      <td>Kapan digunakan</td>
      <td>Proteksi halaman (auth, role, dll)</td>
      <td>Efek UI sederhana / validasi ringan</td>
    </tr>
  </tbody>
</table>

### Pertanyaan Analisis

1. Mengapa middleware lebih aman dibanding useEffect?

Jawaban : Karena middleware berjalan di server sebelum halaman dikirim ke user, sehingga proses validasi (misalnya autentikasi) terjadi lebih awal dan tidak bisa diubah dari sisi client.

2. Mengapa middleware tidak menimbulkan glitch?

Jawaban : Karena middleware bekerja sebelum rendering halaman, user hanya akan melihat hasil akhirnya saja (seperti langsung redirect ke login)

3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?

Jawaban : Bisa menyebabkan halaman publik seperti login, register, landing page ikut terblokir, sehingga user tidak bisa mengakses apapun

4. Kapan middleware tidak diperlukan?

Jawaban : Jika halaman tidak butuh proteksi atau validasi khusus, seperti halaman statis (SSG), landing page, atau konten publik.

5. Apa perbedaan middleware dan API route?

Jawaban : Middleware berfungsi sebagai penjaga awal yang berjalan sebelum request diproses, sedangkan API route adalah endpoint backend yang digunakan untuk menjalankan logika tertentu (CRUD, ambil data, dll) dan mengembalikan response ke client