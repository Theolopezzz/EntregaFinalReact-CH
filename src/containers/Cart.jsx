import { useContext } from "react";
import { CartContext } from "../components/CartContext.jsx";
import { CartItem } from "../components/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const total = cart.reduce((acc, item)=> acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/"><button>Volver al catálogo</button></Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout"><button>Proceder al Pago</button></Link>
        </div>
    )
}