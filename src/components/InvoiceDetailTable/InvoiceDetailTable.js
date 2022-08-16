import { useEffect, useReducer, memo } from 'react';
import { useParams } from 'react-router-dom'
import InvoiceDetailItem from "../InvoiceDetailItem/InvoiceDetailItem";
import { GetAllListItem } from '~/service/InvoiceServices';
import { useStore } from '~/store/hooks';
import * as  actions from '~/actions'
function InvoiceDetailTable() {

    const [state, dispatch] = useStore();
    let { idInvoice } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const result = await GetAllListItem(idInvoice);
            dispatch(actions.GetAllDetail(result));
        }
        fetchData();
    }, []);
    const { dataItem } = state;
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
                {
                    dataItem.map(
                        (item, index) => {

                            return <InvoiceDetailItem dataItem={item} key={index} />
                        }
                    )

                }

            </tbody>
        </table>
    );
}
export default memo(InvoiceDetailTable);