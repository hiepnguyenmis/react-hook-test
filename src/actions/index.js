import * as ActionType from "~/constants/ActionType"

export const GetAll = payload => {
    return {
        type: ActionType.GET_DATA_INVOICE_LIST,
        payload
    }
}

export const GetAllDetail = payload => {
    return {
        type: ActionType.GET_DATA_INVOICE_ITEM_LIST,
        payload
    }
}

export const AddHeader = payload => {
    return {
        type: ActionType.ADD_DATA_INVOICE_HEADER,
        payload
    }
}

export const AddItem = payload => {
    return {
        type: ActionType.ADD_DATA_INVOICE_ITEM,
        payload
    }
}
export const GetDataHeaderIvoices=payload => {
    return {
        type:ActionType.GET_HEADER_THRU_PARAM_URL,
        payload
    }
}