import { useState } from 'react';
import { useStore } from '~/store';
import * as actions from '~/actions';
function FormCreateItemInvoice() {
    const [state, dispatch] = useStore();
    const [invoiceItem, setInvoiceItem] = useState({
        idInvoice: "",
        itemName: "",
        description: "",
        price: ""
    });
    const onHandleChange = (e) => {
        setInvoiceItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        invoiceItem.idInvoice = state.headerInvoiceAdd.id;
        dispatch(actions.AddItem(invoiceItem));
        console.log(invoiceItem);
    }
    let { itemName, description, price } = invoiceItem;
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input type="text"
                    name='itemName'
                    value={itemName}
                    placeholder="item name"
                    onChange={onHandleChange} />
                <input type="text"
                    name='description'
                    value={description}
                    placeholder="description"
                    onChange={onHandleChange} />
                <input type="text"
                    placeholder="price" name="price"
                    value={price}
                    onChange={onHandleChange} />
                <button type="submit">add to list</button>
            </form>
        </>
    );
}
export default FormCreateItemInvoice;