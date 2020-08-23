import React, { useContext, Fragment } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import Pedido from './Pedido';

const VerPedidos = () => {

    const pedidoContext = useContext(PedidoContext); 
    const {pedidos,seleccionado, buscarPedido,resetBusqueda } = pedidoContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;
    
    
    const ejecutarBuscar = (e) =>{
        e.preventDefault();
        let contenido = document.querySelector('#contenido').value;
        if(contenido.trim() === ''){
            mostrarAlerta('Debe ingresar algun valor', 'alerta-error');
            return
        }
        buscarPedido(contenido);
    }
    const ejecutarReset = (e) =>{
        resetBusqueda();
    }

    if(seleccionado !== 'ver') return null; 

    return ( 
        <Fragment>
        {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
        <h1>VER PEDIDOS</h1>
        <form className="buscador">
            <input 
                type="text" 
                className="input-text-buscador"
                placeholder="Ingrese ID del pedido a buscar"
                id="contenido"
              
            />
            <button
                type="submit"
                className="btn btn-primario btn-submit btn-buscador"
                onClick={ejecutarBuscar}
            >Buscar 
            </button>
            <button
                type="button"
                className="btn btn-primario btn-submit btn-buscador"
                onClick={ejecutarReset}
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
                />
            ))}

    
        </Fragment>
     );
}
 
export default VerPedidos;