
import './App.css';
import {useEffect,useState} from "react";


function App() {
const[advice,setAdvice]=useState("");
const[type,setType]=useState("");
const [participants, setParticipants] = useState("");
  useEffect(()=>{
    getAdvice()},[])
    const getAdvice=async()=>{
      const response=await fetch(`http://www.boredapi.com/api/activity/`)
      const data=await response.json()
      console.log(data);
      setAdvice(data.activity)
      setType(data.type)
      setParticipants(data.participants);
    }
    
  return (
    <div className='App'>
      
      <div>
        <h1>What would you like to do today?</h1>
      </div>
      
<button onClick={()=>getAdvice()}>advice for the day</button>
<p>Type of activity :  <span>{type}</span></p>
<h2 className='typewriter'>{advice}</h2>
<h3>{participants === 1 ? "for " +  participants + " participant" : "for " +  participants  +  " participants"}</h3>
</div>
  );
}



export default App;








