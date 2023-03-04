import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

import { usarCartContext } from "../context/CartContext"

const FormInput = () => {

    const { cartList, vaciarCarrito, precioTotal } = usarCartContext()

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        contraseña: ""
    
    })

    const insertarCompra = (evt) => {

        evt.preventDefault()

        const compra = {}
        compra.comprador = formData
        compra.isActive = true
        compra.items = cartList.map( ({id, descripcion, precio, cantidad}) => ({id, descripcion, precio, cantidad}) )
        compra.total = precioTotal()

        const db = getFirestore()
        
        const comprasCollection = collection(db, "compras")

        addDoc(comprasCollection, compra)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> {
            vaciarCarrito()
            setFormData({
                nombre: "",
                apellido: "",
                telefono: "",
                email: "",
                contraseña: ""
            })
        })

    }

    const handleOnChange = (evt) => {
        setFormData({
          ...formData,
          [evt.target.name]: evt.target.value
        })
    }

    return <form onSubmit={insertarCompra} className="cart-form">

        <input type="text" name="nombre" placeholder="Ingrese su Nombre" onChange={handleOnChange} value={formData.nombre} className="form-data-input" required/>

        <input type="text" name="apellido" placeholder="Ingrese su Apellido" onChange={handleOnChange} value={formData.apellido} className="form-data-input" required/>

        <input type="text" name="telefono" placeholder="Ingrese su Telefono" onChange={handleOnChange} value={formData.telefono} className="form-data-input" required/>

        <input type="email" name="email" placeholder="Ingrese su Email" onChange={handleOnChange} value={formData.email} className="form-data-input" required/>

        <input type="password" name="contraseña" placeholder="Ingrese una contraseña" onChange={handleOnChange} value={formData.contraseña} className="form-data-input" required/>

        <button type="submit" className="button-style-compra">Generar la compra</button>

    </form>
  
}

export default FormInput