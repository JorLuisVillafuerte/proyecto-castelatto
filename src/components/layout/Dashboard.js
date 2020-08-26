import React, { useContext, useEffect } from 'react';  
import Sidebar from './Sidebar';
import Barra from './Barra';
//import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/auth/authContext';

const Proyectos = () => {

    const authContext = useContext(AuthContext); 
    const { usuarioAutenticado } = authContext;
    
    useEffect(() => {
        usuarioAutenticado();
    }, []); 
    
    return ( 
        <div className="contenedor-app">
            <Sidebar
            />
            <div className="seccion-principal">
                <Barra 
                />
            </div>
        </div>
     );
}
 
export default Proyectos;