import logo from "../images/Logo.svg";


const navMenuItems = [
    {
        text: "HOME",
        url: "#top"
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
        url: "#top"
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
        <a href= {url} key={text}>
            <li>{text}</li>
        </a>
    )
});

function Navbar() {
    return (
        <nav>
            <a href="#" role="img">
                <img src={logo} alt="Chef holding a dish of food" />
            </a>
            <ul>
                {navMenu}
            </ul>
        </nav>
    );
};

export default Navbar;