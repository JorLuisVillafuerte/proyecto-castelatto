import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './componentes/auth/Login';
//import Dashboard from './components/menu/Dashboard';
//import AlertaState from './context/alertas/alertaState';
//import AuthState from './context/autenticacion/authState';
//import Archivos from './components/archivos/Archivos';
//import ArchivosState from './context/archivos/archivosState';

function App() {
  return (
  <Router>
    <Switch>
        <Route exact path="/" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
