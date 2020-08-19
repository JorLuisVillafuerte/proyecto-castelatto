import React, { useEffect, useContext } from 'react';  
import Sidebar from './Sidebar';
import Barra from './Barra';
import CargarPedidos from '../pedidos/CargarPedidos';
//import ListadoTareas from '../tareas/ListadoTareas';
//import AuthContext from '../../context/autenticacion/authContext';

const Proyectos = () => {

    /* const authContext = useContext(AuthContext); 
    const { usuarioAutenticado } = authContext;
    
    useEffect(() => {
        usuarioAutenticado();
    }, []); */
    
    return ( 
        <div className="contenedor-app">
            <Sidebar
            />

            <div className="seccion-principal">
                <Barra 
                />
                <main>
                    <CargarPedidos/>
                    <div className="contenedor-tareas">
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;