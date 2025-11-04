import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget.jsx";
import "../styles/style.css";

export const NavBar = () => {
    return (
    <header>
        <div className="navbar">
            <Link to="/">Tec Gadgets</Link>
            <nav>
                <Link to="/category/perifericos">Perifericos</Link>
                <Link to="/category/celulares">Celulares</Link>
                <Link to="/category/gabinetes">Gabinetes</Link>
            </nav>
            <CartWidget />
        </div>
    </header>
    )
}