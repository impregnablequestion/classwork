import {useEffect, useState} from "react";
import './App.css';

function App() {

  const [dogImgUrl, setDogImgUrl] = useState("");

  const fetchDog = function(){
    fetch("https://dog.ceo/api/breed/terrier/wheaten/images/random")
    .then(response => response.json())
    .then(data => setDogImgUrl(data.message))
  }

  useEffect(()=>{
    fetchDog();
  }, [])

  return (
    <div id="app">
    <h1>RANDOGMISER</h1>
    <img id="dog-img" src={dogImgUrl} alt="random dog pictures"/>
    <button onClick={fetchDog}>Gimme those dogs!</button>
    </div>
  );
}

export default App;
