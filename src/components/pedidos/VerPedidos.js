import React, { useContext, Fragment, useEffect } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import Pedido from './Pedido';
import TablaGestion from '../tablas/TablaGestion';
import {columnasPedidos} from '../util/Columnas';
const VerPedidos = () => {

    const pedidoContext = useContext(PedidoContext); 
    const {pedidos,seleccionado, buscarPedido,resetBusqueda, obtenerPedidos, editarPedido, eliminarPedido} = pedidoContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;
    
    useEffect(() => {
        obtenerPedidos();
        console.log(pedidos);
    },[]);


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

    if(seleccionado !== 'ver') return null;
    if(pedidos.length === 0){
        return null;
    }
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