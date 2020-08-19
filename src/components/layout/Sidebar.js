import React, { useContext } from 'react';
//import NuevoProyecto from '../proyectos/NuevoProyecto';
//import ListadoProyectos from '../proyectos/ListadoProyectos';
import PedidoContext from '../../context/pedidos/pedidoContext';

const Sidebar = () => {
    
    const pedidoContext = useContext(PedidoContext); 
    const { mostrarGestionPedidos } = pedidoContext;
    

    return ( 
        <aside>
            <h1>TRAZABILIDAD<span>v1.0</span></h1>
            <hr/>
            <div className="proyectos">
                <button
                    type="button"
                    className="btn btn-primario btn-block btn-custom"
                    onClick={()=> mostrarGestionPedidos()}
                    >
                    Pedidos
                </button>
                <button
                    type="button"
                    className="btn btn-primario btn-block btn-custom"
                    
                    >
                    Observaciones
                </button>
                <button
                    type="button"
                    className="btn btn-primario btn-block btn-custom"
        
                    >
                    Reportes
                </button>
            </div>
        </aside>
     );
}
 
export default Sidebar;