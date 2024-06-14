import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import styled from 'styled-components';

function ProductDetails (props) {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate("/cart")
    }

  return (
    <div>
        <Navbar text={"Sign In"} buttonText={"Home"} path={"/"} path_second={"/login"} />

        <ProductContainer>
            <ProductDetailsContainer>
                <ProductImage src={data.productImage} alt="picture" />
                <ProductTextContainer>
                    <h2>{data.productTitle}</h2>
                    <h3>{data.productDescription}</h3>
                    <h1>${data.productPrice}</h1>
                    <ProductButtons>
                        <CartButton onClick={navigatePage}>Add To Cart</CartButton>
                        <BuyButton>Buy Now</BuyButton>
                    </ProductButtons>
                </ProductTextContainer>
            </ProductDetailsContainer>
        </ProductContainer>
    </div>
  )
}

const ProductContainer = styled.div `
    padding: 20px;
`;

const ProductDetailsContainer = styled.div `
    display: flex;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding: 20px;
`;

const ProductImage = styled.img `
    width: 400px;
    border-radius: 20px;
`;

const ProductTextContainer = styled.div `
    display: flex;
    flex-direction: column;

    h1  {
        font-size: 22px;
        font-weight: 500;
    }   
    h2 {
            font-weight: 500;
            font-size: 20px;
    }
    h3 {
        font-weight: 400;
        font-size: 18px;
    }
`;

const ProductButtons = styled.div `
    display: flex;
    gap: 10px;
    justify-content: center;
`;

const CartButton = styled.button `
    width: 150px;
    height: 40px;
    outline: none;
    border: none ;
    background-color: black;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;

`;

const BuyButton = styled.button `
    height: 40px;
    width: 150px;
    outline: none;
    border: 1px solid black;
    background-color: white;
    color: black;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
`;

export default ProductDetails