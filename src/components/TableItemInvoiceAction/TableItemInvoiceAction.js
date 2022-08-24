import { memo } from 'react';
import { useStore } from "~/store";
import * as actions from "~/actions";
function TableItemInvoiceAction({itemInvoice,onChangeData,index}) {
    const [state, dispatch] = useStore();
    let { id, itemName, description, price } = itemInvoice;
    const onDelete = (id) => {
        dispatch(actions.DelInvoiceInList(id));
    }
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{itemName}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                    <button onClick={()=>onChangeData(index)}>edit</button>
                    <button onClick={()=>onDelete(index)} >del</button>
                </td>
            </tr>
        </>
    );
}
export default TableItemInvoiceAction;