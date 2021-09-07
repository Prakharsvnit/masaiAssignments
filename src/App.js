import  Combined  from "./components/Combined"

function App() {
  return (
    <div>
      <div>
      <Combined ButtonName={"JOIN US"} ButtonColor={"red"}/>   
      <Combined ButtonName={"SETTINGS"} ButtonColor={"blue"}/>
      </div>
   <div>
   <Combined ButtonName={"LOGIN"} ButtonColor={"green"}/>   
   <Combined ButtonName={"CONTACT US"} ButtonColor={"orange"}/>
   </div>
   <div>
   <Combined ButtonName={"SEARCH"} ButtonColor={"Violet"}/>   
   <Combined ButtonName={"HELP"} ButtonColor={"Grey"}/> 
   </div>
    <div>
    <Combined ButtonName={"HOME"} ButtonColor={"brown"}/>   
    <Combined ButtonName={"DOWNLOAD"} ButtonColor={"yellow"}/> 
    </div>
    <hr />
    <h2>Mobile Operating System</h2>
    <ul>
      <li>Android</li>
      <li>BlackBerry</li>
      <li>iPhone</li>
      <li>Windows Phone</li>
    </ul>
    <h2>Mobile Manufacturers</h2>
    <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
    </ul>
    </div>
    
  );
}

export default App;