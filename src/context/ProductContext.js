import React,{createContext,useContext,useState,useEffect,useReducer} from 'react'
import {productReducer} from './productReducer'
const proContext = createContext(null);

const ProductContext = ({children}) =>{
  const[products,setProducts] = useState({
    data:[] ,cart:[], status:false
  })
  
  const[state,dispatch] = useReducer(productReducer,products);
  return(
  <proContext.Provider value={{state,setProducts,dispatch}}>{children}</proContext.Provider>
  )
}

export const useProduct = () =>{
  return useContext(proContext);
}

export default ProductContext;
