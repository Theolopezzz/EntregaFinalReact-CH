import {useState, useContext} from "react"
import { CartContext } from "../components/CartContext.jsx"
import { getFirestore, collection, addDoc } from "firebase/firestore"

export const CheckoutForm = () => {
    const {cart, clearCart} = useContext(CartContext)
    const [buyer, setBuyer] = useState({name: "", email: "", phone: ""})
    const [orderId, setOrderId] = useState(null)

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    const sendOrder = async () =>{
        if(!buyer.name || !buyer.email || !buyer.phone){
            alert("Por favor complete todos los campos")
            return
        }

    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const {id} = await addDoc(ordersCollection, order)
    setOrderId(id)
    clearCart()
    }

    if(orderId){
        return <h2>Gracias por su compra! Su ID de orden es: {orderId}</h2>
    }
    return (
        <div>
            <h2>Formulario de Checkout</h2>
            <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
            <button onClick={sendOrder}>Confirmar Compra</button>
        </div>
    )
}
