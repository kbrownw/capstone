import littleLemonTable from "../images/littleLemonTable.jpg";

const BookingHeader = () => {
    return (
        <div id="reserve-wrapper" className="wrapper">
            <article id="reserve-header">
                <section className="header-text">
                    <h1>Reserve a Table</h1>
                    <p>Beat the wait and guarantee you get a table before you head out!</p>
                </section>
                <section>
                    <img src={ littleLemonTable } alt="Restaurant table" />
                </section>
            </article>
        </div>
    );
};

export default BookingHeader;