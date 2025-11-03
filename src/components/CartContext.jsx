import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
      setCart([...cart])
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}












// import { createContext, useState } from "react"

// export const CartContext = createContext()

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])

//     const addToCart = (item, quantity) => {
//         const exists = cart.find(prod => prod.id === item.id)
//         if (exists) {
//             setCart(cart.map(prod =>
//                 prod.id === item.id
//                     ? { ...prod, quantity: prod.quantity + quantity }
//                     : prod
//             ))
//         } else {
//             setCart([...cart, { ...item, quantity }])
//         }
//     }

//     const removeFromCart = (id) => {
//         setCart(cart.filter(item => item.id !== id))
//     }

//     const clearCart = () => setCart([])

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     )
// }
