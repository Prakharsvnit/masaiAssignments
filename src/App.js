import './App.css';
import Counter from "./components/counter"
import {Todos} from "./components/Todos"

function App() {
return (
    <div className="App">
      <Counter />
      <hr />
      <Todos /> 
    </div>
  );
}

export default App;
