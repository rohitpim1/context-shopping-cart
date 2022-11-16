import React,{useEffect} from 'react'
import {useProduct} from '../context/ProductContext'
const Products = () =>{
  const {state,setProducts,dispatch} = useProduct();
  
  return(
    <>
    Products
    </>
  )
}

export default Products;