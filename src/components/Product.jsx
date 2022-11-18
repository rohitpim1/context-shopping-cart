import React,{useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {useProduct} from '../context/ProductContext'

const ProductContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;

const ProductItem = styled.div`
margin-top:20px;
max-width:90%;
height:500px;
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
box-shadow:2px 2px 5px;
`;

const ProductInfo = styled.div`
padding:0 20px;
flex:3;
`;
const ProductImage = styled.img`
margin-left:10px;
flex:1;
height:250px;
`;

const ProductTitle = styled.h3`

font-size:1.5rem;
font-weight:800;
padding:20px 0;
`;

const ProductDescription = styled.p`

font-size:1rem;
color:grey;
`;

const ProductPrice = styled.div`
font-size:1.3rem;
padding:20px 0;
`;
const ProductColor = styled.span`

width:200px;
height:200px;
border-radius:50%;
background:${props=>props.colora};
padding-right:20px;
cursor:pointer;
&:hover{
height:210px;
}
`;
const ProductSize = styled.select`
margin-left:100px;
cursor:pointer;
width:100px;
`;
const ProductSizeOption = styled.option`
`;
const ProductButton = styled.button`
width:150px;
height:30px;
background:blue;
cursor:pointer;
border:none;
color:#ffff;
margin-right:20px;
`;
const ProductBackButton = styled.button`
width:150px;
height:30px;
background:#ffff;
cursor:pointer;
border:none;
color:grey;
&:hover{
  background:grey;
  color:black;
}
`;
const Product = () =>{
  const[size,setSize] = useState("");
  const[color,setColor] = useState("");
  const[dis,setDis] = useState(false);

  const {id} = useParams();
  const Navigate = useNavigate();

  const {state,setProducts,dispatch} = useProduct();
   const data = state.data[0]?.find((data)=>data.id == id);

   const addToCart = () =>{
dispatch({type:"Add_To_Cart",payload:{...data,quantity:1}})
setDis(true);
   }
 
  return(
    <ProductContainer>
   <ProductItem>
    <ProductImage src={data.thumbnail} alt=""/>
    <ProductInfo>
      <ProductTitle>{data.title}</ProductTitle>
      <ProductDescription>{data.description}</ProductDescription>
      <ProductPrice>${data.price}</ProductPrice>
      <ProductColor colora="black" onClick={()=>setColor("black")}></ProductColor>
      &nbsp;&nbsp;&nbsp;
      <ProductColor colora="grey" onClick={()=>setColor("grey")}></ProductColor>
      &nbsp;&nbsp;&nbsp;
      <ProductColor colora="blue" onClick={()=>setColor("blue")}></ProductColor>
      <ProductSize onClick={(e)=>setSize(e.target.value)} >
        <ProductSizeOption value="s" selected>S</ProductSizeOption>
        <ProductSizeOption value="m">M</ProductSizeOption>
        <ProductSizeOption value="L">L</ProductSizeOption>
        <ProductSizeOption value="XL">XL</ProductSizeOption>
      </ProductSize>
      <br></br>
      <br></br>
      <br></br>

      <ProductButton onClick={addToCart} disabled={dis}>Add To Cart</ProductButton>
      <ProductBackButton onClick={()=>Navigate("/")}>continue shopping</ProductBackButton>
    </ProductInfo>
   </ProductItem>
    </ProductContainer>
  )
}

export default Product;