import { useEffect, memo } from 'react';
import InvoiceItem from "../InvoiceItem/InvoiceItem";
import { useStore } from '~/store/hooks';
import * as action from '~/actions';
import { GetAllInvoice } from '~/service/InvoiceServices';
import { Link } from 'react-router-dom';
function InvoiceTable() {
    const [state, dispatch] = useStore();
    useEffect(
        () => {
            const initData = async () => {
                const result = await GetAllInvoice();
                dispatch(action.GetAll(result))
            }
            initData();
        }, []
    );
    const { data } = state;
    return (
        <>
            <Link to='/invoice-action'>
                <button>Add</button>
            </Link>
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

                        data.map((item, index) => {
                            return < InvoiceItem data={item} key={index} />;
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default memo(InvoiceTable);