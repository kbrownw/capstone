import { Link } from "react-router-dom";

const Button = ( { url, buttonText }) => {
    return (
        <Link to={ url } alt="Button">
            <button className="btn-default">{ buttonText }</button>
        </Link>
    );
};

export default Button;