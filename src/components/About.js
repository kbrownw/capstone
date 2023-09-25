import marioAndAdrian from "../images/Mario and Adrian A.jpg";
import restaurant from "../images/restaurant.jpg";

const About = () => {
    return (
        <article id="about">
            <section id="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Vivamus non ex a purus egestas tincidunt. Vivamus in nunc quis augue laoreet convallis. Aliquam vulputate tincidunt erat ac molestie. Phasellus accumsan libero sit amet neque pellentesque cursus. Fusce venenatis euismod sagittis. Vestibulum non massa id purus luctus venenatis eget vel justo.</p>
            </section>
            <section id="about-images">
                <img id="about-first-img" src={ marioAndAdrian } alt="Mario and Adrian" />
                <img id="about-second-img" src={ restaurant } alt="Restaurant" />
            </section>
        </article>
    );
};

export default About;