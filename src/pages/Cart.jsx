import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useProduct} from '../context/ProductContext'
import styled from 'styled-components'
import { FaRemoveFormat } from "react-icons/fa";

const CartContainer=styled.div`
width:100%;
height:100vh;
`;
const CartItem=styled.div`
margin-top:50px;
display:flex;
justify-content:space-around;

`;
const ItemLists=styled.div`
flex:3;
height:auto;
`;
const Item=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;
const ItemImg=styled.img`
width:200px;
height:150px;
`;
const ItemTitle=styled.h3`
`;
const ItemPrice=styled.h3`
margin-left:10px;
`;
const QuantityButton=styled.button`

`;
const DeleteButton=styled.span`
`;
const ShoppingButton=styled.button`
width:150px;
height:30px;
background:red;
cursor:pointer;
border:none;
color:#ffff;
`;
const CartTotal=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
`;
const CartTotalList=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
border:1px solid black;

`;
const Cart = () =>{

  const {state,dispatch} = useProduct();
  const navigate = useNavigate();


  const handleQuantity = (e) =>{
    if(e === "p"){
      dispatch({type:"Add_Quantity",payload:1});
    } else if(e === "m" && state.quantity >1){
      dispatch({type:"Sub_Quantity",payload:1});
    }
  }
  return(
    <CartContainer>
      <CartItem>
        {
          state.cart.length<1 ? (
          <>
          <h3>Sorry Empty cart</h3> 
          <ShoppingButton onClick={()=>navigate("/")}>continue shopping</ShoppingButton> 
          </>
          )
          :
          (
          <>
        <ItemLists>
          {
            state.cart?.map((data)=>(
              <Item key={data.id}>
               <ItemImg src={data.thumbnail}/>
               <ItemTitle>{data.title}</ItemTitle>
               <QuantityButton onClick={()=>handleQuantity("p")}>+</QuantityButton>{state.quantity}<QuantityButton onClick={()=>handleQuantity("m")}>-</QuantityButton>
               <DeleteButton onClick={()=>dispatch({type:"Remove_From_Cart",payload:data.id})}><FaRemoveFormat/></DeleteButton>
              </Item>
            ))
          }
        </ItemLists>
        <CartTotal>
          <ShoppingButton onClick={()=>navigate("/")}>continue shopping</ShoppingButton>
          <CartTotalList>
          {
            state.cart?.map((item)=>(
              <div style={{display:"flex",justifyContent:"space-around",alignItems:"Center"}}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>${item.price*state.quantity}</ItemPrice>
              </div>
              ))
          }
          </CartTotalList>
        </CartTotal>
        </>)
}
      </CartItem>
    </CartContainer>
  )
}

export default Cart;