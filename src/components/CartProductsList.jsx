import { usarCartContext } from "../context/CartContext"

const CartProductsList = () => {

    const { cartList, eliminarProducto } = usarCartContext()

  return (
    <div>
        { cartList.map(producto => (
            <div key={producto.id} className="cart-product-list">

                <img src={producto.imagen} className="cart-product-list-img"/>

                <h4>Producto: {producto.item}, {producto.marca}</h4>

                <h4>Cantidad: {producto.cantidad}</h4>

                <h4>Precio: $ {producto.precio * producto.cantidad}</h4>

                <button onClick={()=> eliminarProducto(producto.id)} className="button-style-cart-delete-item">❌</button>

            </div>
        ))}
    </div>
  )
}

export default CartProductsList