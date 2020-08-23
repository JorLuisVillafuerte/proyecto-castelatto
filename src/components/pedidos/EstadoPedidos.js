import React, { useContext , Fragment} from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import Pedido from './Pedido';

const EstadoPedidos = () => {
    const alertaContext = useContext(AlertaContext);
    const {alerta} = alertaContext;

    const pedidoContext = useContext(PedidoContext); 
    const { pedidos,seleccionado } = pedidoContext;

    if(seleccionado !== 'estado') return null; 
    
    return ( 
        <Fragment>
        {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
        
        <h1>CAMBIAR ESTADO PEDIDOS</h1>
        <form className="buscador">
            <input 
                type="text" 
                className="input-text-buscador"
                placeholder="Ingrese ID del pedido a cambiar estado"
                id="contenido"
              
            />
            <button
                type="submit"
                className="btn btn-primario btn-submit btn-buscador"
               
            >Buscar 
            </button>
            <button
                type="button"
                className="btn btn-primario btn-submit btn-buscador"
           
            >Resetear 
            </button>
        </form>
        {(pedidos.length===0) ? 
                <li>No se encontraron pedidos</li>
                :
                pedidos.map(p => (
                <Pedido
                    key={p.id}
                    pedido={p}
                    tipo={'estado'}
                />
            ))}
    
        </Fragment>
     );
}
 
export default EstadoPedidos;