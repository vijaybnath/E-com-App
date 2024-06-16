import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";

const ProductList = () => {
  // const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/adminPanel/view/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar
        text={"Sign In"}
        buttonText={"Home"}
        path={"/"}
        path_second={"/login"}
      />
      <ProductRowContainer>
        {products.map((product) => {
          return (
            <ProductCard
              productImage={product.productImageURL}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              productDescription={product.productDescription}
            />
          );
        })}
      </ProductRowContainer>
    </div>
  );
};

const ProductRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  height: fit-content;
  padding: 20px;
  gap: 10px;
`;

export default ProductList;
