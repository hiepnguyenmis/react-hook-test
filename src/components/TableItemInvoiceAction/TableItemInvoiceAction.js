import { memo } from 'react';
import { useStore } from "~/store";
import * as actions from "~/actions";
function TableItemInvoiceAction(props) {
    const [state, dispatch] = useStore();
    let { id, itemName, description, price } = props.itemInvoice;
    let { index } = props;
    console.log(index);
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
                    <button >edit</button>
                    <button onClick={() => onDelete(index)} >del</button>
                </td>
            </tr>
        </>
    );
}
export default TableItemInvoiceAction;