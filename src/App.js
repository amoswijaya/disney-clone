import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
