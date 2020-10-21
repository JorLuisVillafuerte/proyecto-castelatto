import { ownerDocument } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';  
import AlertaContext from '../../context/alertas/alertaContext';
import ObservacionContext from '../../context/observaciones/observacionContext';
import PedidoContext from '../../context/pedidos/pedidoContext';

const AgregarObservacion = () => {
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;
    const pedidoContext = useContext(PedidoContext);
    const {pedidos,obtenerPedidos,obtenerPedidosDetallePorId} = pedidoContext;
    const observacionContext = useContext(ObservacionContext);
    const { agregarObservacion } = observacionContext;

    useEffect(() => {
        obtenerPedidos();
    }, []);
    const [observacion, setObservacion] = useState({
        codObservacion: '',
        idpedido: '',
        codPedido: '',
        idproducto: '',
        motivo: '',
        cantidadPiezas: ''
    });
    const {idpedido, idproducto,codPedido, motivo, cantidadPiezas} = observacion;
    
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

    const onblur = async(e) => {
        if(codPedido.trim() !== ''){
            let ped = await pedidos.find(pedido => pedido.codPedido === codPedido);
            if(ped){
                const pedidoCompleto = await obtenerPedidosDetallePorId(ped.idpedido);
                console.log(pedidoCompleto);
                setPedidoSeleccionado(pedidoCompleto.data);
                setObservacion({ 
                    ...observacion, 
                    idpedido: ped.idpedido 
                });
            }else{
                setPedidoSeleccionado(null);
                mostrarAlerta('No existe o no se encontro un pedido con el codigo proporcionado', 'alerta-error');
            }     
        }
        
    }
    const onchange = (e) => { 
        setObservacion({ 
            ...observacion, 
            [e.target.name]: e.target.value 
        }); 
    }
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(observacion);
        const cantidadPiezasMax = pedidoSeleccionado.filter(ped => ped.idproducto.idproducto == observacion.idproducto);
        console.log(cantidadPiezasMax[0]);
        if(cantidadPiezas < 0 ){
            mostrarAlerta('La cantidad de piezas a registrar debe ser mayor a cero','alerta-error');
            return; 
        }
        if(cantidadPiezasMax.length > 0 && cantidadPiezasMax[0].cantidad < observacion.cantidadPiezas){
            mostrarAlerta('La cantidad de piezas es mayor a la del pedido: '+cantidadPiezasMax[0].cantidad, 'alerta-error');
            return; 
        }
        agregarObservacion(observacion);
        setObservacion({
            codObservacion: '',
            idpedido: '',
            codPedido: '',
            idproducto: '',
            motivo: '',
            cantidadPiezas: ''
        });
        setPedidoSeleccionado(null);
        mostrarAlerta('Se agrego correctamente la observacion', 'alerta-ok');      
    }
 
    return (
        <div className="form-observacion">
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}
            <div className="contenedor-observacion sombra-dark">
                <h1>Formulario Agregar Observacion</h1>
                <form
                    onSubmit={onsubmit}
                >
                    <div className="campo-form" >
                        <label id="label-form-obs" htmlFor="numeropedido">Numero de pedido</label>
                        <input type="text" 
                            name="codPedido" 
                            list="listapedidos"
                            value={codPedido}
                            onChange={onchange}
                            onBlur={onblur}
                            
                        />
                        <datalist id="listapedidos">
                            {(codPedido)?( null ):(
                                pedidos.map((ped, key) => {
                                    return <option key={key} value={ped.codPedido}/>
                                })
                            )}
                        </datalist>
                    </div>
                    {(pedidoSeleccionado === null) ? (null):(
                        <>
                        <div className="campo-form">
                            <label id="label-form-obs" htmlFor="">Codigo de producto</label>
                            <select 
                                name="idproducto"
                                value={idproducto}
                                onChange={onchange}
                                required
                            >
                                <option value="">--Selecciona--</option>
                                {pedidoSeleccionado.map((prod, key) => {
                                    console.log(prod);
                                    return <option key={key} value={prod.idproducto.idproducto}>{prod.idproducto.codProducto}</option>
                                })}
                            </select>
                        </div>
                        <div className="campo-form">
                            <label id="label-form-obs" htmlFor="">Motivo</label>
                            <select 
                                name="motivo"
                                value={motivo}
                                onChange={onchange}
                                required
                            >
                                <option value="">--Selecciona--</option>
                                <option value="fisura">Fisura</option>
                                <option value="desgranado">Desgranado</option>
                                <option value="descolorado">Descolorado</option>
                                <option value="faltante">Faltante</option>
                            </select>
                        </div>
                        <div className="campo-form">
                            <label id="label-form-obs" htmlFor="cantidadPiezas">Cantidad de piezas a registrar</label>
                            <input 
                                type="number" 
                                name="cantidadPiezas" 
                                id="cantidadPiezas"
                                placeholder="Ingrese cantidad de piezas a registrar"
                                value={cantidadPiezas}
                                onChange={onchange}
                            />
                        </div>
                        <div className="campo-form">
                            <input 
                                type="submit" 
                                value="Agregar Observacion"
                                className="btn btn-primario btn-block"
                            />
                        </div>
                        </>
                    )}
                </form>
            </div>
        </div>
     );
}
 
export default AgregarObservacion;