import { ProductCardContainer, Footer } from './product-card.styles.js'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import { CartContext } from "../../contexts/cart-context"
import { useContext } from "react"

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);
    const addItemtoCartHandler = () => {
        addItemToCart(product);
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemtoCartHandler}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;