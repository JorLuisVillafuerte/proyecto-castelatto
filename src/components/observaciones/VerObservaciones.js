import React, { Fragment, useContext, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import { columnasObservaciones } from '../util/Columnas';
import ObservacionContext from '../../context/observaciones/observacionContext';
import TablaGestion from '../tablas/TablaGestion';

const VerObservaciones = () => {

    const alertaContext = useContext(AlertaContext);
    const {alerta} = alertaContext;

    const observacionContext = useContext(ObservacionContext);
    const { observaciones, obtenerObservaciones, editarObservacion, eliminarObservacion} = observacionContext;

    useEffect(() => {
        obtenerObservaciones();
    },[]);


    const handleRowUpdate = (newData, oldData, resolve, reject) => {
        editarObservacion(newData);
        setTimeout(() => {
            resolve()
        }, 3000);
        
    }
    const handleRowDelete = async (oldData, resolve, reject) => {
        eliminarObservacion(oldData);
        setTimeout(() => {
            resolve()
        }, 3000);
    }
    if(observaciones.length === 0){
        return null;
    }
    return ( 
        <Fragment>
        {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
        <h1>VER OBSERVACIONES</h1>
        <div id="custom-font">
            <TablaGestion
                columns={columnasObservaciones}
                data={observaciones}
                handleRowUpdate={handleRowUpdate}
                handleRowDelete={handleRowDelete}
                />
        </div>  
        </Fragment>
     );
}
 
export default VerObservaciones;