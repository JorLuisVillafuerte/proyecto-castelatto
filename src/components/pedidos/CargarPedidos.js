import React, { useContext, Fragment } from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
import ReactFileReader from 'react-file-reader';
import Dropzone from '../util/Dropzone';

const CargarPedidos = () => {

    //EXTRAER EL CONTEXT 
    /*const pedidoContext = useContext(PedidoContext); 

    //EVALUAR SI LA FUNCIONALIDAD ESTA SELECCIONADA

    const onchange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }
    const handleFiles = files => {
        console.log('se ejecuta file');
        console.log(files);
        /* var reader = new FileReader();
        reader.onload = function(e) {
      
        alert(reader.result);
        console.log(reader.result);
        }
        reader.readAsText(files[0]); 
    }
    const onsubmit = (e) => {
        e.preventDefault();
        console.log();
       /*  <div className="custom-file" id="cargar-pedidos">
                    
                    <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                    <button className='btn btn-primario btn-block' name="upload">Upload</button>
                    </ReactFileReader>
                    <button type="submit" onSubmit={onsubmit}>
                        enviar 
                    </button>
                </div> 
    }*/
    return ( 
        <Fragment>
            <h1>CARGAR PEDIDOS</h1>
            <Dropzone/>
        </Fragment>
        
     );
}
 
export default CargarPedidos;