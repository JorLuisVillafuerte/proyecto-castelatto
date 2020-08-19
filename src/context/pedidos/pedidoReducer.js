import { MOSTRAR_GESTION_PEDIDOS } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_GESTION_PEDIDOS:
            return {
                ...state,
                mostrarGestion: true
            }

        default:
            return state;
    }
}