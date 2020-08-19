import React, { useContext } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';

const CargarPedidos = () => {
    
    const pedidoContext = useContext(PedidoContext); 
    const { mostrarGestion } = pedidoContext;

    if(!mostrarGestion) return null;

    return ( 
        <div className="formulario">
            <form
                className=""
            >
                <div className="contenedor-input">
                    <button
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                    >
                    Accion 1
                    </button>
                </div>
                <div className="contenedor-input">
                    <button
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                    >
                    Accion 2
                    </button>
                </div>
            </form>
            {
            //errorTarea ? <p className="mensaje error">El nombre es obligatorio</p> : null
            }
        </div>
     );
}
 
export default CargarPedidos;