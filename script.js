document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top-btn");

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// To join the two pages
document.getElementById("goToPage1").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "gym.html";
});
document.getElementById("goToPage2").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "health.html";
});
document.getElementById("goToPage3").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "gym-e.html";
});
document.getElementById("goToPage4").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "iphone.html";
});
document.getElementById("goToPage5").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "laptop.html";
});
document.getElementById("goToPage6").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "pet_care.html";
});
document.getElementById("goToPage7").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "music.html";
});
document.getElementById("goToPage8").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "amazon_basic.html";
});

// Electronics section
document.getElementById("go-to-14").addEventListener("click", function() {
    // Redirect to page2.html
    window.location.href = "https://amzn.to/45xqPkb";
});