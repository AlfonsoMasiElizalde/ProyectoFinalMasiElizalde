import { Link, NavLink } from "react-router-dom"

import CartWidget from "./CartWidget"

const categorias = [
    {id: "1", nombre: "Heladera", idCategoria: "heladera"},
    {id: "2", nombre: "Despensa", idCategoria: "despensa"},
    {id: "3", nombre: "Bebidas", idCategoria: "bebida"}
]

function NavBar() {
  return (
    <nav className="navbar" >
        <h1 className="navbar-logo">
            <NavLink to={"/"}>Don Pepe</NavLink>
        </h1>
        <h2 className="navbar-links">
            <ul className="navbar-ul">
                <li>
                    <NavLink to={"/"}>Inicio</NavLink>
                </li>

                {categorias.map(categ => <NavLink key={categ.id} to={`/categoria/${categ.idCategoria}`}>{categ.nombre}</NavLink> )}
            </ul>
        </h2>
        <Link to={"/carrito"}>
            <CartWidget />
        </Link>
    </nav>
  )
}

export default NavBar