import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

import NavBar from './components/NavBar'
import Banner from "./components/Banner"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CartContextProvider } from "./context/CartContext"
import CartContainer from "./components/CartContainer"

import './App.css'

function App() {

  return (
    
    <BrowserRouter>

      <CartContextProvider>

        <NavBar/>

        <Banner/>

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />

          <Route path="/categoria/:idCategoria" element={ <ItemListContainer /> } />

          <Route path="/producto/:idProducto" element={ <ItemDetailContainer /> } />

          <Route path="/carrito" element={ <CartContainer /> }></Route>

          <Route path="*" element={ <Navigate to={"/"} />} />
        </Routes>

      </CartContextProvider>

    </BrowserRouter>
      
  )
}

export default App