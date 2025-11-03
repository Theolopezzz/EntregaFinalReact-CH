import {useContext} from "react"
import {CartContext} from "./CartContext.jsx"
import {Link} from "react-router-dom"

export const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart">
            🛒 <span>{totalItems}</span>
        </Link>
    )
}