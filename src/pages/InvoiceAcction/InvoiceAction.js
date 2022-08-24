import DetailHeaderInvoice from '~/components/DetailHeaderInvoice/DetailHeaderInvoice';
import FormCreateItemInvoice from '~/components/FormCreateItemInvoice/FormCreateItemInvoice';
import FromCreateHeaderInvoice from '~/components/FormCreateHeaderInvoice/FormCreateHeaderInvoice';
import TableDetailInvoiceAction from '~/components/TableDetailInvoiceAction/TableDetailInvoiceAction';
import {useState,useEffect} from 'react';
function InvoiceAction({onChangeDataItem}) {
    const [state, setState] = useState({
        ItemInvoiceEdit:null
    })
    const onChangeData=(id)=>{
        setState(
            {
                ItemInvoiceEdit:id
            }
        )
       
    }
   
    return (
        <>
            <FromCreateHeaderInvoice />
            <DetailHeaderInvoice />
            <FormCreateItemInvoice changeId={state.ItemInvoiceEdit}/>
            <TableDetailInvoiceAction onChangeData={onChangeData}/>
        </>
    );
}
export default InvoiceAction;