import { LIMIT } from "@/constants";
import { request } from "@/server/request";
import { ProducType } from "@/types";
import { AxiosResponse } from "axios";
import Image from "next/image";

async function getData() {
  try {
    const res: AxiosResponse<{ products: ProducType[] }> = await request.get(`product?limit=${LIMIT}`);
    return res.data.products;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const Products = async () => {
  let products = await getData();
  return (
    <div className="container">
       <input type="text" />
      <div className="products">
         {products?.map((pr, i) => (
           <div key={i} className="product">
             <div className="image">
               <Image
                 src={pr?.image?.url}
                 alt={pr.title}
                 height={200}
                 width={200}
                 style={{
                   borderRadius: "4px",
                   width: "100%", marginLeft: "-10px",
                 }}
               />
             </div>
             <div
               className="contents"
               style={{ display: "flex", flexDirection: "column" }}
             >
               <h1>{pr?.title}</h1>
               <h3>
                 <b>Sold: </b>
                 {pr?.sold}
               </h3>
               <h4>{pr?.description}</h4>
               <p>
                 <b>price:</b> {pr?.price} uzs
               </p>
             </div>
           </div>
         ))}
       </div>
     </div>
  );
};

export default Products;

