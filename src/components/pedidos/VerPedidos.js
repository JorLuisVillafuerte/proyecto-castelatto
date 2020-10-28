import React, { useContext, Fragment, useEffect } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import TablaGestion from '../tablas/TablaGestion';
import {columnasPedidos} from '../util/Columnas';
import AuthContext from '../../context/autenticacion/authContext';
const VerPedidos = () => {

    const pedidoContext = useContext(PedidoContext); 
    const {pedidos,obtenerPedidos, editarPedido, eliminarPedido} = pedidoContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    const authContext = useContext(AuthContext);
    const {usuario} = authContext;
    
    useEffect(() => {
        if(pedidos.length === 0){
            obtenerPedidos();
        }
    }, []);

    const actualizarFila = (newData, oldData, resolve, reject) => {
        if(usuario && (usuario.cargo === 'jefeproduccion' || usuario.cargo === 'admin') ){
            editarPedido(newData);
            setTimeout(() => {
                resolve()
            }, 3000);

        }else{
            mostrarAlerta('No tienes los permisos para realizar la accion', 'alerta-error');
            reject();
            
        }
        
    }
    const eliminarFila = async (oldData, resolve, reject) => {
        if(usuario && (usuario.cargo === 'jefeproduccion' || usuario.cargo === 'admin') ){
            eliminarPedido(oldData);
            setTimeout(() => {
                resolve()
            }, 3000);

        }else{
            mostrarAlerta('No tienes los permisos para realizar la accion', 'alerta-error');
            reject();
        }
    }
    if(pedidos.length === 0){return null;}
    return ( 
        <Fragment>
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <h1>VER PEDIDOS</h1>
                <div id="custom-font">
                    <TablaGestion
                        columns={columnasPedidos}
                        data={pedidos}
                        handleRowUpdate={actualizarFila}
                        handleRowDelete={eliminarFila}
                        />
                </div>        
        </Fragment>
     );
}
 
export default VerPedidos;