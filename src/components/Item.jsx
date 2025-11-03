import {Link} from 'react-router-dom'
import "../styles/style.css";

export const Item = ({product}) => {
    return(
        <div className='card'>
            <img src={`/imgs/${product.img}`} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/detail/${product.id}`}><button></button>Ver detalle</Link>
        </div>
    )
}