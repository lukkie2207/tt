// Get necessary elements
const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Keeps track of which image is showing

// Function to show the image based on current index
function showImage(index) {
    const imageWidth = images[0].clientWidth; // Get width of a single image
    imagesContainer.style.transform = `translateX(${-index * imageWidth}px)`; // Move container to show the image
}

// Move to the previous image
prevButton.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

// Move to the next image
nextButton.addEventListener('click', () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

// Initially show the first image
showImage(currentIndex);

// Auto scroll function (move to the next image every 3 seconds)
function autoScroll() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Start auto-scrolling every 3 seconds
let intervalId = setInterval(autoScroll, 3000); // Change image every 3 seconds

// Pause auto-scroll on hover
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(intervalId); // Stop auto-scrolling
});

// Resume auto-scroll when not hovering
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    intervalId = setInterval(autoScroll, 3000); // Restart auto-scrolling
});