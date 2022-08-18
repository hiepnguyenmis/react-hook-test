function TableItemInvoiceAction(props) {
    let { id, itemName, description, price } = props.itemInvoice;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{itemName}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                    <button>edit</button>
                    <button>del</button>
                </td>
            </tr>
        </>
    );
}
export default TableItemInvoiceAction;