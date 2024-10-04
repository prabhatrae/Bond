// script.js corousel image
const image = [
    "./img/heroProduct.png",
    "./img/headphone13.jpg",
    "./img/headphone15.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function updatesImage() {
    carouselImage.src = image[currentIndex];
}
// Function to move to the next image
function nextImage() {
    currentindex = (currentindex < image.length - 1) ? currentIndex + 1 : 0;
    updatesImage();
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
    currentindex = (currentIndex > 0) ? currentIndex - 1 : image.length - 1;
    updateImage();
});
nextBtn.addEventListener("click", nextImage);

// Auto mvoe the carousel every 4 seconds
setInterval(nextImage, 4000);

