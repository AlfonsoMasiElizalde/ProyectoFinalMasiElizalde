import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { Cargando } from "./Loading"

const ItemDetailContainer = () => {

  const [ producto, setProducto ] = useState({})

  const [loading, setLoading] = useState(true)

  const { idProducto } = useParams()

  useEffect(() => {

    setLoading(true)

    const db = getFirestore()

    const query = doc(db, "productos", idProducto)

    getDoc(query)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    loading
    ?
      <Cargando />
    :
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer