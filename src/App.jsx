import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/company'>
          <Company />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/newproject'>
          <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}
