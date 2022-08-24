import { useStore } from "~/store";
import TableItemInvoiceAction from "../TableItemInvoiceAction/TableItemInvoiceAction";
function TableDetailInvoiceAction({onChangeData}) {
    const [state, dispatch] = useStore();
    let { listItemInvoice } = state;
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
                    {
                        listItemInvoice.map((item, index) => {
                            return <TableItemInvoiceAction onChangeData={onChangeData}  index={index} key={index} itemInvoice={item} />
                        })
                    }

                </tbody>
            </table>
            {
                listItemInvoice.length > 0 ? <div><button>Save</button>|<button>Clear</button></div> : null
            }
        </>
    );
}
export default TableDetailInvoiceAction;