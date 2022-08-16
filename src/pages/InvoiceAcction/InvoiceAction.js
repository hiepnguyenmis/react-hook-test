import DetailHeaderInvoice from '~/components/DetailHeaderInvoice/DetailHeaderInvoice';
import FormCreateItemInvoice from '~/components/FormCreateItemInvoice/FormCreateItemInvoice';
import FromCreateHeaderInvoice from '~/components/FormCreateHeaderInvoice/FormCreateHeaderInvoice';
import TableDetailInvoiceAction from '~/components/TableDetailInvoiceAction/TableDetailInvoiceAction';

function InvoiceAction() {
    return (
        <>
            <FromCreateHeaderInvoice />
            <DetailHeaderInvoice />
            <FormCreateItemInvoice />
            <TableDetailInvoiceAction />
        </>
    );
}
export default InvoiceAction;