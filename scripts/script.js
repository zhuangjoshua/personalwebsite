// Function to toggle high contrast
function toggleHighContrast() { 
    document.body.classList.toggle('high-contrast');
}

// Function to change font size
function changeFontSize(direction) { 
    const body = document.body;
    const currentSize = parseInt(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    const newSize = direction === 'increase' ? currentSize + 2 : currentSize - 2;
    body.style.fontSize = newSize + 'px';
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrast-toggle');
    const increaseFontSize = document.getElementById('increase-font');
    const decreaseFontSize = document.getElementById('decrease-font');
    
    if (contrastToggle) {
        contrastToggle.addEventListener('click', toggleHighContrast);
    }
    if (increaseFontSize) {
        increaseFontSize.addEventListener('click', () => changeFontSize('increase'));
    }
    if (decreaseFontSize) {
        decreaseFontSize.addEventListener('click', () => changeFontSize('decrease'));
    }
});