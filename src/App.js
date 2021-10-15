import Card from "./Components/Card"
import data from "./data.json"
import './App.css';

function App() {
  return (
    <div className="App">
      <Card style={{backgroundColor: 'orange'}} name="refrigerator" price="9000"/>
      <Card style={{backgroundColor: 'blue'}} name="Television" price="90000"/>
      <Card style={{backgroundColor: 'pink'}} name="Mobile" price="50000"/>
      <Card style={{backgroundColor: 'green'}} name="Laptop" price="35000"/>
    </div>
  );
}

export default App;