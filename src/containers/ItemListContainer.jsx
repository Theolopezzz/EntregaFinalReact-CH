import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { ItemList } from "../components/ItemList.jsx"
import "../styles/style.css";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")

        const q = categoryId
            ? query(itemsCollection, where("category", "==", categoryId))
            : itemsCollection

        getDocs(q).then((snapshot) => { const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id})) 
        setProducts(data)
        }).catch((err) => console.error("Error al obetener prod: ", err))
    }, [categoryId])
    return <ItemList products={products}/>
}