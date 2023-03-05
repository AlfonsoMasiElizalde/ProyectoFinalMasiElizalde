import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

import { usarCartContext } from "../context/CartContext"

const FormInput = () => {

    const [ idOrder, setIdOrder ] = useState("")

    const { cartList, vaciarCarrito, precioTotal } = usarCartContext()

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        repetirEmail: ""
    })

    const insertarCompra = (evt) => {

        evt.preventDefault()

        const order = {}
        order.comprador = formData
        order.isActive = true
        order.items = cartList.map( ({id, descripcion, precio, cantidad}) => ({id, descripcion, precio, cantidad}) )
        order.total = precioTotal()

        const db = getFirestore()
        
        const ordersCollection = collection(db, "compras")

        addDoc(ordersCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            vaciarCarrito()
            setFormData({
                nombre: "",
                apellido: "",
                telefono: "",
                email: "",
                repetirEmail: ""
            })
        })

    }
    
    const handleOnChange = (evt) => {
        setFormData({
          ...formData,
          [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>

            {idOrder !== "" && <h3>Su compra ha sido exitosa! Su ID de compra es: {idOrder}</h3>}

            <form onSubmit={insertarCompra} className="cart-form">

                <input type="text" name="nombre" placeholder="Ingrese su Nombre" onChange={handleOnChange} value={formData.nombre} className="form-data-input" required/>

                <input type="text" name="apellido" placeholder="Ingrese su Apellido" onChange={handleOnChange} value={formData.apellido} className="form-data-input" required/>

                <input type="text" name="telefono" placeholder="Ingrese su Telefono" onChange={handleOnChange} value={formData.telefono} className="form-data-input" required/>

                <input type="email" name="email" placeholder="Ingrese su Email" onChange={handleOnChange} value={formData.email} className="form-data-input" required/>

                <input type="email" name="repetirEmail" placeholder="Ingrese nuevamente su Email" onChange={handleOnChange} value={formData.repetirEmail} className="form-data-input" required/>

                <button type="submit" className="button-style-compra">Generar la compra</button>

            </form>

        </div>
    )
}

export default FormInput