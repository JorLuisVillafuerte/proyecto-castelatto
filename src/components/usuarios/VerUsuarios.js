import React, { Fragment, useContext, useEffect } from 'react';
import TablaGestion from '../tablas/TablaGestion';
import UsuarioContext from '../../context/usuarios/usuarioContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { columnasUsuarios } from '../util/Columnas';

const VerUsuarios = () => {
    
    const usuarioContext = useContext(UsuarioContext); 
    const {obtenerUsuarios,usuarios,eliminarUsuario,editarUsuario} = usuarioContext;
    const alertaContext = useContext(AlertaContext);
    const {alerta} = alertaContext;
    
    useEffect(() => {
        obtenerUsuarios();
        console.log(usuarios);
    },[]);


    const handleRowUpdate = (newData, oldData, resolve, reject) => {
        editarUsuario(newData);
        setTimeout(() => {
            resolve()
        }, 3000);
        
    }
    const handleRowDelete = async (oldData, resolve, reject) => {
        eliminarUsuario(oldData);
        setTimeout(() => {
            resolve()
        }, 3000);
    }
    if(usuarios.length === 0){
        return null;
    }
    return ( 
        <Fragment>
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <h1>VER USUARIOS</h1>
            
                <div id="custom-font">
                    <TablaGestion
                        columns={columnasUsuarios}
                        data={usuarios}
                        handleRowUpdate={handleRowUpdate}
                        handleRowDelete={handleRowDelete}
                        />
                </div>        
        </Fragment>
     );
}
 
export default VerUsuarios;