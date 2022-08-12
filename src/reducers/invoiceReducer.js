import { 
    GET_DATA_INVOICE_LIST,
    GET_DATA_INVOICE_ITEM_LIST
 } from '~/constants/ActionType';
const initState = {
    data: [],
    dataItem:[]
}

function reducer(state, action) {
    switch (action.type) {
        case GET_DATA_INVOICE_LIST:
            return {
                ...state,
                data: [...action.payload]
            }
        case GET_DATA_INVOICE_ITEM_LIST:
            return{
                ...state,
                dataItem:[...action.payload]
            }
        default: return state;
    }
}

export { initState };
export default reducer;