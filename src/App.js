import './App.css';
import Card from "./components/Card"

function App() {
  const data = [ {
    text1:"There are approximately",
    text2:"3.04 Billion",
    text3:"active social media users worldwide",
    id:1
  },{
    text1:"The total number of active social media users is almost",
    text2:"3.04 Billion",
    text3:"",
    id:2
  },{
    text1:"",
    text2:"90%",
    text3:"of social media users try to reach out to brands or retailers",
    id:3
  },{
    text1:"In United States",
    text2:"77%",
    text3:"of people own atleast one of social media profile",
    id:4
  },{
    text1:"Youtube,Instagram,Snapchat are most popular social media platforms among",
    text2:"Teens",
    text3:"",
    id:5
  },{
    text1:"",
    text2:"135 minutes",
    text3:"are spent on social media everyday by global internet users",
    id:6
  }]
  return (
    <>
    <h1 className="heading">General <b>Social Marketing</b>Stats</h1>
    <div className="gridBox">
      {data.map(el=>{
        return <Card key={el.id} data1={el}/>
      })}
            
    </div>
    <h1 className="heading">STATUS | REW</h1>
    </>
  );
}

export default App;
