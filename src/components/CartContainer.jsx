import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"

import { usarCartContext } from "../context/CartContext"
import CartProductsList from "./CartProductsList"
import FormInput from "./Form"

const CartContainer = () => {

  const { vaciarCarrito, precioTotal } = usarCartContext()

  return (
    <div className="cart-container">
      
      <CartProductsList />

      <h3>{precioTotal() !== 0 && `El precio total es: $ ${precioTotal()}`}</h3>

      <FormInput />

      <button onClick={vaciarCarrito} className="button-style-vaciar">Vaciar el Carrito</button>

    </div>
  )
}

export default CartContainer