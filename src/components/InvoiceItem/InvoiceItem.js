import { Link } from 'react-router-dom';
function InvoiceItem(itemData) {
    const { data } = itemData;
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.item}</td>
            <td> {data.description}</td>
            <td>{'n/a'}</td>
            <td>
                <Link to={`/invoice-detail/${data.id}`}>
                    <button>Detail</button>
                </Link>
            </td>
        </tr>
    );
}
export default InvoiceItem;