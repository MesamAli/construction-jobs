import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Register from './components/pages/Register';
import Details from './components/pages/Details';
import Contract from './components/pages/Contract';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/Details/:id" component={Details} />
          <Route exact path="/Contract" component={Contract} />
        </Switch>
         
      </div>
    </Router>
  );
}

export default App;
