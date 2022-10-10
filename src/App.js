
import './App.css';
import {useEffect,useState} from "react";


function App() {
const[advice,setAdvice]=useState(" ");
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
      <form>
<button onClick={()=>getAdvice()}>advice for the day</button>
</form>
<div className='block'>
<h2 className='typewriter'>{advice}</h2>

<p>Type of activity:  <span>{type}</span></p>
<h3>{participants === 1 ? "for " +  participants + " participant" : "for " +  participants  +  " participants"}</h3>
</div></div>
  );
}



export default App;








