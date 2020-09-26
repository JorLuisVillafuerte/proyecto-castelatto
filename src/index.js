import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Switch,Route, HashRouter} from 'react-router-dom';
import Login from './components/autenticacion/Login';
import Dashboard from './components/layout/Dashboard';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import PedidoState from './context/pedidos/pedidoState';
import ObservacionState from './context/observaciones/observacionState';
import UsuarioState from './context/usuarios/usuarioState';
/*import GestionObservaciones from './components/observaciones/GestionObservaciones';
import GestionReportes from './components/reportes/GestionReportes';
import PrivateRoute from './config/PrivateRoute';
*/
ReactDOM.render(
  <React.StrictMode>
    <PedidoState>
      <ObservacionState>
        <AuthState>
          <UsuarioState>
            <AlertaState>          
                <HashRouter>
                  <Switch>
                      <Route exact path="/" component={Login} />
                      <Route path="/dashboard" component={Dashboard} />
                  </Switch>
                </HashRouter>
            </AlertaState>
          </UsuarioState>
        </AuthState>
      </ObservacionState>
    </PedidoState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
