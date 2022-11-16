export const productReducer = (state,action)=>{
switch(action.type){
  
  case "fetch_Success": return {...state,data:[...state.data,...action.payload],status:true}
  default: return state;
}
}

