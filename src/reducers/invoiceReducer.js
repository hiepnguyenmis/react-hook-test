import {
    GET_DATA_INVOICE_LIST,
    GET_DATA_INVOICE_ITEM_LIST,
    ADD_DATA_INVOICE_HEADER
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
            console.log(action.payload);
            return {
                ...state,
                data: [...action.payload]
            }
        case GET_DATA_INVOICE_ITEM_LIST:
            console.log(action.payload);
            return {
                ...state,
                dataItem: [...action.payload]
            }
        case ADD_DATA_INVOICE_HEADER:
            console.log(action.payload);
            console.log(state.headerInvoiceAdd);
            return {
                ...state,
                data: [...state.data, action.payload],
                headerInvoiceAdd: { ...action.payload }
            }

        default: return state;
    }
}

export { initState };
export default reducer;