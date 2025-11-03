import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./containers/ItemListContainer.jsx"
import { ItemDetailContainer } from "./containers/ItemDetailContainer.jsx"
import { NavBar } from "./components/NavBar.jsx"
import { Cart } from "./containers/Cart"
import { CheckoutForm } from "./containers/CheckoutForm"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<h2>Pagina no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
