import * as ActionType from "~/constants/ActionType"

export const GetAll = payload => {
    return {
        type: ActionType.GET_DATA_INVOICE_LIST,
        payload
    }
}