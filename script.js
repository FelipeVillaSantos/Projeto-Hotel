// ===== Controle do Menu Móvel =====
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
    }
});

// ===== Controle do Formulário de Reserva =====
const bookingForm = document.getElementById('booking-form');
const successMessage = document.getElementById('success-message');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    successMessage.classList.remove('hidden');

    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
});