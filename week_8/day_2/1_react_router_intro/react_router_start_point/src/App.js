import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Choice from "./components/Choice";
import ErrorPage from "./components/ErrorPage"
import ForbiddenFruit from "./components/ForbiddenFruit";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing"

const App = () => {

  const pricingData = [
    { level:"Hobby", cost: 0},
    { level:"Startup", cost: 10},
    { level:"Enterprise", cost: 100},
  ];

  const [prices, setPrices] = useState(pricingData);
  
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/pricing" element={ <Pricing prices = {prices}/> }/>
          <Route path="/forbidden" element={ <ForbiddenFruit/> }/>
          <Route path="*" element={ <ErrorPage/> }/>
          <Route path="/choices/:choice" element={ <Choice/> }/>
        </Routes>
      </Router>
    </> 
  )
}

export default App;
