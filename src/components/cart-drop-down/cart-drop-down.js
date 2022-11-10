import Button from "../button/button"
import "./cart-drop-down.styles.scss"
import CartItem from "../cart-item/cart-item"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart-context"



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container"  >
            <div className="cart-items">
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />
                })}
            </div>
            <Button >Go to checkout</Button>
        </div>
    )
}

export default CartDropdown