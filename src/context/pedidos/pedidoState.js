import React, { useReducer } from 'react'
//import {v4 as uuidv4} from 'uuid';
import pedidoContext from './pedidoContext';
import pedidoReducer from './pedidoReducer';

import {
    MOSTRAR_SELECCIONADO,
    BUSCAR_PEDIDO,
    RESET_BUSCAR,
    SET_ID_MODAL
} from '../../types';

//STATE INICIAL DE PEDIDOS
const PedidoState = props => {

    const pedidos  = [
        {id: 1, cliente: 'cliente 1', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 1, cliente: 'cliente 1', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 2, cliente: 'cliente 2', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 3, cliente: 'cliente 3', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 3, cliente: 'cliente 3', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 4, cliente: 'cliente 4', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 5, cliente: 'cliente 5', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 6, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 7, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 8, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 9, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 10, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 11, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 12, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 13, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 14, cliente: 'cliente 6', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'},
        {id: 15, cliente: 'cliente16', descripcion:'asdasd', fechaingreso: '01/05/2020', fechaproduccion: '01/05/2020', estado: 'pendiente'}
    ]

    //ESTADO INICIAL
    const initialState = {
        pedidos : pedidos,
        seleccionado: null,
        pedidoBuscado: null,
        pedidoModal: null
        //errorFormulario: false,
        //proyectoActual: null,
        //mensaje: null
    }

    //DISPATCH PARA EJECUTAR ACCIONES 
    const [state, dispatch] = useReducer(pedidoReducer, initialState);

    //SERIE DE FUNCIONES PARA EL CRUD

    const mostrarSeleccionado = (dato) => {
        dispatch({
            type: MOSTRAR_SELECCIONADO,
            payload: dato
        })
    }
    const buscarPedido = (dato) => {
        console.log(dato);
        var pedidofiltrado = pedidos.filter(p=>(p.id === Number(dato)))
        console.log(pedidofiltrado);
        dispatch({
            type: BUSCAR_PEDIDO,
            payload: pedidofiltrado
        })
    }
    const resetBusqueda = () => {
        
        dispatch({
            type: RESET_BUSCAR,
            payload: pedidos
        })
    }
    const setIdPedidoModal = (dato) => {
        dispatch({
            type: SET_ID_MODAL,
            payload: dato
        })
    }


    return(
        <pedidoContext.Provider
            value={{
                pedidos: state.pedidos,
                seleccionado: state.seleccionado,
                pedidoBuscado: state.pedidoBuscado,
                pedidoModal: state.pedidoModal,
                mostrarSeleccionado,
                buscarPedido,
                resetBusqueda,
                setIdPedidoModal
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )

}
export default PedidoState;