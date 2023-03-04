import { Link } from "react-router-dom"
import { memo } from "react"

const Item = memo( ({producto}) => {
  return (
    <div className="card">

        <Link className="links-style" to={`/producto/${producto.id}`}>

            <img src={producto.imagen} alt={producto.descripcion}/>

            <h3 className="card-title">{producto.item}, {producto.marca}</h3>

            <p className="card-price">$ {producto.precio}</p>

        </Link>

    </div>
  )
})

export default Item