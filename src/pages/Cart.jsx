import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useProduct} from '../context/ProductContext'
import styled from 'styled-components'
import { FaRemoveFormat } from "react-icons/fa";

const CartContainer=styled.div`
margin-top:80px;
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
padding:10px 0;
`;
const ItemPrice=styled.h3`
width:30%;
text-align:center;
padding:10px 5px;
`;
const QuantityButton=styled.button`
width:70px;
height:30px;
cursor:pointer;
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

flex:2;
display:flex;
flex-direction:column;
align-items:center;
`;
const CartTotalList=styled.div`

width:90%;
display:flex;
flex-direction:column;
justify-content:space-around;
box-shadow:2px 2px 5px;
padding:10px;
margin-top:20px;
`;

const CheckButton=styled.button`
width:150px;
height:30px;
background:green;
cursor:pointer;
border:none;
color:#ffff;
`;

const Cart = () =>{
  const[total,setTotal] = useState(0);
  const {state,dispatch} = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [state.cart]);

console.log(total);
  
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
               <QuantityButton onClick={()=>dispatch({type:"Add_Quantity",payload:data.id})}>+</QuantityButton>
               {data.quantity}
               <QuantityButton onClick={()=>data.quantity > 1 && dispatch({type:"Sub_Quantity",payload:data.id})}>-</QuantityButton>
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
              <ItemPrice>$ {item.price*item.quantity}</ItemPrice>
              </div>
              
              ))
          }
          </CartTotalList>
          <div style={{ marginTop:10 }}>
        <span>Subtotal ({state.cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20,marginLeft:10 }}>Total: ₹ {total}</span>
        <br></br>
        <br></br>
        <CheckButton disabled={state.cart.length === 0}>
          Proceed to Checkout
        </CheckButton>
      </div>
          </CartTotal>
        </>)
}
      </CartItem>
    </CartContainer>
  )
}

export default Cart;