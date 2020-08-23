import React, { useContext, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import AlertaContext from '../../context/alertas/alertaContext';

const Dropzone = () => {
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;

    const onDrop = useCallback( (acceptedFiles) =>{
        console.log(acceptedFiles);
        if(acceptedFiles.length > 0){
            console.log('alkerata')
            mostrarAlerta('El archivo se subio correctamente', 'alerta-ok');
        }
    })
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});

    return ( 
        
        <div className="">
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}       
            <div className="lg:flex-1 md:shadow-lg p-5 bg-white rounded-lg py-10">
                 <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
                    <div { ...getRootProps({className:'dropzone w-full py-32'}) } >
                        <input className="h-100" {...getInputProps()}/>
                        {   isDragActive 
                            ? 
                            <p className="text-2xl text-center text-gray-600">Suelta el archivo</p> 
                            :
                            <div className="text-center">
                                <p className="text-2xl text-center text-gray-600">Selecciona un archivo y arrastralo Aqui</p>
                                <button className="btn btn-primario">
                                    Selecciona un archivo para subir
                                </button>
                            </div> 
                        }
                    </div>
                </div>
                <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 mt-5">
                    <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">NOTA: Las extensiones permitidas son .CSV</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Dropzone;