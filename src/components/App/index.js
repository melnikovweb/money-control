import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Statistic from "../Statistic";
import {GlobalStyle, Wrapper} from './styles';


const App = () => {
 
    return (
      <Router>
      <Wrapper>
        <GlobalStyle/>
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistic">Statistic</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
          <Route path="/about" element={ <About />}>
           
          </Route>
          <Route path="/statistic" element={<Statistic />}>
            
          </Route>
          <Route exact path="/" element={<Home />}>
            
          </Route>
        </Routes>


      </Wrapper>
      </Router>
    )
  }
  
  export default App;