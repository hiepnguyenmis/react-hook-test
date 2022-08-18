import { memo } from 'react';
import { useStore } from "~/store";

function DetailHeaderInvoice() {
    const [state, dispatch] = useStore();

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