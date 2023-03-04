import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import ItemList from "./ItemList"
import { Cargando } from "./Loading"


export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])

  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()

  useEffect(()=>{

    setLoading(true)

    const db = getFirestore()

    const queryCollections = collection(db, "productos")
    
    const queryFilter = idCategoria ? query(queryCollections, where("categoria", "==", idCategoria)) : queryCollections
      
    getDocs(queryFilter)
    .then(resp => setProductos(resp.docs.map(product => ({id: product.id, ...product.data() }) )))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
    
  }, [idCategoria])

  return (

    loading
    ?
      <Cargando />
    :
    <>
      <div>

        <h2 style={{
          display:"flex",
          justifyContent:"center"
        }}>
          Elegi los mejores productos siempre en Maxikiosco Don Pepe!
        </h2>

        <div className="mostrador-productos">

          <ItemList productos={productos} />
          
        </div>

      </div>
    </>
  )
}

export default ItemListContainer