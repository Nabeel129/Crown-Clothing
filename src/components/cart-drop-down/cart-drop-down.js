import Button from "../button/button"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-drop-down.styles.js"
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
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item} />
                })) : <EmptyMessage>You Cart is Empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={checkoutHandler} >Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;