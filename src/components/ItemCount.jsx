import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={decrease}>-</button>
                <span>{count}</span>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}