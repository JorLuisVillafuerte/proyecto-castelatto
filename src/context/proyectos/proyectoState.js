import React, { useReducer } from 'react'
import {v4 as uuidv4} from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import clienteAxios from '../../config/axios';

import {FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO, 
    VALIDAR_FORMULARIO, 
    PROYECTO_ACTUAL, 
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR} from '../../types';



//STATE INICIAL DE CRUD DE PROYECTOS
const ProyectoState = props => {

    const proyectos  = [
        {id: 1, nombre: 'jorge'},
        {id: 2, nombre: 'LUIS'},
        {id: 3, nombre: 'jose'},
        {id:4, nombre: 'MERN'}
    ]

    //ESTADO INICIAL
    const initialState = {
        proyectos :[],
        formulario: false,
        errorFormulario: false,
        proyectoActual: null,
        mensaje: null
    }

    //DISPATCH PARA EJECUTAR ACCIONES 
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //SERIE DE FUNCIONES PARA EL CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //OBTENER PROYECTOS

    const mostrarProyectos = async() => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            console.log(resultado);            
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }
     
    const agregarProyecto = async (proyecto) => {
       try {
           const resultado = await clienteAxios.post('/api/proyectos', proyecto);
           console.log(resultado);
           dispatch({
               type: AGREGAR_PROYECTO,
               payload: resultado.data
           });
       } catch (error) {
        const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
        }
        dispatch({
            type: PROYECTO_ERROR,
            payload: alerta
        })
    }
    }

    //VALIDAR FORM POR ERRORES
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    //SELEECIONA EL PROYECTO QUE EEL USUSARIO DIO CLICK

    const mostrarProyectoActual = async(proyecto) => {
        
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        });
    }

    //ELIMINAR PROYECTO
    const eliminarProyecto = async(proyecto) => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyecto._id}`);            
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyecto
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyectoActual: state.proyectoActual,
                mensaje: state.mensaje,
                mostrarFormulario,
                mostrarProyectos,
                agregarProyecto,
                mostrarError,
                mostrarProyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}
export default ProyectoState;