import { usarCartContext } from "../context/CartContext"

function CartWidget() {
  const {cantidadTotal} = usarCartContext()

  return (
    <>
      <h2 className="mostrar-carrito">
      {cantidadTotal() !== 0 && cantidadTotal()} 🛒
      </h2>
    </>
  )
}

export default CartWidget