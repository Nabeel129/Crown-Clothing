import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from "../../contexts/cart-context"
import { useContext } from "react"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingCart className='shopping-icon' />
            <span className="item-count">{`${countItems}`}</span>
        </div>
    )
}

export default CartIcon;
