import tallLogo from "../images/littleLemonLogo-tall.png";

const footerDoormat = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "About",
        url: "#top"
    },
    {
        text: "Menu",
        url: "#top"
    },
    {
        text: "Reservations",
        url: "/book-a-table"
    },
    {
        text: "Order Online",
        url: "#top"
    },
    {
        text: "Login",
        url: "#top"
    }
]

const footerSocials = [
    {
        text: "Facebook",
        url: "http://www.facebook.com"
    },
    {
        text: "Twitter",
        url: "http://www.twitter.com"
    },
    {
        text: "LinkedIn",
        url: "http://www.linkedin.com"
    }
]


const footerMenu = Object.values(footerDoormat).map(({ text, url }) => {
    return (
        <li key={ text }>
            <a href={ url }>{ text }</a>
        </li>
    )
})

const footerSocialLinks = Object.values(footerSocials).map(({ text, url}) => {
    return (
        <li key={ url }>
            <a href={ url }>{ text }</a>
        </li>
    )
})

const Footer = () => {
    return (
        <footer className="wrapper">
            <div className="grid-wrapper">
                <img src={ tallLogo } alt="Little Lemon Logo" />
                <div>
                    <h4>Navigation Doormat</h4>
                    <ul>
                        { footerMenu }
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Little Lemon Rd.</li>
                        <li>(555) 555-8182</li>
                        <li>little.lemon@fakeemail.com</li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <ul>
                        { footerSocialLinks }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;