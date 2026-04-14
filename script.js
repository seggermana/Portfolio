// Get all buttons that open popups
const popupButtons = document.querySelectorAll('.popup-btn');

// Get all close buttons
const closeButtons = document.querySelectorAll('.close');

// Open the correct popup when a button is clicked
popupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';
    }
  });
});

// Close popup when the close button is clicked
closeButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.popup').style.display = 'none';
  });
});

// Close popup when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    event.target.style.display = 'none';
  }
});