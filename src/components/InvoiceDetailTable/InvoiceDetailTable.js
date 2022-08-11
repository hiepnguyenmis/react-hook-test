import InvoiceDetailItem from "../InvoiceDetailItem/InvoiceDetailItem";
function InvoiceDetailTable() {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>item</th>
                    <th>decription</th>
                    <th>total</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <InvoiceDetailItem />
                <InvoiceDetailItem />
                <InvoiceDetailItem />
            </tbody>
        </table>
    );
}
export default InvoiceDetailTable;