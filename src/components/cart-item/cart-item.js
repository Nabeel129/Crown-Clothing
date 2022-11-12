import { CartItemContainer, ItemDetails, Name, Price } from "./cart-item.styles.js"

const CartItem = (props) => {
    const { name, quantity, imageUrl, price } = props.cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name} </Name>
                <Price>{quantity} x ${price}</Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;