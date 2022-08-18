import {
    GET_DATA_INVOICE_LIST,
    GET_DATA_INVOICE_ITEM_LIST,
    ADD_DATA_INVOICE_HEADER,
    ADD_DATA_INVOICE_ITEM
} from '~/constants/ActionType';
const initState = {
    data: [],
    dataItem: [],
    headerInvoiceAdd: {},
    listItemInvoice: []
}

function reducer(state, action) {
    switch (action.type) {
        case GET_DATA_INVOICE_LIST:
            return {
                ...state,
                data: [...action.payload]
            }
        case GET_DATA_INVOICE_ITEM_LIST:
            return {
                ...state,
                dataItem: [...action.payload]
            }
        case ADD_DATA_INVOICE_HEADER:
            return {
                ...state,
                data: [...state.data, action.payload]
                
            }
        case ADD_DATA_INVOICE_ITEM:
            return {
                ...state,
                listItemInvoice: [...state.listItemInvoice, action.payload]
            }
        default: return state;
    }
}

export { initState };
export default reducer;