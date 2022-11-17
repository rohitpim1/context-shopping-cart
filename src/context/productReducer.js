export const productReducer = (state,action)=>{
switch(action.type){
  
  case "fetch_Success": return {...state,data:[action.payload],status:true}

  case "Add_To_Cart" : return {...state,cart:[...state.cart,action.payload],status:true}

  case "Remove_From_Cart" : return {...state,cart:[...state.cart.filter((item)=>item.id !== action.payload)],status:true}
  
  case "Add_Quantity" : return {...state,quantity:state.quantity + action.payload}

  case "Sub_Quantity" : return {...state,quantity:state.quantity - action.payload}

  default: return state;
}
}

