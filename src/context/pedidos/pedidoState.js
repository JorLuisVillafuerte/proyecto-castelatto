import React, { useReducer } from 'react'
//import {v4 as uuidv4} from 'uuid';
import pedidoContext from './pedidoContext';
import pedidoReducer from './pedidoReducer';

import {
    MOSTRAR_SELECCIONADO,
    BUSCAR_PEDIDO,
    RESET_BUSCAR,
    SET_ID_MODAL,
    OBTENER_PEDIDOS,
    ERROR_PEDIDOS,
    EDITAR_PEDIDO,
    ELIMINAR_PEDIDO
} from '../../types';
import clienteAxios from '../../config/axios';

//STATE INICIAL DE PEDIDOS
const PedidoState = props => {


    //ESTADO INICIAL
    const initialState = {
        pedidos : [],
        seleccionado: null,
        pedidoBuscado: null,
        pedidoModal: null,
        msg: null,
        //errorFormulario: false,
        //proyectoActual: null,
        //mensaje: null
    }

    //DISPATCH PARA EJECUTAR ACCIONES 
    const [state, dispatch] = useReducer(pedidoReducer, initialState);

    //SERIE DE FUNCIONES PARA EL CRUD

    const obtenerPedidos = async() => {
        try {
            const respuesta = await clienteAxios.get('pedidos/');
            console.log(respuesta.data);
            dispatch({
                type: OBTENER_PEDIDOS,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: 'Ocurrio un error al cargar los registros.',
                categoria: 'alerta-error'
            }
            dispatch({
                type: ERROR_PEDIDOS,
                payload: alerta
            });
        }

    } 
    const editarPedido = async(pedido) => {
        try {
            const respuesta = await clienteAxios.post('pedidos/', pedido);
            console.log(respuesta.data);
            dispatch({
                type: EDITAR_PEDIDO,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: 'Ocurrio un error al editar el registro.',
                categoria: 'alerta-error'
            }
            dispatch({
                type: ERROR_PEDIDOS,
                payload: alerta
            });
        }

    } 
    const eliminarPedido = async(pedido) => {
        try {
            const respuesta = await clienteAxios.delete(`pedidos/id/${pedido.idpedido}`);
            console.log(respuesta.data);
            dispatch({
                type: ELIMINAR_PEDIDO,
                payload: pedido.idpedido
            });
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: 'Ocurrio un error al eliminar el registro.',
                categoria: 'alerta-error'
            }
            dispatch({
                type: ERROR_PEDIDOS,
                payload: alerta
            });
        }

    } 


    const mostrarSeleccionado = (dato) => {
        dispatch({
            type: MOSTRAR_SELECCIONADO,
            payload: dato
        })
    }
    const buscarPedido = (dato) => {
        /*console.log(dato);
        var pedidofiltrado = pedidos.filter(p=>(p.id === Number(dato)))
        console.log(pedidofiltrado);
        dispatch({
            type: BUSCAR_PEDIDO,
            payload: pedidofiltrado
        })*/
    }
    const resetBusqueda = () => {
        /*  
        dispatch({
            type: RESET_BUSCAR,
            payload: pedidos
        })*/
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
                msg: state.msg,
                mostrarSeleccionado,
                buscarPedido,
                resetBusqueda,
                setIdPedidoModal,
                obtenerPedidos,
                editarPedido,
                eliminarPedido
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )

}
export default PedidoState;