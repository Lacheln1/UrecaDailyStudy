import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";

const DetailPage = () => {
  const { productId } = useParams();
  console.log("productId", productId);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(productId);
        setProduct(res);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <main>
      <h2>{product.title}</h2>
    </main>
  );
};

export default DetailPage;
