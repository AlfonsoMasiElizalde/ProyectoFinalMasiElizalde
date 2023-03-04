import { useState } from "react"
import {Link} from "react-router-dom"

import { usarCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import { Cargando } from "./Loading"

const ItemDetail = ({producto}) => {

  const [isCount, setIsCount] = useState(true)

  // const [ loading, setLoading ] = useState(true)

  const { agregarCarrito } = usarCartContext()

  const onAdd = (cant)=>{
    agregarCarrito( { ...producto, cantidad: cant } )
    setIsCount(false)
  }

  return (
    // loading
    // ?
    //   <Cargando />
    // :
    <div className="card-detail-container">
      <div className="card-detail">
        <img src={producto.imagen} alt={producto.descripcion} />
        <h3 className="card-detail-title">{producto.descripcion}</h3>
        <p className="card-detail-price">$ {producto.precio}</p>
        {
            isCount ?
              <ItemCount initial={1} stock={producto.cantidadStock} onAdd={onAdd} />
            :
              <>
                <Link to="/" className="button-style">
                  Ir al Inicio
                </Link>
                <Link to="/carrito" className="button-style">
                  Ir al Carrito
                </Link>
              </>
          }
      </div>
    </div>
  )
}

export default ItemDetail