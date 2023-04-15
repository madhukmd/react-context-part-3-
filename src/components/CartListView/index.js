import CartItem from '../CartItem'

import CartAddItems from '../../context/CartAddItems'

import './index.css'

const CartListView = () => (
  <CartAddItems.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartAddItems.Consumer>
)

export default CartListView
