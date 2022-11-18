export const productReducer = (state,action)=>{
switch(action.type){
  
  case "fetch_Success": return {...state,data:[action.payload],status:true}

  case "Add_To_Cart" : return {...state,cart:[...state.cart,action.payload],status:true}

  case "Remove_From_Cart" : return {...state,cart:[...state.cart.filter((item)=>item.id !== action.payload)],status:true}
  
  case "Add_Quantity" : 
      console.log(action.payload);
  return {...state,cart:[...state.cart.filter((item)=>(item.id === action.payload) ? item.quantity=item.quantity+1 : item.quantity )],status:true}

  case "Sub_Quantity" : return {...state,cart:[...state.cart.filter((item)=>(item.id === action.payload) ? item.quantity=item.quantity-1 : item.quantity )],status:true}

  default: return state;
}
}

