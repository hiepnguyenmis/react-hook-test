import { memo, useEffect } from 'react';
import { useStore } from "~/store";
import { useSearchParams } from 'react-router-dom';
import * as actions from '~/actions';
import { GetItemById } from '~/service/InvoiceServices';
function DetailHeaderInvoice() {

    const [searchParams] = useSearchParams();
    const params = searchParams.get('add');
    const [state, dispatch] = useStore();
    useEffect(
        () => {
            const GetApi = async () => {
                const result = await GetItemById(params);
                dispatch(actions.GetInvoiceById(result[0]))
            }
            GetApi();
        }, [params]
    );
    let { id, item, description } = state.headerInvoiceAdd;
    return (
        <>
            <h6>Create item for header:
                id:{id},
                name: {item},
                description:{description}</h6>
        </>
    );
}


export default memo(DetailHeaderInvoice);