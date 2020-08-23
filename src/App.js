import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/layout/Dashboard';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import PedidoState from './context/pedidos/pedidoState';
import ObservacionState from './context/observaciones/observacionState';
import GestionProvider from './context/gestion/GestionContext';
import GestionPedidos from './components/pedidos/GestionPedidos';
import GestionObservaciones from './components/observaciones/GestionObservaciones';
import GestionReportes from './components/reportes/GestionReportes';
import Registrarse from './components/auth/Registrarse';
//import Archivos from './components/archivos/Archivos';
//import ArchivosState from './context/archivos/archivosState';

function App() {
  return (
  <PedidoState>
    <ObservacionState>
      <AuthState>
        <AlertaState>
          <GestionProvider>            
            <Router>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/registrarse" component={Registrarse} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/gestionpedidos" component={GestionPedidos} />
                  <Route exact path="/gestionobservaciones" component={GestionObservaciones} />
                  <Route exact path="/gestionreportes" component={GestionReportes} />
              </Switch>
            </Router>
          </GestionProvider>
        </AlertaState>
      </AuthState>
    </ObservacionState>
  </PedidoState>
  );
}

export default App;
