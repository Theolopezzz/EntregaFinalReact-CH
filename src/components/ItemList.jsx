import {Item} from './Item/Item.jsx'

export const ItemList = ({products}) => {
    return (
        <div className='product-grid'>
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}