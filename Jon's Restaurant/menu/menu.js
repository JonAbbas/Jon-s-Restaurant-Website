function handleOrderClick(event) {

    event.target.textContent = 'Selected';

    event.target.disabled = true;
}

window.onload = function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', handleOrderClick);
    });
};