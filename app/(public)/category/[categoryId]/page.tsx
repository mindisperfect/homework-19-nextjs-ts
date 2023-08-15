import { request } from "@/server/request";
import { AxiosResponse } from "axios";
import React from "react"; // Don't forget to import React
import Image from "next/image";
import lupa from "@/components/images/lupa.png";

interface ProducType {
  image: { url: string };
  title: string;
  sold: string;
  description: string;
  price: number;
}

async function getCategory(id: string) {
  try {
    const res: AxiosResponse<{ products: ProducType[] }> = await request.get(`product?category=${id}&search=`);
    return res.data.products; // Return the products array
  } catch (err) {
    console.log(err);
    return []; // Return an empty array or handle the error appropriately
  }
}

export default async function CategoryPage({ params }: { params: { categoryId: string } }) {
  const products = await getCategory(params.categoryId);

  return (
    <main className="container">
      <div className="input">
        <input type="text" placeholder="Searching" className="input-search" />
        <Image src={lupa} alt="img" height={50} width={50} className="input-img" />
      </div>
      <div className="products">
        {products?.map((product: ProducType, i: number) => (
          <div className="product" key={i}>
            {/* Render product details here */}
            <Image src={product.image.url} alt={product.title} height={200} width={200} style={{ borderRadius: "4px", width: "100%", marginLeft: "-10px" }} />
            <div className="contents" style={{ display: "flex", flexDirection: "column" }}>
              <h1>{product.title}</h1>
              <h3><b>Sold: </b>{product.sold}</h3>
              <h4>{product.description}</h4>
              <p><b>Price:</b> {product.price} uzs</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </main>
  );
}
