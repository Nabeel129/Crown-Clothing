import './checkout-item.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext);

    const decrementHandler = () => removeItemFromCart(cartItem);
    const incrementHandler = () => addItemToCart(cartItem);
    const removeProductHandler = () => removeProductFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={decrementHandler}>&#10094;</span>
                {quantity}
                <span className='arrow' onClick={incrementHandler}>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={removeProductHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;