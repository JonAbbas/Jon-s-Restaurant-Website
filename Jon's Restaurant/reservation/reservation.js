function handleReservation(event) {
    event.preventDefault(); // Prevent form submission
    
    // Hide the form
    const form = document.querySelector('.reservation form');
    form.style.display = 'none';

    // Show a confirmation message
    const confirmationMessage = document.querySelector('.reservation .confirmation');
    confirmationMessage.style.display = 'block';
}