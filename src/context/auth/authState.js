import React, { useReducer } from 'react';
import { REGISTRO_ERROR, REGISTRO_EXITOSO, LOGIN_ERROR, CERRAR_SESION,LOGIN_EXITOSO } from '../../types';
import authContext from './authContext';
import authReducer from './authReducer';
import jwt from 'jsonwebtoken';
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

    const usuarios = [
        { id: 1, nombre: 'Jorge', dni: '123456', email: 'correo@correo.com', password: '123456' },
        { id: 2, nombre: 'Jorge', dni: '123', email: 'correo@correo.com', password: '123456' },
        { id: 3, nombre: 'Jorge', dni: '111', email: 'correo@correo.com', password: '123456' }
    ]

    //FUNCIONES
    //INICIAR SESION
    const iniciarSesion = async datos => {
        try {
            const {dni, password} = datos;
            let usuario = usuarios.filter(user => dni === user.dni);
            //VALIDAR INICIO SESION
            if(usuario.length === 0){
                console.log('usuario no existe');
                const alerta = {
                    msg: 'DNI o contraseña incorrecto',
                    categoria: 'alerta-error'
                }
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                });
                return;
            }
            if(usuario[0].password !== password){
                console.log('Contraseña incorrecta');
                const alerta = {
                    msg: 'DNI o contraseña incorrecto',
                    categoria: 'alerta-error'
                }
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                });
                return;
            }
            //SI TODO ES CORRECTO => CREAR Y FIRMAR EL JWT        
            const payload = { 
                usuario: { id: usuario[0].id } 
            };        
            //FIRMAR EL TOKEN        
            jwt.sign(payload, 'PALABRA_SECRETA', 
                { expiresIn: 3600, }, 
                (error, token) => {
                    if (error) throw error;
                    //MENSAJE DE CONFIRMACION
                    console.log(token); 
                    dispatch({ 
                        type: LOGIN_EXITOSO, 
                        payload: token 
                    });
            });
            //usuarioAutenticado();
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
    /* const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            //OBTENER USUARIO
            usuarioAutenticado();

        } catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    } */
    
    /* const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        //FUNCION PARA ENVIAR EL TOKEN POR HEADERS
        authToken(token);
            
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
            console.log(respuesta);             
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
        
    } */
    return ( 
        <authContext.Provider
        value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                //registrarUsuario,
                //usuarioAutenticado,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;