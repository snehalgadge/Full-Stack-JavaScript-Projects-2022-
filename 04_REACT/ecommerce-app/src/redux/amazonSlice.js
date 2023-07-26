import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    userInfo:[],
};

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item =  state.products.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload)
            }
        },
        incrementQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload)
            item.quantity++
        },
        decrementQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload)
            if(item.quantity <= 1) {
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
        deleteItem:(state,action) =>{
            state.products = state.products.filter((item) =>item.id!== action.payload)
        },
        resetCart:(state) =>{
            state.products = []
        },
    }
})

export const{ addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } 
= amazonSlice.actions;
export default amazonSlice.reducer;