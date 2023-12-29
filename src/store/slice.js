import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: "cart",
    initialState: {list: [], total: 0},
    reducers: {
        addToCart(state, action) {
            const check = state.list.findIndex(produkt => produkt.id === action.payload.id)
            if (check!==-1) {
            var quantity = parseInt(state.list[check].ilosc);
            quantity += parseInt(action.payload.ilosc);
                state.list[check].ilosc =quantity;
            }else{
            state.list.push(action.payload)
            }
        },
        removeFromCart(state, action) {
            const check = state.list.findIndex(produkt => produkt.id === action.payload.id)
            if (check !==-1){

                state.list.splice(check, 1)
                console.log("remove from cart has been called")
            }
        }
    }
})
// const {actions, reducer} = cartSlice

export const {addToCart, removeFromCart} = slice.actions


// export const cartActions = cartSlice.actions;

export default slice.reducer;