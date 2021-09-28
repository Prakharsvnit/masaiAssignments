
import { Route,Switch } from "react-router-dom"
import  Products  from './components/Products'
import  { ProductDetails } from './components/ProductDetails'
import { Navbar } from './components/Navbar'


function App() {
    return(<div className="App">
        <Navbar />
        <Switch>
        <Route exact path = "/">HOME</Route>
        <Route exact path = "/products/"><Products /></Route>
        <Route path = "/products/:id"><ProductDetails/></Route>
        <Route> error:404</Route>
        </Switch>
    </div>
    
    )
}

export default App