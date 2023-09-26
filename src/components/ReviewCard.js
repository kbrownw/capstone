

const ReviewCard = ({ rating, reviewerImg, reviewerName, quote }) => {
    return (
        <section className="review-card">
            <h4 className="rating-text">Rating</h4>
            <div className="rating-stars">
                { rating.map(star => star) }
            </div>
            <img src={ reviewerImg } alt={ reviewerName } />
            <h4 className="reviewer-name">{ reviewerName }</h4>
            <p>"{ quote }"</p>
        </section>
    );
};

export default ReviewCard;