import React, { useState, useContext } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
import Popup from '../util/Popup.js';
import FormEstadoPedido from './FormEstadoPedido';


const Pedido = ({pedido, tipo}) => {
    
    const pedidoContext = useContext(PedidoContext); 
    const { setIdPedidoModal} = pedidoContext;
    
    //POPUP CONFIGURACION
    const [openPopup, setOpenPopup] = useState(false);
    const [openPopup1, setOpenPopup1] = useState(false);
    
    if(tipo==='estado') {
        return ( 
            <li className="tarea sombra" name={pedido.cliente}>
                <p>{pedido.id}</p>
                <p>{pedido.cliente}</p>
                <p>{pedido.descripcion}</p>
                <p>{pedido.fechaingreso}</p>
                <p>{pedido.fechaproduccion}</p>
                <p>{pedido.estado}</p>
                <div className="estado">
                    
                    <button
                        type="button"
                        className="btn btn-secundario btn-submit"
                        onClick={
                            ()=>{
                                setIdPedidoModal(pedido.id)
                                setOpenPopup(true);
                            }
                        }
                    >
                        Ver Detalles
                    </button>
                    <Popup
                        title="VER DETALLES"
                        openPopup= {openPopup}
                        setOpenPopup={setOpenPopup}
                        setIdPedidoModal={setIdPedidoModal}
                    >
                        <h2>Informacion del pedido #{pedido.idpedido}</h2>
                        <h3>Codigo de pedido: {pedido.codPedido}</h3>
                        <h3>Descripcion: {pedido.descripcion}</h3>
                        <h3>Cliente: {pedido.cliente}</h3>
                        <h3>Fecha emision: {pedido.fechaEmision}</h3>
                        <h3>Fecha produccion: {pedido.fechaProduccion}</h3>
                        <h3>Fecha terminado: {pedido.fechaTerminado}</h3>
                        <h3>Vendedor: {pedido.vendedor}</h3>
                        <h3>Direccion: {pedido.direccion}</h3>
                         {
                             /*ver detalle : nro pedido y cantidad de unidades
                                ej: zapatillas 10 unidades
                                   
                             */ 
                         }
                    </Popup>


                    <button
                        type="button"
                        className="btn btn-tercer btn-submit" 
                        onClick={()=>{setOpenPopup1(true)}}       
                    >
                        Cambiar Estado
                    </button>
                    <Popup
                        title={`CAMBIAR ESTADO PEDIDO #${pedido.id}`}
                        openPopup= {openPopup1}
                        setOpenPopup={setOpenPopup1}
                        setIdPedidoModal={setIdPedidoModal}
                    >
                        <FormEstadoPedido
                            pedido={pedido}
                            setOpenPopup1={setOpenPopup1}
                        />
                    </Popup>
                </div>
            </li>
        );
    }else{

        return ( 
            <li className="tarea sombra" name={pedido.cliente}>
                <p>{pedido.id}</p>
                <p>{pedido.cliente}</p>
                <p>{pedido.descripcion}</p>
                <p>{pedido.fechaingreso}</p>
                <p>{pedido.fechaproduccion}</p>
                <p>{pedido.estado}</p>
                <div className="estado">
                    <button
                        type="button"
                        className="ver-detalle"
                        onClick={
                            ()=>{
                                setIdPedidoModal(pedido.id)
                                setOpenPopup(true);
                            }
                        }
                    >
                        Ver Detalles
                    </button>
                    <Popup
                        title="VER DETALLES"
                        openPopup= {openPopup}
                        setOpenPopup={setOpenPopup}
                        setIdPedidoModal={setIdPedidoModal}
                    >
                        <h2>Informacion del pedido #{pedido.id}</h2>
                        <h3>Detalle 1</h3>
                        <h3>Detalle 2</h3>
                        <h3>Detalle 3</h3>
                        <h3>Detalle 4</h3>
                    </Popup>
                </div>
            </li>
        );
                
    }
}
 
export default Pedido;