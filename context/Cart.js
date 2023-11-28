import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: { cartItem : [] }
}

function reducer(state, action){
  switch(action.type) {
      case "ADD_ITEMS": {
          const newItem = action.payload

          const existingItem = state.cart.cartItem.find((i)=>i.slug === newItem.slug)

          const cartItem = existingItem ? 
              state.cart.cartItem.map((i)=> i.slug === existingItem.slug ? newItem : i) :
              [...state.cart.cartItem , newItem]

          return {...state , cart: {...state.cart, cartItem}}    
      }

      case 'REMOVE_ITEM': {
        const cartItem = state.cart.cartItem.filter(
          (item) => item.slug !== action.payload.slug
        )
      
        return { ...state, cart: { ...state.cart, cartItem } }
      }
      
      default : return state
  }
}


export function CartContextProvider({children}){
    const [state , dispatch] = useReducer(reducer , initialState);

    const value = {state , dispatch}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}