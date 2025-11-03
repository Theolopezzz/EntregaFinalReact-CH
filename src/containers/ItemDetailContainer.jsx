import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../components/ItemDetail.jsx";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => { setProduct({...snapshot.data(), id: snapshot.id})
        }).catch((err) => console.error("Error al obtener el producto: ", err));
    }, [id]);

    return (<ItemDetail product={product} />);
}