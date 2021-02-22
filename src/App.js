import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import {Route, Switch} from 'react-router-dom';
import Error from "./component/Error";
import About from './component/About';
import Contact from  './component/Contact';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
     
      <div className="resultdiv">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/about" component={About} />
        <Route path  path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
