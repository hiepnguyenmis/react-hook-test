import { useState, useEffect } from 'react';
import { useStore } from '~/store';
import * as actions from '~/actions';
function FormCreateItemInvoice({ changeId }) {
    const [state, dispatch] = useStore();
    const [invoiceItem, setInvoiceItem] = useState({
        id: '',
        idInvoice: "",
        itemName: "",
        description: "",
        price: ""
    });
    console.log(changeId); 
    useEffect(() => {
        console.log(changeId);
        if (state.listItemInvoice.length > 0) {
            setInvoiceItem(state.listItemInvoice[changeId]);
        }
    }, [changeId]);
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
                <button type="submit">{changeId==null? "add to list" : "edit item"}</button>
            </form>
        </>
    );
}
export default FormCreateItemInvoice;