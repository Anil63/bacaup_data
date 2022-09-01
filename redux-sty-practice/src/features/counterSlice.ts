import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { fetchCount } from "./counterAPI";


interface CounterState {
    value :number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:CounterState ={
    value:0 ,
    status:'idle'
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async(amount:number)=>{
        const response = await fetchCount(amount);

        return response.data;
    }
)

export const counterSlice = createSlice({
    name:'counter',

    initialState,
    reducers:{
        increament :(state )=>{
            state.value += 1
        },
        decrement:(state) =>{
            state.value  -= 1
        },
        incrementByAmount:(state,action:PayloadAction<number>) =>{
            state.value += action.payload
        },
    },

    extraReducers:(bailder) =>{
        bailder
        .addCase(incrementAsync.pending, (state)=>{
            state.status= 'loading';
        })
        .addCase(incrementAsync.fulfilled,(state ,action) => {
            state.status = 'idle';
            state.value += action.payload;

        })
       .addCase(incrementAsync.rejected, (state)=>{
        state.status = 'failed'
       });
    },
});

 
export const {increament, decrement ,incrementByAmount } = counterSlice.actions;

export const selectCount = (state:RootState) => state.counter.value

export default counterSlice.reducer