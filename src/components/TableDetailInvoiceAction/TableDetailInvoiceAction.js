import TableItemInvoiceAction from "../TableItemInvoiceAction/TableItemInvoiceAction";

function TableDetailInvoiceAction() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>item</th>
                        <th>description</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <TableItemInvoiceAction />
                    <TableItemInvoiceAction />
                    <TableItemInvoiceAction />
                </tbody>
            </table>
        </>
    );
}
export default TableDetailInvoiceAction;