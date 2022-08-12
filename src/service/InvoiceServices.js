import request from '~/utils/request';

export const GetAllInvoice = async () => {
    try {
        const re = await request.get('/invoices');
        return re.data;
    } catch (error) {
        console.error(error);
    }
}

export const GetAllListItem = async (id) => {
    try {
        const re = await request.get(`/InvoiceDetails/${id}`);
        return re.data;
    } catch (error) {
        console.error(error);
    }
}