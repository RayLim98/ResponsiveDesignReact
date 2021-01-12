import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Header from './Components/Header'
import NavMenu from './Components/NavMenu'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className='min-h-screen'>
      <Router>
        <Header />
        <Switch>
          <div className="mt-8 mx-10 lg:mx-72">
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App
