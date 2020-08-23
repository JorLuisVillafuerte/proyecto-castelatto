import React, { useContext } from 'react';  
import AlertaContext from '../../context/alertas/alertaContext';
import ObservacionContext from '../../context/observaciones/observacionContext';

const AgregarObservacion = () => {
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const observacionContext = useContext(ObservacionContext);
    const { seleccionado, observaciones} = observacionContext;

    if(seleccionado !== 'agregar') return null;
    return (

        <div className="form-observacion">
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <div className="contenedor-observacion sombra-dark">
                <h1>Formulario Agregar Observacion</h1>
                <form
                    //onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="numeropedido">Numero de pedido</label>
                        <select 
                            name="pedido"
                            //value={cargo}
                            //onChange={onChange}
                        >
                            <option value="">--Selecciona--</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="codigoproducto">Codigo de producto</label>
                        <select 
                            name="producto"
                            //value={cargo}
                            //onChange={onChange}
                        >
                            <option value="">--Selecciona--</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="codigoproducto">Motivo</label>
                        <select 
                            name="producto"
                            //value={cargo}
                            //onChange={onChange}
                        >
                            <option value="">--Selecciona--</option>
                            <option value="fisura">Fisura</option>
                            <option value="desgranado">Desgranado</option>
                            <option value="descolorado">Descolorado</option>
                            <option value="faltante">Faltante</option>
                        </select>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="cantidad">Cantidad de piezas del producto</label>
                        <input 
                            type="text" 
                            name="cantidad" 
                            id="cantidad"
                            disabled
                            //value={password}
                            //onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="cantidad-falla">Cantidad de piezas a registrar</label>
                        <input 
                            type="text" 
                            name="cantidad" 
                            id="cantidad"
                            placeholder="Ingrese cantidad de piezas a registrar"
                            //value={password}
                            //onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            value="Agregar Observacion"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AgregarObservacion;