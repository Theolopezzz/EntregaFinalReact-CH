import { useContext } from "react";
import { CartContext} from "./CartContext.jsx";
import { ItemCount} from "./ItemCount.jsx";

export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        addToCart(product, quantity);
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Precio: ${product.price}</p>
            <ItemCount stock={5} onAdd={handleAdd}/>
        </div>
    )
}