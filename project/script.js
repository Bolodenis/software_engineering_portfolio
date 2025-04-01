window.onclick = function () {
    const quotes = [
        "Stay positive, work hard, and make it happen!",
        "The secret of getting ahead is getting started.",
        "Dream big and dare to fail.",
        "Success is not final; failure is not fatal.",
        "Opportunities don't happen, you create them.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Believe you can and you're halfway there.",
        "Everything you can imagine is real.",
        "The only way to do great work is to love what you do.",
        "Your time is limited, so don’t waste it living someone else’s life.",
        "You are never too old to set another goal or to dream a new dream.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Don’t watch the clock; do what it does. Keep going.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "Success usually comes to those who are too busy to be looking for it.",
        "If you want to achieve greatness stop asking for permission.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "I find that the harder I work, the more luck I seem to have."
    ];

    // Function to generate a random RGB color
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);  // Red (0-255)
        const g = Math.floor(Math.random() * 256);  // Green (0-255)
        const b = Math.floor(Math.random() * 256);  // Blue (0-255)
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Get a random index for the quote
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    // Set the quote text with quotation marks and apply random RGB color
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = `"${quotes[randomQuoteIndex]}"`;  // Added quotation marks
    quoteElement.style.color = getRandomRGB();  // Apply random RGB color
    quoteElement.style.fontSize = "24px";  // Adjust font size as needed
};

window.onload = function(){
    const animate = document.getElementById("one");
    animate.classList.remove("animate");

    setTimeout(() => {
        animate.classList.add("animate");
    }, 10); 
};
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll("#nav a"); // Select all links in the nav
    
    // Toggle the navigation visibility when hamburger icon is clicked
    hamburger.addEventListener("click", function() {
        nav.classList.toggle("nav-show");
        nav.classList.toggle("nav-hide");
    });
    
    // Add event listener to each nav link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // When a link is clicked, hide the navigation
            nav.classList.add("nav-hide");
            nav.classList.remove("nav-show");
        });
    });
});




