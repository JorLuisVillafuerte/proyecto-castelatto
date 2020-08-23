import React from 'react';
//import PedidoContext from '../../context/pedidos/pedidoContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    /* const pedidoContext = useContext(PedidoContext); 
    const { mostrarGestionPedidos } = pedidoContext; */
    
  
    return ( 
        <aside>
            <h1>TRAZABILIDAD<span>v1.0</span></h1>
            <hr/>
            <div className="proyectos">
                <Link to={'/gestionpedidos'}>
                    <button
                        type="button"
                        className="btn btn-primario btn-block btn-custom"  
                        >
                        Pedidos
                    </button>
                </Link>
                <Link to={'/gestionobservaciones'}>
                    <button
                        type="button"
                        className="btn btn-primario btn-block btn-custom"
                        
                        >
                        Observaciones
                    </button>
                </Link>
                <Link to={'/gestionreportes'}>
                    <button
                        type="button"
                        className="btn btn-primario btn-block btn-custom"
                        
                        >
                        Reportes
                    </button>
                </Link>
            </div>
        </aside>
     );
}
 
export default Sidebar;