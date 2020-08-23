import React, { useContext} from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
import CargarPedidos from './CargarPedidos';
import VerPedidos from './VerPedidos';
import EstadoPedidos from './EstadoPedidos';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const GestionPedidos = () => {
    
    const pedidoContext = useContext(PedidoContext); 
    const { mostrarSeleccionado } = pedidoContext;

    
    const seleccionado = (e) => {
        mostrarSeleccionado(e.target.name);
    }

    return ( 
        <div className="contenedor-app">
            <Sidebar
            />
            <div className="seccion-principal">
                <Barra 
                />
                <main>
                    <div className="formulario">
                        <form
                        className="gestion"    
                        >
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name="cargar"
                                onClick={seleccionado}
                                >
                            Cargar pedidos
                            </button>
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name="ver"
                                onClick={seleccionado}
                                >
                            Ver pedidos
                            </button>
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name="estado"
                                onClick={seleccionado}
                                >
                            Cambiar estado pedidos
                            </button>
                        </form>
                    </div>
                    <div className="contenedor-tareas">
                        <CargarPedidos/>
                        <VerPedidos/>
                        <EstadoPedidos/>
                    </div>
                </main>
            </div>
        </div>
       
     );
}
 
export default GestionPedidos;