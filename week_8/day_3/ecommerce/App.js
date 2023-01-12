import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav>
            <ul>
                <li><a href='/'>home</a></li>
                <li><a href='/instruments'>instruments</a></li>
                <li><a href='/trolley'>trolley</a></li>
            </ul>
        </nav>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/instruments" element={ <Instruments/> }/>
          <Route path="/trolley" element={ <Checkout/> }/>
          <Route path="*" element={ <ErrorPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
