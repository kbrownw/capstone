import { Fragment } from 'react';
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        rating: 5,
        image: require("../images/reviewUser1.jpg"),
        name: "Neil",
        quote: "Great food!"
    },
    {
        rating: 5,
        image: require("../images/reviewUser2.jpg"),
        name: "Marsha",
        quote: "I love their salads!"
    },
    {
        rating: 5,
        image: require("../images/reviewUser3.jpg"),
        name: "Jamie",
        quote: "Great service and fantastic prices!"
    },
    {
        rating: 4,
        image: require("../images/reviewUser4.jpg"),
        name: "Virgil",
        quote: "The restaurant is beautiful!"
    }
]

const ratingsWithStars = Object.values(reviews).map(({ rating, image, name, quote }) => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(
            <Fragment>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M5.94053 5.22651L7.88867 1.37119C8.13872 0.876269 8.86127 0.876269 9.11132 1.37119L11.0594 5.22651L15.4161 5.84855C15.9751 5.92836 16.1978 6.59956 15.7932 6.98456L12.6413 9.98344L13.3851 14.22C13.4807 14.7641 12.896 15.1789 12.3959 14.922L8.5 12.9206L4.6041 14.922C4.10395 15.1789 3.51932 14.7641 3.61484 14.22L4.35869 9.98344L1.20681 6.98456C0.802129 6.59956 1.02492 5.92836 1.58389 5.84855L5.94053 5.22651Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Fragment>
        );
    }
    return (
        <ReviewCard key={ image } rating={ stars } reviewerImg={ image } reviewerName={ name } quote={ quote }/>
    )
})

const Testimonials = () => {
    return (
        <div className="wrapper">
            <article id="testimonials">
                <h1>Testimonials</h1>
                <div className="grid-wrapper">
                    { ratingsWithStars }
                </div>
            </article>
        </div>
    );
};

export default Testimonials;