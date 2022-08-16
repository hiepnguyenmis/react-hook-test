function FormCreateHeaderInvoice() {
    return (
        <>
            <h6>header item</h6>
            <form>
                <input type="text" placeholder="item name" />
                <input type="text" placeholder="description" />
                <button>create header</button>
            </form>
        </>
    );
}
export default FormCreateHeaderInvoice;