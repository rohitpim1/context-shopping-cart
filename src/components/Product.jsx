import React from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {useProduct} from '../context/ProductContext'
const Product = () =>{
  const {id} = useParams();
  const {state,setProducts,dispatch} = useProduct();
  
console.log(state.data[0]?.find((data)=>data.id == id));
  return(
    <>
    Product - {id};
    </>
  )
}

export default Product;