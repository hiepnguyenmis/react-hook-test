import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <span>System</span>
            <span style={{marginLeft:'2rem',marginRight:'1rem'}}><Link to='/'>Home</Link></span>|
            <span style={{marginLeft:'1rem'}}><Link to='/invoices'>Invoice</Link></span>
        </header>
    );
}

export default Header;