import { useContext } from "react"
import { AuthContext } from "./Context"

const Dashboard = () => {
    const { token } = useContext(AuthContext);
    return (
        <div>
            <div style={{marginTop:"20%"}}>
                <h1>Status: User is logged in</h1> 
            
        </div>
            <div style={{ display: "flex", justifyContent:"center", gap:"20px"}}>
           <img src="https://cdn-icons-png.flaticon.com/512/556/556130.png" alt="" style={{height:"100px"}} /> <h1>Your token is { token}</h1>
        </div>
        
        </div>
    )
}

export default Dashboard