import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import CartItem from './CartItem'
import axios from 'axios'

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/view").then((res) => {
      setCartProducts(res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <div>
        <Navbar path="/" buttonText="Home" />
        <CartContainer>
          {cartProducts.map((product) => (
            <CartItem imageUrl={product.productImageURL} title={product.productTitle} productPrice={product.productPrice} />
          ))}
          <h2>Cart Total: $100</h2>

        </CartContainer>
    </div>
  )
}

const CartContainer = styled.div `
  padding: 20px;
  h2 {
    font-size: 25px;
    font-weight: 500;
  }
`

export default ShoppingCart