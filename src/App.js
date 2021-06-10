import './App.css';
import Navigation from './views/navigation';
import BioPage from './views/bio';
import PortfolioPage from './views/portfolio';
import ResumePage from './views/resume';
import LinksPage from './views/links';
import {TransitionGroup, CSSTransition, SwitchTransition} from 'react-transition-group';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation} from 'react-router-dom';
import logo from './img/portfolio_screen_logo_bw_sm.png';
import { Fade } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo"></img>
      <Router>
        <Navigation></Navigation>
              <Switch>
                <Route path="/about">
                  <BioPage></BioPage>
                </Route>
                <Route path="/portfolio">
                  <PortfolioPage></PortfolioPage>
                </Route>
                <Route path="/resume">
                <ResumePage></ResumePage>
                </Route>
                <Route path="/links">
                  <LinksPage></LinksPage>
                </Route>
              </Switch>
      </Router>
    </div>
  );
}

export default App;
