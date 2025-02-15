// Handle "Ofc Pookie Forever" Button Click
document.getElementById("pookieButton").addEventListener("click", function () {
    let audio = new Audio("valentine-music.mp3");

    // Play romantic sound when clicked
    audio.play().catch(error => {
        console.log("Autoplay blocked. Click required:", error);
    });

    // Generate multiple floating hearts
    for (let i = 0; i < 20; i++) {
        createFloatingHeart();
    }
});

// Function to Create Floating Hearts
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💕"; // Heart emoji
    heart.classList.add("floating-heart");

    // Random starting position (anywhere on the screen)
    let randomX = Math.random() * window.innerWidth;

    // Apply styles
    heart.style.left = `${randomX}px`;
    heart.style.position = "absolute";
    heart.style.bottom = "0px"; // Start from bottom of screen
    heart.style.fontSize = "30px";
    heart.style.opacity = "1";
    heart.style.transition = "opacity 4s ease-in-out";
    
    document.body.appendChild(heart);

    // Animate heart to float up
    setTimeout(() => {
        heart.style.transform = "translateY(-100vh) scale(1.5)";
        heart.style.opacity = "0"; // Fade out effect
    }, 100);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
