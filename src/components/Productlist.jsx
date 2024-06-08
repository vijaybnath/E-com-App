import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductList = () => {
    // const [search, setSearch] = useState("");
        const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <Navbar text={"Sign In"} buttonText={"Home"} path={"/"} path_second={"/login"} />
      {/* <input type="search" name="src" placeholder='search products here' value={search} onChange={(e)=>{setSearch(e.target.value)}}/> */}
    <ProductRowContainer>
    {products.map((product)=>{
              return(
                <ProductCard productImage={product.image} productTitle={product.title} productPrice={product.price} productDescription={product.description} />
              )
            })}
    </ProductRowContainer>
    </div>
  )
}

const ProductRowContainer = styled.div `
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  height: fit-content;
  padding:20px;
  gap: 10px;
`;

export default ProductList



