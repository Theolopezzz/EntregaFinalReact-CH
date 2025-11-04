import {useState, useContext} from "react"
import { CartContext } from "../components/CartContext.jsx"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import "../styles/style.css";

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
    
    const order = {
        buyer,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }   

    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const {id} = await addDoc(ordersCollection, order)
    setOrderId(id)
    clearCart()
    }

    if(orderId){
        return (        
        <div className="formulario">
            <h2>Compra a nombre de {buyer.name}</h2>
            <h3>Gracias por su compra! Su ID de orden es: {orderId}</h3>
        </div>
        )
    }
    return (
        <div className="formulario">
            <h2>Ingresa tus datos para confirmar la compra</h2>
            <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
            <button onClick={sendOrder}>Confirmar Compra</button>
        </div>
    )
}
