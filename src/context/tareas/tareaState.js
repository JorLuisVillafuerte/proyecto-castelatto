import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {v4 as uuidv4} from 'uuid';
import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA} from '../../types';


const TareaState = props => {
    
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir A', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir B', estado: false, proyectoId: 2},
            {id: 3, nombre: 'Elegir Z', estado: false, proyectoId: 3},
            {id: 4, nombre: 'Elegir H', estado: true, proyectoId: 1},
            {id: 5, nombre: 'Elegir L', estado: false, proyectoId: 2},
            {id: 6, nombre: 'Elegir C', estado: false, proyectoId: 3},
            {id: 7, nombre: 'Elegir D', estado: true, proyectoId: 4}
        ],
        tareasPorProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    //CREAR STATE Y DISPATCH
    const [state, dispatch] = useReducer(TareaReducer, initialState);   

    //CREAR LAS FUNCIONES

    //OBTENER TAREAS DE UN PROYECTO
    const mostrarTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId            
        })
    }
    //AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
    const agregarTarea = (tarea) => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasPorProyecto: state.tareasPorProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                mostrarTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;