import Button from "./Button"
import FoodCard from "./FoodCard";

const foodCardContent = [
    {
        title: "Greek Salad",
        price: "$12.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: require("../images/greek salad.jpg"),
        imgAlt: "Greek Salad"
    },
    {
        title: "Bruschetta",
        price: "$8.99",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        src: require("../images/bruschetta.jpeg"),
        imgAlt: "Bruschetta"
    },
    {
        title: "Lemon Dessert",
        price: "$5.99",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        src: require("../images/lemon dessert.jpg"),
        imgAlt: "Lemon Dessert"
    }
]

const foodCardMap = Object.values(foodCardContent).map(({ title, price, description, src, imgAlt}) => {
    return (
        <FoodCard key={ title } src={ src } imgAlt={ imgAlt } title={ title } price={ price } description={ description } />
    )
});

const Specials = () => {
    return (
        <article id="specials">
            <h1>This weeks specials!</h1>
            <Button buttonText="Online Menu" />
            <div id="specials-cards" className="grid-wrapper">
                { foodCardMap }
            </div>
        </article>
    );
};

export default Specials;