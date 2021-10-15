import  { useState } from 'react'

import "../App.css"
const Card = ({style,name,price}) => {
    const [number, setNumber]= useState(1);
    const [productPrice,setProductPrice] = useState(price);

    const handleAdd=()=>{
    setNumber(number+1)
    setProductPrice(Number(price) * (number+1)); 
    }

    const handleSubtract = ()=>{
        setNumber(number-1)
        setProductPrice(Number(price) * (number-1));
    }

    return (

        <div className="card_content" style={style}>
            <h2>Product Name:{name}</h2>
            <p>Price:{productPrice}</p>
            <p>Qty:
                <button class="qty_box" style={{float:'left'}} onClick={handleSubtract} >-</button>
                <div class="qty_box" style={{float:'left'}}>{number}</div>
                <button class="qty_box" style={{float:'left'}} onClick={handleAdd}>+</button>
            </p>
        </div>

    )
}

export default Card
