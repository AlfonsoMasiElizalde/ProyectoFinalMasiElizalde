import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const usarCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList ] = useState([])

    const agregarCarrito = (nuevoProducto) => {
        const idxProd = cartList.findIndex(product => product.id === nuevoProducto.id)
        if(idxProd !== -1){
            cartList[idxProd].cantidad += nuevoProducto.cantidad
            setCartList([...cartList])
            return
        }

        setCartList([
            ...cartList,
            nuevoProducto
        ])
    }

    const precioTotal = () => cartList.reduce((count, producto) => count += (producto.cantidad*producto.precio), 0)

    const cantidadTotal = () => cartList.reduce((count, producto) => count += producto.cantidad, 0)

    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const vaciarCarrito = () => setCartList( [] )

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}