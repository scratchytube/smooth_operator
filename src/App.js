import { Home, Signin } from './Pages'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
