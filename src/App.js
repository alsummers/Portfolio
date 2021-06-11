import './App.css';
import Navigation from './views/navigation';
import BioPage from './views/bio';
import PortfolioPage from './views/portfolio';
import ResumePage from './views/resume';
import LinksPage from './views/links';
import ConstructionScreen from './components/404';
import {TransitionGroup, CSSTransition, SwitchTransition} from 'react-transition-group';
import { HashRouter as Router,
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
      {/* <ConstructionScreen /> */}
      <Router basename={process.env.PUBLIC_PATH}>
        <Navigation></Navigation>
          <RouterNav />
      </Router>
    </div>
  );
}

function RouterNav(){
  const location = useLocation();
  return <div>
    <TransitionGroup>
      <CSSTransition
      timeout={300}
      classNames="fade"
      key={location.key}>
        <Switch location={location}>
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
      </CSSTransition>
      </TransitionGroup>
    </div>
}

export default App;
