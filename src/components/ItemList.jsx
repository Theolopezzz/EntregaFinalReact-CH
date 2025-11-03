import {Item} from './Item.jsx'
import "../styles/style.css";

export const ItemList = ({products}) => {
    return (
        <div className='product-grid'>
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}