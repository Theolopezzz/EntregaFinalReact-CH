export const CartItem = ({item, removeFromCart}) => {
    return (
        <div className='cart-item'>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
    )
}