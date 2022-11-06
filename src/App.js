import CounterApp from "./components/CounterApp";
import CustomUi from "./components/CustomUi"
import Page404 from "./components/Error";
import ErrorTest from "./components/ErrorTest";
import "./App.css";
import { Route, Routes, Link} from 'react-router-dom'


function App() {
 
  return (
    <section>
      <div className="App">
        <nav>
          <div className="nav-links">
            <Link to="/">CounterApp</Link>
            <Link to="/components/ErrorTest"> Error Test Page </Link>
            <Link to= "/components/CustomUI"> Custum Hook </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<CounterApp/>} />
        <Route path= "*" element={<Page404/>} />
        <Route path= "/components/CustomUI" element = {<CustomUi/>} />
        <Route path= "/components/ErrorTest" element= {<ErrorTest/>}/>
        
      </Routes>
      </section>
    
  );
}

export default App;
