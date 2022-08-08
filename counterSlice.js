import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    cartItem:[],
    favorite:[]
  },
  
  reducers: {

    addToCart:(state,action) => {
      console.log("state",state,action);
      // state.value =+ action.payload
      
    },
    
  },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
