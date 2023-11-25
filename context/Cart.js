import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: { cartItem : [] }
}

function reducer(state, action){
  switch(action.type) {
    case "ADD_ITEMS": {
        const newItem = action.payload

        const exisitingItem = state.cart.cartItem.find((i)=>i.slug === newItem.slug)

        const cartItems = exisitingItem ? state.cart.cartItem.map((i)=> i.title === exisitingItem.title ? newItem : i) :
        [ ...state , cart.cartItem , newItem]

        return {...state , cart: {...state.cart, cartItems}}

        
    }
    default : return state
  }
}



export function CartContextProvider({children}){
    const [state , dispatch] = useReducer(reducer , initialState);

    const value = {state , dispatch}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}