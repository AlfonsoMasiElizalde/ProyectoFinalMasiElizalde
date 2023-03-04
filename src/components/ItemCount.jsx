import { useState } from "react"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

    const [count, setCount] = useState(initial)

    const handleSuma = () =>{
        if (count < stock){
            setCount(count + 1)
        }
    }
    
    const handleRestar = () =>{
        if (count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(count)
    }

  return (
    <div className="item-count-div">
        <div>
            <button onClick={handleSuma} className="cantidad-productos-button"> + </button>

            <label className="count-productos-button">{count}</label>
            
            <button onClick={handleRestar} className="cantidad-productos-button"> - </button>
        </div>

        <button onClick={handleOnAdd} className="button-style">Agregar al Carrito</button>

    </div>
  )
}

export default ItemCount