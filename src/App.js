import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Footer from './Components/HomePage/Footer';
import Header from './Components/HomePage/Header';
import Home from './Components/HomePage/Home';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
        <Router>
          <Header />

          <Switch>
            <Route path='/Search' component={SearchPage} /> 
            <Route path='/'exact component={Home} />
          </Switch>

          <Footer />
        </Router>
        
    </div>
  );
}

export default App;
