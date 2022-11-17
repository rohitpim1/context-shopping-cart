export const productReducer = (state,action)=>{
switch(action.type){
  
  case "fetch_Success": return {...state,data:[action.payload],status:true}

  case "Add_To_Cart" : return {...state,cart:[...state.cart,action.payload],status:true}

  default: return state;
}
}

