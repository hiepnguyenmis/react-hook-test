import InvoiceDetailItem from "~/components/InvoiceDetailItem/InvoiceDetailItem";

function InvoiceDetail() {
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
                    <InvoiceDetailItem/>
                    <InvoiceDetailItem/>
                    <InvoiceDetailItem/>
                </tbody>
            </table>
        </>
    );
}
export default InvoiceDetail;