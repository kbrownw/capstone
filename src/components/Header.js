import Button from "./Button";
import restaurantFood from "../images/restaurantfood.jpg";

function Header() {
    return (
        <div className="wrapper">
            <header>
                <div id="headerText">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button buttonText="Reserve a Table" />
                </div>
                <div id="header-img">
                    <img src={ restaurantFood } alt="Restaurant food"/>
                </div>
            </header>
        </div>
    );
};

export default Header;