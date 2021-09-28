import { Link } from "react-router-dom"
export const Navbar = () => {
  return <div
  style = {{
    display: "flex",
    justifyContent:"space-evenly",
    alignItems:"center"
  }}
>
      <Link to = "/">Home</Link>
      <Link to = "/products">Products</Link>
      
</div>
}


