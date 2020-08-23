import React, { createContext } from 'react';

export const GestionContext = createContext();

const GestionProvider = (props) => {


    const mostrarGestionSeleccionada = () =>{
        
    } 

    return ( 
        <GestionContext.Provider
            value={{
                mostrarGestionSeleccionada
            }}
        >
            {props.children}
        </GestionContext.Provider>
    );
}
 
export default GestionProvider;