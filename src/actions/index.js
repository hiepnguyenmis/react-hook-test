import * as ActionType from "~/constants/ActionType"

export const GetAll = payload => {
    return {
        type: ActionType.GET_DATA_INVOICE_LIST,
        payload
    }
}

export const GetAllDetail = payload => {
    return{
        type: ActionType.GET_DATA_INVOICE_ITEM_LIST,
        payload
    }
}