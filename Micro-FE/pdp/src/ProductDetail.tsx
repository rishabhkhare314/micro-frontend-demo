import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductDetail = () => {
  const PRODUCT_ID = 10;
  const [productData, setProductData] = useState(null);
  const getProductDetail = async () => {
    const data = await axios.get(
      `https://dummyjson.com/products/${PRODUCT_ID}`
    );
    if (data) {
      return data;
    }
    return {};
  };

  useEffect(async () => {
    if (PRODUCT_ID) {
      const data = await getProductDetail();
      setProductData(data);
    } else {
      setProductData(null);
    }
  }, [PRODUCT_ID]);



  console.log(productData)
  console.log(productData)
  console.log(productData)
  console.log(productData)
  console.log(productData)
  console.log(productData)
  console.log(productData)
  return (
    <div className="container">
      {productData?.data ? (
        <>
          <p>{productData?.data.title}</p> 
          <img src = {productData.data.thumbnail} /> 
          <p>{productData.data.description}</p>{" "}
          <p>{productData.data.price}</p> 
          <p>Rating: {productData.data.rating}</p>{" "}
        </>
      ) : (
        <p>No Product details found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
