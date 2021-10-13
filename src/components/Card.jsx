import React from 'react'

const Card = ({data1}) => {
    return (
        <div>
            <img src = "https://via.placeholder.com/300" alt="img"/>
            <div className="card">
                {<p>{data1.text1}</p>} 
                {<h2>{data1.text2}</h2>} 
                {<p>{data1.text3}</p>}
           </div>
        </div>
    )
}

export default Card
