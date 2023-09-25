const FoodCard = ({ src, imgAlt, title, price, description }) => {
    return (
        <section className="food-card">
            <img src={ src } alt= { imgAlt }/>
            <h4 className="foodcard-title">{ title }</h4>
            <h4 className="foodcard-price grid-justify-right">{ price }</h4>
            <p>{ description }</p>
            <h4 className="foodcard-order">Order Online</h4>
            <a href="#top" className="grid-justify-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 33 23" fill="none">
                    <path d="M31.9979 12.698C32.5837 12.1122 32.5837 11.1625 31.9979 10.5767L22.452 1.03073C21.8662 0.444941 20.9164 0.444941 20.3307 1.03073C19.7449 1.61651 19.7449 2.56626 20.3307 3.15205L28.8159 11.6373L20.3307 20.1226C19.7449 20.7084 19.7449 21.6581 20.3307 22.2439C20.9164 22.8297 21.8662 22.8297 22.452 22.2439L31.9979 12.698ZM0.937256 13.1373H30.9373V10.1373H0.937256V13.1373Z" fill="black"/>
                </svg>
            </a>
        </section>
    );
};

export default FoodCard;