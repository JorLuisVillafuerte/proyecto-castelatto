import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/layout/Dashboard';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import PedidoState from './context/pedidos/pedidoState';
//import Archivos from './components/archivos/Archivos';
//import ArchivosState from './context/archivos/archivosState';

function App() {
  return (
  <PedidoState>
    <AuthState>
      <AlertaState>
        <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AlertaState>
    </AuthState>
  </PedidoState>
  );
}

export default App;
