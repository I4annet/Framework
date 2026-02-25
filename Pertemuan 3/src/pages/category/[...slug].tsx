import { useRouter } from "next/router";

const Category = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>Category : {Array.isArray(query.slug) ? query.slug.join(" - ") : query.slug}</p>
    </div>
  );
};

export default Category;