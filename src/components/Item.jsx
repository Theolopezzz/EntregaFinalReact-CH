import {Link} from 'react-router-dom'

export const Item = ({product}) => {
    return(
        <div className='card'>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/detail/${product.id}`}><button>Ver detalle</button></Link>
        </div>
    )
}