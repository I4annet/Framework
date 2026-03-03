const MainSection = () => {
  const produkList = [
    { id: 1, nama: "Laptop Asus", deskripsi: "Laptop untuk kebutuhan kuliah", harga: 7500000,},
    { id: 2, nama: "Mouse Logitech", deskripsi: "Mouse wireless", harga: 150000, },
    { id: 3, nama: "Keyboard Mechanical", deskripsi: "Keyboard untuk gaming", harga: 450000,},
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Produk</h2>

      <div className="grid grid-cols-3 gap-4">
        {produkList.map((produk) => (
          <div
            key={produk.id}
            className="border p-4 rounded shadow"
          >
            <h3 className="font-semibold">{produk.nama}</h3>
            <p className="text-sm text-gray-600">
              {produk.deskripsi}
            </p>
            <p className="mt-2 font-bold text-blue-600">
              Rp {produk.harga.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;