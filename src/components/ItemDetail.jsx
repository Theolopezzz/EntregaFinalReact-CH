import { useContext } from "react";
import { CartContext} from "./CartContext.jsx";
import { ItemCount} from "./ItemCount.jsx";
import "../styles/style.css";

export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        addToCart(product, quantity);
    }
    if (!product) {
        return <p>Cargando producto...</p>;
    }
    return (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <img src={`/imgs/${product.img}`} alt={product.name} />
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
        </div>
    )
}