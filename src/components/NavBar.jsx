import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget.jsx";
import "../styles/style.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Tec Gadgets</h1></Link>
            <div className="nav-links">
                <Link to="/category/perifericos">Perifericos</Link>
                <Link to="/category/celulares">Celulares</Link>
                <Link to="/category/gabinetes">Gabinetes</Link>
            </div>
            <CartWidget />
        </nav>
    )
}