import  { useState } from 'react'

import "../App.css"
const Card = ({data1}) => {
    const [number, setNumber]= useState(1);
    const [productPrice,setProductPrice] = useState(data1.Price);

    const handleAdd=()=>{
    setNumber(number+1)
    setProductPrice(Number(data1.Price) * (number+1)); 
    }

    const handleSubtract = ()=>{
        setNumber(number-1)
        setProductPrice(Number(data1.Price) * (number-1));
    }

    return (

        <div className="card_content" style={{backgroundColor:data1.backgroundColor}}>
            <h2>Product Name:{data1.Product}</h2>
            <p>Price:{productPrice}</p>
            <div>Qty:
                <button disabled={number<=1} className="qty_box" style={{float:'left'}} onClick={handleSubtract} >-</button>
                <div className="qty_box" style={{float:'left'}}>{number}</div>
                <button className="qty_box" style={{float:'left'}} onClick={handleAdd}>+</button>
            </div>
        </div>

    )
}

export default Card
