import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const ProductListing = () => {
  const getProductData = () => {
    const data = axios.get("https://dummyjson.com/products");
    return data;
  };
  const { data: productData } = useQuery("product-listing-data", () =>
    getProductData()
  );
  return (
    <div className="container">
      <h4>Browse:</h4>
      {productData?.data?.products.length &&
        productData?.data?.products.map((product) => (
          <>
            <div className="product-card">
              <img src={product.thumbnail} alt ="product-images"/>
              <div><i>{product.brand}</i></div>
              <h2>${product.price}</h2>
              <h5>{product.title}</h5>
            </div>
          </>
        ))}
    </div>
  );
};

export default ProductListing;
