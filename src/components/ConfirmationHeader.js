const ConfirmationHeader = () => {
    return (
        <div className="wrapper">
            <header className="header-text" id="confirmation-header">
                <h1>Reservation confirmed!</h1>
                <h2>Thank you for reserving a table at Little Lemon!</h2>
                <p>You should be receiving a message shortly with your table confirmation date and time at the email address you provided.</p>
            </header>
        </div>
    )
}

export default ConfirmationHeader;