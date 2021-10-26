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
            <h1>Your token is { token}</h1>
        </div>
        
        </div>
    )
}

export default Dashboard
