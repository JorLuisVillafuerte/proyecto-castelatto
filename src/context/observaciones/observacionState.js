import React, { useReducer } from 'react'
//import {v4 as uuidv4} from 'uuid';
import observacionContext from './observacionContext';
import observacionReducer from './observacionReducer';

import {
    MOSTRAR_SELECCIONADO
} from '../../types';

//STATE INICIAL DE Observacion
const ObservacionState = props => {

    const observaciones = [{
        id_obs: 1,
        pedidoAsociado: 2,
        numero: 156,
        descripcion: 'Aca va alguan descripcion',
        motivo: '',
        codigoProducto: '',
        cantidadPiezas: 10,
        cantidadPiezasFalla: 5,
    },{
        id_obs: 1,
        pedidoAsociado: 2,
        numero: 156,
        descripcion: 'Aca va alguan descripcion',
        motivo: '',
        codigoProducto: '',
        cantidadPiezas: 10,
        cantidadPiezasFalla: 5,
    }
    ]

    //ESTADO INICIAL
    const initialState = {
        observaciones : observaciones,
        seleccionado: null,
        //errorFormulario: false,
        //proyectoActual: null,
        //mensaje: null
    }

    //DISPATCH PARA EJECUTAR ACCIONES 
    const [state, dispatch] = useReducer(observacionReducer, initialState);

    //SERIE DE FUNCIONES PARA EL CRUD


    const mostrarSeleccionado = (dato) => {
        dispatch({
            type: MOSTRAR_SELECCIONADO,
            payload: dato
        })
    }
    
    return(
        <observacionContext.Provider
            value={{
               observaciones: state.observaciones,
               seleccionado: state.seleccionado,
               mostrarSeleccionado
            }}
        >
            {props.children}
        </observacionContext.Provider>
    )

}
export default ObservacionState;