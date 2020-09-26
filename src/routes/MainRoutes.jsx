import GestionPedidos from '../components/pedidos/GestionPedidos';
import GestionObservaciones from '../components/observaciones/GestionObservaciones';
import GestionReportes from '../components/reportes/GestionReportes';
import GestionUsuarios from '../components/usuarios/GestionUsuarios';

var MainRoutes = [
    {
      path: '/dashboard/pedidos',
      nombre: 'Pedidos',
      component: GestionPedidos
    },
    {
      path: '/dashboard/observaciones',
      nombre: 'Observaciones',
      component: GestionObservaciones
    },
    {
      path: '/dashboard/usuarios',
      nombre: 'Usuarios',
      component: GestionUsuarios
    },
]
export default MainRoutes;