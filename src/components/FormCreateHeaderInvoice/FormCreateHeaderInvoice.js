import { useState } from 'react';
import { useStore } from "~/store";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import * as actions from "~/actions";
import { PostInvoiceItem } from "~/service/InvoiceServices";
function FormCreateHeaderInvoice() {
    const [searchParams] = useSearchParams();
    const addId = searchParams.get('add');

    const navigation = useNavigate();
    const [state, dispatch] = useStore();
    const [invoice, setInvoice] = useState({
        item: '',
        description: ''
    });
    const onHandleChange = (e) => {

        setInvoice((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    };
    const onSubmitCreateHeader = (e) => {
        e.preventDefault();
        const postApi = async () => {
            const result = await PostInvoiceItem(invoice);
            dispatch(actions.AddHeader(result));
            navigation(`/invoice-action?add=${result.id}`, { replace: true });
        }
        postApi();
    }
    let { item, description } = invoice;
    return (
        <>
            <h6>header item</h6>
            <form onSubmit={onSubmitCreateHeader}>
                <input
                    type="text"
                    placeholder="item name"
                    name='item'
                    value={item}
                    onChange={onHandleChange}
                />
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={onHandleChange} />
                <button type="submit">create header</button>
            </form>
        </>
    );
}
export default FormCreateHeaderInvoice;