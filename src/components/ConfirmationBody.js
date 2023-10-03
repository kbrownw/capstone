import Button from "./Button";

const ConfirmationBody = () => {
    return (
        <article id="confirmation-body">
            <h3>In the meantime...</h3>
            <div className="flex-col">
                <div className="grid-row">
                    <h4>Check out our online menu in preparation for your visit!</h4>
                    <Button url="#top" buttonText="Online Menu" />
                </div>
                <div className="grid-row">
                    <h4>Try orderering your favorite meal to eat in the comfort of home using our online delivery option!</h4>
                    <Button url="#top" buttonText="Delivery" />
                </div>
                <Button url="/" buttonText="Homepage" />
            </div>
        </article>
    )
}

export default ConfirmationBody;