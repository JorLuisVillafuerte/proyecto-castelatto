import React, { useReducer } from 'react';
import { REGISTRO_ERROR, REGISTRO_EXITOSO, LOGIN_ERROR, CERRAR_SESION,LOGIN_EXITOSO, OBTENER_USUARIO } from '../../types';
import authContext from './authContext';
import authReducer from './authReducer';
import jwt from 'jsonwebtoken';
import clienteAxios from '../../config/axios';
/* import clienteAxios from '../../config/axios';
import authToken from '../../config/authToken';
 */
const AuthState = (props) => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        msg: null,
        cargando: true
    }
    const [state, dispatch] = useReducer(authReducer, initialState);

    //FUNCIONES
    //INICIAR SESION
    const iniciarSesion = async datos => {
        try {
            
            const respuesta = await clienteAxios.post('/usuarios/validarUsuario', datos);
            console.log(respuesta);
            console.log(respuesta.data.token);
            dispatch({
                    type: LOGIN_EXITOSO,
                    payload:respuesta.data.token
            });
            usuarioAutenticado(); 
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }
    //CERRAR SESION
    const cerrarSesion = ()=>{
        dispatch({
            type: CERRAR_SESION    
        })
    }
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/usuarios/registrarUsuario', datos);
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.token
            })  

            //OBTENER USUARIO
            usuarioAutenticado();

        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    } 
    
    const usuarioAutenticado = async () => {
        const token = {
            token : localStorage.getItem('token')
        };
        //FUNCION PARA ENVIAR EL TOKEN POR HEADERS
        //authToken(token);
       
        try {
            const respuesta = await clienteAxios.post('/usuarios/autenticarUsuario',token);
            console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            });          
        } catch (error) {
            console.log(error)
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            }); 
        }
        
    }

    return ( 
        <authContext.Provider
        value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                registrarUsuario,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;