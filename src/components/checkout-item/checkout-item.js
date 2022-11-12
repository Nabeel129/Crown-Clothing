import { Arrow, CheckoutItemContainer, ImageContainer, Name, Quantity, RemoveButton, Price } from './checkout-item.styles.js'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext);

    const decrementHandler = () => removeItemFromCart(cartItem);
    const incrementHandler = () => addItemToCart(cartItem);
    const removeProductHandler = () => removeProductFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={decrementHandler}>&#10094;</Arrow>
                {quantity}
                <Arrow onClick={incrementHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>${price}</Price>
            <RemoveButton onClick={removeProductHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;