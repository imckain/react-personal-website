import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={props =>
            <HomePage {...props}/>
          } />
          <Route exact path='/about' render={props =>
            <AboutPage {...props}/>
          } />
          <Route exact path='/portfolio' render={props =>
            <PortfolioPage {...props}/>
          } />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
