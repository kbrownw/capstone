import Button from "./Button"
import FoodCard from "./FoodCard";
import greekSalad from "../images/greek salad.jpg"

const Specials = () => {
    return (
        <article id="specials">
            <h1>This weeks specials!</h1>
            <Button buttonText="Online Menu" />
            <div id="specials-cards" className="grid-wrapper">
                <FoodCard src={ greekSalad } imgAlt="Greek Salad" title="Greek Salad" price="$12.99" description="This is a generic descriptiong for placeholder" />
            </div>
        </article>
    );
};

export default Specials;