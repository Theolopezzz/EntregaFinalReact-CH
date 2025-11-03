import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../components/ItemDetail.jsx";
import "../styles/style.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, "items", id) 

    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() })
      } else {
        console.log("Producto no encontrado")
      }
    })
  }, [id])

  return <ItemDetail product={product} />
}
