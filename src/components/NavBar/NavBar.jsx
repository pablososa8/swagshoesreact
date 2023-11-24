import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
return (
    <nav className="d-flex justify-content-around p-4">
        <h4>Swag Shoes</h4>
    <div>
        <Link to="/">
        <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/category/calzados">
        <button className="btn btn-outline-dark mx-2">Shoes</button>
        </Link>
        <Link to="/category/ropa">
        <button className="btn btn-outline-dark mx-2">Others</button>
        </Link>
    </div>
    <Link to="/cart">
    <CartWidget />
    </Link>
    </nav> 
    );
};