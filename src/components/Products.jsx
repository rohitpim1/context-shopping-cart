import React,{useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useProduct} from '../context/ProductContext'
import {Link} from 'react-router-dom'

const ProductContainer = styled.div`
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
gap:30px;
flex-wrap:wrap;

`;
const ProductList = styled.div`
position:relative;
width:250px;
height:400px;
box-shadow:1px 2px 5px ;
`;

const ProductImage = styled.img`
width:250px;
height:200px;
`;
const ProductTitle = styled.h3`
text-align:center;
padding:5px 0;
`;
const ProductBrand = styled.span`
padding:5px;
font-size:0.8rem;
color:grey;
`;
const ProductCategory = styled.span`
position:absolute;
top:0;
right:0;
width:auto;
display:inline-block;
padding:2px;
background:blue;
color:#ffff;
transform:rotate(25deg);
`;
const ProductDescription = styled.p`
text-align:center;

`;
const ProductPrice = styled.p`
text-align:center;
padding-bottom:5px;
padding-top:5px;
font-size:1.5rem;
`;
const ProductButton = styled.button`
position:absolute;
bottom:10px;
left:0;
right:0;
height:30px;
width:100%;
background:blue;
border:none;
cursor:pointer;
color:#fff;
opacity:1;
transition:opacity 1s ease;
&:hover{
opacity:0.8;
}
`;
const Products = () =>{
  const {state,setProducts,dispatch} = useProduct();
  

  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const data = await axios.get("https://dummyjson.com/products")
      if(data) dispatch({type:"fetch_Success",payload:data.data.products})
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[]);
  console.log(state.data);
  
  return(
    <ProductContainer>
    {
      state.data[0]?.map((item)=>(
    <Link to={`/products/product/${item.id}`} style={{textDecoration:"none"}}>
    <ProductList key={item.id}>
         <ProductImage src={item.thumbnail} alt="product image"/>
         <ProductBrand>{item.brand}</ProductBrand>
         <ProductCategory>{item.category}</ProductCategory>
         <ProductTitle>{item.title}</ProductTitle>
         <ProductDescription>{item.description}</ProductDescription>
         <ProductPrice>${item.price}</ProductPrice>
         <ProductButton>Buy Now</ProductButton>
        </ProductList>
    </Link> 
      ))
    }
    </ProductContainer>
  )
}

export default Products;