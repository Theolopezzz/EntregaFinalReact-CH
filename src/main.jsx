import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {CartProvider} from "./components/CartContext.jsx"
import './index.css'
import { initializeApp } from "firebase/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)

const firebaseConfig = {
  apiKey: "AIzaSyD6qT3gORF__c357rhDkzSHksU89C86J-A",
  authDomain: "ecomercech-28e1c.firebaseapp.com",
  projectId: "ecomercech-28e1c",
  storageBucket: "ecomercech-28e1c.firebasestorage.app",
  messagingSenderId: "62409534075",
  appId: "1:62409534075:web:52c1b33b74833a4b8d50de"
};

const app = initializeApp(firebaseConfig);
