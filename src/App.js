import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" exact component={Resumo}></Route>
              <Route path="/consultas" component={Consultas}></Route>
              <Route path="/faturamento" component={Faturamento}></Route>
              <Route path="/" component={Resumo}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
