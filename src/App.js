// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WarehouseList from './components/WarehouseList';
import WarehouseDetails from './components/WarehouseDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={WarehouseList} />
          <Route path="/warehouse/:id" component={WarehouseDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
