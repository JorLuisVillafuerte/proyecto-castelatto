import React, { useContext } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import PedidoContext from '../../context/pedidos/pedidoContext';

const FormEstadoPedido = (props) => {
    const pedidoContext = useContext(PedidoContext); 
    const {editarPedido} = pedidoContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;
    const {pedido,setOpenPopup1} = props;

    const pasarProduccion = (e) => {
        if(pedido.fechaProduccion === null){
            pedido.fechaProduccion = new Date();
            editarPedido(pedido);
            mostrarAlerta('El pedido ha sido pasado a produccion.'+pedido.fechaProduccion, 'alerta-ok');
            setOpenPopup1(false);
        }else{
            mostrarAlerta('Este pedido ya tiene fecha de produccion: '+pedido.fechaProduccion, 'alerta-error');
            setOpenPopup1(false);
            return;
        }
    }
    const pasarTerminado = (e) => {
        if(pedido.fechaTerminado === null){
            pedido.fechaTerminado = new Date();
            editarPedido(pedido);
            mostrarAlerta('El pedido ha sido pasado a Terminado.'+pedido.fechaTerminado, 'alerta-ok');
            setOpenPopup1(false);
        }else{
            mostrarAlerta('Este pedido ya tiene fecha de Terminado: '+pedido.fechaTerminado, 'alerta-error');
            setOpenPopup1(false);
            return;
        }
    }
    return (
        <div>
            <button
                type="button"
                className="btn btn-primario btn-block btn-custom"
                name=""
                onClick={pasarProduccion}
            >
                Pasar a Produccion
            </button>
            <button
                type="button"
                className="btn btn-primario btn-block btn-custom"
                name=""
                onClick={pasarTerminado}
            >
                Pasar a Terminado
            </button>
        </div>
    );
}

export default FormEstadoPedido;