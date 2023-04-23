// Opens the contact form
function openForm() {
    document.getElementById("sticky-form").style.display = "block";
}

// Closes the contact form
function closeForm() {
    document.getElementById("sticky-form").style.display = "none";
}

// Displays first image in slideshow on page load
var slideIndex = 1;
displaySlide(slideIndex);

// Changes the slide when left or right arrows are clicked
function changeSlide(n) {
    displaySlide(slideIndex += n);
}

// Changes the slide when dots are clicked
function currentSlide(n) {
    displaySlide(slideIndex = n);
}

// Displays current slide
function displaySlide(n) {
    
    // Creates slides and dots arrays by finding all elements by class name
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dots");

    // If n is greater than length of slides array, set slideIndex to first slide
    if (n > slides.length) {
        slideIndex = 1
    };

    // If n is less than 1, set slideIndex to last slide
    if (n < 1) {
        slideIndex = slides.length
    };

     // Takes each item in slides array and sets display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Takes each item in dots array and removes active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace(" active", "");
    }

    // Displays current image in slideshow
    slides[slideIndex - 1].style.display = "block";

    // Adds active styling to the currently active dot
    dots[slideIndex - 1].style.display += " active";
}