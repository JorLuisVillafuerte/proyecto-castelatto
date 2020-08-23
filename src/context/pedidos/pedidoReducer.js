import {MOSTRAR_SELECCIONADO, BUSCAR_PEDIDO, RESET_BUSCAR, SET_ID_MODAL} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_SELECCIONADO:
            return {
                ...state,
                mostrarGestion: true,
                seleccionado: action.payload
            }
        case BUSCAR_PEDIDO:
            console.log(action.payload);
            return {
                ...state,
                pedidos: action.payload
            }
        case RESET_BUSCAR:
            return {
                ...state,
                pedidos: action.payload
            }
        case SET_ID_MODAL:
            console.log(action.payload);
            return {
                ...state,
                pedidoModal: action.payload
            }

        default:
            return state;
    }
}