import React, { Fragment, useContext } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import ObservacionContext from '../../context/observaciones/observacionContext';
import Observacion from './Observacion';

const VerObservaciones = () => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const observacionContext = useContext(ObservacionContext);
    const { seleccionado, observaciones} = observacionContext;

    if(seleccionado !== 'ver') return null;
    return ( 
        <Fragment>
        {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
        <h1>VER OBSERVACIONES</h1>
        <form className="buscador">
            <input 
                type="text" 
                className="input-text-buscador"
                placeholder="Ingrese ID de la observacion a buscar"
                id="contenido"
              
            />
            <button
                type="submit"
                className="btn btn-primario btn-submit btn-buscador"
                //onClick={ejecutarBuscar}
            >Buscar 
            </button>
            <button
                type="button"
                className="btn btn-primario btn-submit btn-buscador"
                //onClick={ejecutarReset}
            >Resetear 
            </button>
        </form>

            {(observaciones.length===0) ? 
                <li>No se encontraron observaciones</li>
                :
                observaciones.map(p => (
                <Observacion
                    
                />
            ))}

    
        </Fragment>
     );
}
 
export default VerObservaciones;