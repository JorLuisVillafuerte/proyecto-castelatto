import React from 'react';

const FormEstadoPedido = () => {
    return (
        <div>
            <button
                type="button"
                className="btn btn-primario btn-block btn-custom"
                name=""
                disabled
            >
                Pasar a Produccion
            </button>
            <button
                type="button"
                className="btn btn-primario btn-block btn-custom"
                name=""
            >
                Pasar a Terminado
            </button>
        </div>
    );
}

export default FormEstadoPedido;