import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";
import { ProductsContext } from "../../contexts/products-context";
import './shop.styles.scss'
const Shop = () => {

    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {products.map((products) => {
                return (
                    <ProductCard key={products.id} product={products} />
                )
            })}
        </div>
    )
}

export default Shop;
