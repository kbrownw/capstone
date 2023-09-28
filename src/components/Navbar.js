import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";


const navMenuItems = [
    {
        text: "HOME",
        url: "/"
    },
    {
        text: "ABOUT",
        url: "#top"
    },
    {
        text: "MENU",
        url: "#top"
    },
    {
        text: "RESERVATIONS",
        url: "/book-a-table"
    },
    {
        text: "ORDER ONLINE",
        url: "#top"
    },
    {
        text: "LOGIN",
        url: "#top"
    }
]

const navMenu = Object.values(navMenuItems).map(({text, url}) => {
    return (
        <Link to={ url } key={ text }>
            <li>{ text }</li>
        </Link>
    )
});

function Navbar() {
    return (
        <nav>
            <Link to="/" role="img">
                <img src={logo} alt="Chef holding a dish of food" />
            </Link>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button"></div>
            </label>
            <ul className="menu">
                {navMenu}
            </ul>
        </nav>
    );
};

export default Navbar;