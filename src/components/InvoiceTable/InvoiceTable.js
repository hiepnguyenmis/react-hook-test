import InvoiceItem from "../InvoiceItem/InvoiceItem";
function InvoiceTable() {
    return (
        <>
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
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                </tbody>
            </table>
        </>
    );
}

export default InvoiceTable;