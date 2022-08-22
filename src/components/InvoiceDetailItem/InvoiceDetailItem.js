import { memo } from "react";
import { useStore } from "~/store";
import * as action from "~/actions";

function InvoiceDetailItem(props) {
    let { id, itemName, description, price } = props.dataItem;
    return (
        <tr>
            <td>{id}</td>
            <td>{itemName}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>
                <button >Edit</button>|
                <button >Delete</button>
            </td>
        </tr>
    );
}
export default memo(InvoiceDetailItem);