import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CategoryTypes } from "../../types";

const ProductCard = (props: CategoryTypes) => {
  const { _id, name, image } = props
  return (
    <div className="card">
      <Image
        src={image?.url}
        alt={name}
        width={150}
        height={100}
        className="img-src"
        style={{ borderRadius: "8px" }}
      />
      <Link href={`category/${_id}`} className="link">
        {name}
      </Link>
    </div>
  );
};

export default ProductCard;
