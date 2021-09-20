import  React,{ useState,useEffect } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'reactstrap';

function App() {
  const [users,setUsers] = useState([])
  const [click,setClick] = useState(false)
const ProfileData = () =>  axios.get('https://api.github.com/users')
  .then(function (response) {
    // handle success
    console.log(response)
    setUsers(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

function handleClick(){
  ProfileData();
  setClick(!click);
}

return(
  <div>
<button onClick={()=> {handleClick()}}>CLick me</button>
  {click ? (<div>
    { users.map((profile) => {
    return(
      <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile.avatar_url} />
      <Card.Body>
        <Card.Title>Github Profile</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{profile.login}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href={profile.url}>github profile</Card.Link>
        <Card.Link href={profile.organizations_url}>Organizations</Card.Link>
      </Card.Body>
    </Card>
        </> 
    
    )
   
  })   }
  </div>) : (null)}
  </div>


    
 )
}
export default App;
