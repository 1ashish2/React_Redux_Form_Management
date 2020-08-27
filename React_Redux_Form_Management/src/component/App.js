import React from 'react';
import './App.css';
import store from './component/redux/store/store'
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Navigation} from './component/pages/Navigation';
import Home from './component/pages/Home';
import Tablecontent from './component/pages/Tablecontent';
import Edit from './component/pages/Edit';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Navigation />
          <div className="App">
            
            <Switch>
            <Route exact  path="/" component={Home} />
            <Route exact   path="/formdata" component={Tablecontent} />
            <Route exact   path="/formdata/edit/:id" component={Edit} />
            <Route exact   path="/formdata/:id" component={Tablecontent} />
            </Switch>
          </div>
        </div>
      </Router> 
    </Provider> 
    
  );
}

export default App;