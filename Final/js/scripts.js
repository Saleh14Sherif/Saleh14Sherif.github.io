document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('figure');
    const largeImage = document.getElementById('large-image');
    const imageDescription = document.getElementById('image-description');

    figures.forEach(figure => {
        // Add tabindex programmatically
        figure.setAttribute('tabindex', '0');

        // Mouse events
        figure.addEventListener('mouseover', updateLargeImage);
        figure.addEventListener('mouseleave', resetLargeImage);

        // Keyboard events
        figure.addEventListener('focus', updateLargeImage);
        figure.addEventListener('blur', resetLargeImage);
    });

    function updateLargeImage(event) {
        const img = event.currentTarget.querySelector('img');
        largeImage.src = img.src;
        largeImage.alt = img.alt;
        imageDescription.textContent = img.alt;
    }

    function resetLargeImage() {
        largeImage.src = '';
        largeImage.alt = '';
        imageDescription.textContent = 'Hover over or focus on an image to see details here.';
    }
});
