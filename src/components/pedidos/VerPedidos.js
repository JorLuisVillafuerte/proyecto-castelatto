import React, { useContext, Fragment, useEffect } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import TablaGestion from '../tablas/TablaGestion';
import {columnasPedidos} from '../util/Columnas';
const VerPedidos = () => {

    const pedidoContext = useContext(PedidoContext); 
    const {pedidos,obtenerPedidos, editarPedido, eliminarPedido} = pedidoContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta} = alertaContext;
    
    useEffect(() => {
        obtenerPedidos();
        console.log(pedidos);
    },[]);

    /*const ejecutarBuscar = (e) =>{
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
    }*/

    const handleRowUpdate = (newData, oldData, resolve, reject) => {
        editarPedido(newData);
        setTimeout(() => {
            resolve()
        }, 3000);
        
    }
    const handleRowDelete = async (oldData, resolve, reject) => {
        eliminarPedido(oldData);
        setTimeout(() => {
            resolve()
        }, 3000);
    }
    if(pedidos.length === 0){
        return null;
    }
    return ( 
        <Fragment>
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <h1>VER PEDIDOS</h1>
            
                <div id="custom-font">
                    <TablaGestion
                        columns={columnasPedidos}
                        data={pedidos}
                        handleRowUpdate={handleRowUpdate}
                        handleRowDelete={handleRowDelete}
                        />
                </div>        
        </Fragment>
     );
}
 
export default VerPedidos;