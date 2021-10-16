import Card from "./Components/Card"
import data from "./data.json"
import './App.css';

function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map(el=>{
        return <Card key={el.id} data1={el}/>
      })}
    </div>
  );
}

export default App;