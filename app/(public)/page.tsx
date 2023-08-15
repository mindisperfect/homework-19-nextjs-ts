import { AxiosResponse } from "axios";
import { request } from "@/server/request";
import Card from "@/components/news/Card";
import ProductCard from "@/components/news/ProductCard";
import { CategoryTypes } from "../../types";

async function getData() {
  try {
    let res: AxiosResponse<CategoryTypes[]> = await request("category");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const categories = await getData();
  return (
    <div className="home-page">
      <main className="container">
        <Card />
        <hr style={{ backgroundColor: "purple" }} className="hr" />
        <h1
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          All products
        </h1>
        <div className="cards">
          {/* {categories?.map(({ _id, name, image }) => (
          <div key={_id} className="card">
            <Image
              src={image?.url}
              alt={name}
              width={150}
              height={100}
              className="img-src"
              style={{borderRadius: "8px"}}
            />
            <Link href={`category/${_id}`} className="link">{name}</Link>
          </div>
        ))} */}
            {categories?.map(({ name, _id, image }: {name: string; _id: string, image : {url: string}}) => (
        <ProductCard key={_id} name={name} _id={_id} image={image} />
      ))}
        </div>
        <hr className="hr" />
      </main>
    </div>
  );
}
