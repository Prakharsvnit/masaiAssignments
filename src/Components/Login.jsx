import { useContext, useState } from "react"
import { AuthContext } from "./Context";
import axios from "axios";
import Dashboard from "./Dashboard"

const Login = () => {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        //make an api call here
        setIsLoading(true)
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: {
                email,
                password
            }
        }).then(res => toggleAuth(res.data.token))
            .catch(err => setErr(false))
            .finally(() => setErr(false));
    }
    return (
        <div>
            {!isAuth ?
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                <input type="text" name="" id="" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" name="" id="" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" name="" value="Login"/>
                    </form>
                    
                </div>: <Dashboard/>}
        </div>
    )
}

export default Login;