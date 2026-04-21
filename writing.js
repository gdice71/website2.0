// Writing Page Lightbox Functionality
// Reuses the same lightbox structure as gallery

let currentImageIndex = 0;
let images = [];

// Initialize writing lightbox
document.addEventListener('DOMContentLoaded', () => {
    const writingItems = document.querySelectorAll('.writing-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCounter = document.getElementById('lightbox-counter');

    // Collect all images
    writingItems.forEach((item, index) => {
        const img = item.querySelector('img');
        images.push({
            src: img.src,
            alt: img.alt
        });

        // Click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.classList.add('lightbox-open');
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-open');
    }

    // Update lightbox image
    function updateLightboxImage() {
        const currentImage = images[currentImageIndex];
        lightboxImage.src = currentImage.src;
        lightboxImage.alt = currentImage.alt;
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }

    // Navigate to previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                showNextImage();
            } else {
                showPreviousImage();
            }
        }
    }
});
