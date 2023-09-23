const Button = ( { buttonText }) => {
    return (
        <a href="#top" alt="Button">
            <button className="btn-default">{ buttonText }</button>
        </a>
    );
};

export default Button;