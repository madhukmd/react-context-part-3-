import React from 'react'

const CartAddItems = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})
export default CartAddItems
