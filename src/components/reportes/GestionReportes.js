import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const GestionReportes = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar
            />
            <div className="seccion-principal">
                <Barra 
                />
                <main>
                    <div className="formulario">
                        <form
                        className="gestion"    
                        >
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name=""
                                
                                >
                            Accion 1
                            </button>
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name=""
                                >
                            Accion 2
                            </button>
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name=""
                                >
                            Accion 3
                            </button>
                        </form>
                    </div>
                    <div className="contenedor-tareas">
                        <h1>DESDE REPORTES</h1>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default GestionReportes;