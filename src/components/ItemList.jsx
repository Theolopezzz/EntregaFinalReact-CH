import {Item} from './Item.jsx'
import "../styles/style.css";

export const ItemList = ({products}) => {
    return (
        <div className='card-container'>
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}