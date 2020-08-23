import { MOSTRAR_SELECCIONADO} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_SELECCIONADO:
            return {
                ...state,
                seleccionado: action.payload
            }
        default:
            return state;
    }
}