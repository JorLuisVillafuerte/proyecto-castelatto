import React, { useContext} from 'react';
import ObservacionContext from '../../context/observaciones/observacionContext';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import VerObservaciones from './VerObservaciones';
import AgregarObservacion from './AgregarObservacion';


const GestionObservaciones = () => {

    const observacionContext = useContext(ObservacionContext); 
    const { mostrarSeleccionado } = observacionContext;

   
    const seleccionado = (e) => {
        mostrarSeleccionado(e.target.name);
    } 

    return ( 
        <div className="contenedor-app">
            <div className="seccion-principal">
                <main>
                    <div className="formulario">
                        <form
                        className="gestion"    
                        >
                        
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name="agregar"
                                onClick={seleccionado}
                                >
                            Agregar Observacion
                            </button>
                            <button
                                type="button" 
                                className="btn btn-primario btn-submit"
                                id="btn-pedidos"
                                name="ver"
                                onClick={seleccionado}
                                >
                            Ver Observaciones
                            </button>
                        </form>
                    </div>
                    <div className="contenedor-tareas">
                        
                        <AgregarObservacion/>
                        <VerObservaciones/>
                        
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default GestionObservaciones;