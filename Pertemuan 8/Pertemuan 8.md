# Jobsheet 9 - Server Side Rendering (SSR)

###  Langkah Praktikum

Bagian 1 - Setup Halaman SSR
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

![image](images/Praktikum4.png)

<li><h3> Buka dan modifkasi file index.tsx pada folder pages/product/ </li>

![image](images/Praktikum4.1.png)

<li><h3> Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js </li>

![image](images/Praktikum4.3.png)

<li><h3> Modifikasi file fetcher.ts </li>

![image](images/Praktikum4.2.png)


### Tugas Praktikum

1. Jelaskan perbedaan: Client Side Rendering, Server Side Rendering dan Static Site Generation

Jawaban : CSR dilakukan di browser (client). Server hanya mengirim file dasar, lalu JavaScript yang membangun tampilan halaman. Lalu SSR dilakukan di server setiap ada permintaan. Server mengirim HTML yang sudah lengkap ke browser.Sedangkan SSG Halaman dibuat saat proses build dan disimpan sebagai file statis.

2. Buat halaman produk dengan: Skeleton loading dan Animasi

3. Refactor kode dari useEffect menjadi SWR.

```typescript
"use client";

import { useEffect, useState } from "react";
import TampilanProduct from "../views/product/index";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

const Product = () => {
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <>
      <TampilanProduct products={isLoading ? [] : data.data} />
    </>
  );
};

export default Product;
```