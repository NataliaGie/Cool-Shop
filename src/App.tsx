import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import NavBar from './components//NavBar';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/my-cart">
            <MyCart />
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
