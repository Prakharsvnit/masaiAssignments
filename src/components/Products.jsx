import {Link} from 'react-router-dom'

var data = [
{ name : "SmartPhone", price: 30, id : 0 },
 { name : "Watch", price : 20, id : 1 },
 { name : "Shirt", price : 50, id : 2 },
 { name : "Pants", price : 100, id : 3 } ] 



const Products = () => {
    return( 
    <div>
        <ul>
        {data.map(function(d, idx){
         return (
         <li key={idx}>{d.name} {d.price} <Link to={`/products/${idx}`}>Extra details</Link></li>
        )})}
        </ul>
    </div>
    )
}

export default Products


