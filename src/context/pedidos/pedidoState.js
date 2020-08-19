import React, { useReducer } from 'react'
import {v4 as uuidv4} from 'uuid';
import pedidoContext from './pedidoContext';
import pedidoReducer from './pedidoReducer';

import {
    MOSTRAR_GESTION_PEDIDOS} from '../../types';

//STATE INICIAL DE PEDIDOS
const PedidoState = props => {

    const pedidos  = []

    //ESTADO INICIAL
    const initialState = {
        pedidos :[],
        mostrarGestion: false,
        //errorFormulario: false,
        //proyectoActual: null,
        //mensaje: null
    }

    //DISPATCH PARA EJECUTAR ACCIONES 
    const [state, dispatch] = useReducer(pedidoReducer, initialState);

    //SERIE DE FUNCIONES PARA EL CRUD

    const mostrarGestionPedidos = () => {
        dispatch({
            type: MOSTRAR_GESTION_PEDIDOS
        })
    }



    return(
        <pedidoContext.Provider
            value={{
                mostrarGestion : state.mostrarGestion,
                mostrarGestionPedidos
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )

}
export default PedidoState;