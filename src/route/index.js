import Home from "../pages/Home/Home";
import InvoiceAction from "../pages/InvoiceAcction/InvoiceAction";
import InvoiceDetail from "../pages/InvoiceDetail/InvoiceDetail";
import Invoices from "../pages/Invoices/Invoices";
import NotFound from "../pages/NotFound/NotFound";

const publicRouter = [
    {path:'/', component: Home},
    {path:'/invoices', component: Invoices},
    {path:'/invoice-action', component: InvoiceAction},
    {path:'/invoice-detail/:idInvoice', component: InvoiceDetail},
    {path:'*', component: NotFound}
];
const privateRouter = [

];

export {publicRouter, privateRouter};