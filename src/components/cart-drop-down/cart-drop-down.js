import Button from "../button/button"
import "./cart-drop-down.styles.scss"
import CartItem from "../cart-item/cart-item"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart-context"
import { useNavigate } from "react-router-dom"



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className="cart-dropdown-container"  >
            <div className="cart-items">
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />
                })}
            </div>
            <Button onClick={checkoutHandler} >Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;