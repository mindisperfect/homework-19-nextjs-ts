"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://vodiy-parfum-backend.vercel.app/api/v1/last-products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginBottom: "20px",
          marginTop: "20px",
          color: "white",
        }}
      >
        New products
      </h1>
      <div className="rows">
        <Slider {...settings}>
          {data?.map((pr, i) => (
            <Fragment key={i}>
              <div className="row">
                <Image
                  src={pr?.image.url}
                  alt={pr?.title}
                  width={200}
                  height={150}
                  style={{ width: "100%", height: "280px" }}
                />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",  
                    }}
                  >
                    <h1>{pr?.title}</h1>
                    <h3>
                      <b>Price: </b>
                      {pr?.price} uzs
                    </h3>
                  </div>
                  <p>{pr?.description}</p>
                  <h4>
                    <b>Sold:</b> {pr?.sold}
                  </h4>
                </div>
            </Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
