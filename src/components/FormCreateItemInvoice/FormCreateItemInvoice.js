import { useState } from 'react';
function FormCreateItemInvoice() {
    const [invoiceItem, setInvoiceItem] = useState({
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