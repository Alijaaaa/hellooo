// Handle "Love You" Button Click
document.getElementById("loveButton").addEventListener("click", function () {
    let audio = new Audio("valentine-music.mp3");

    // Play romantic sound
    audio.play().catch(error => {
        console.log("Autoplay blocked. Click required:", error);
    });

    // Generate multiple floating hearts
    for (let i = 0; i < 15; i++) {
        createFloatingHeart();
    }
});

// Function to Create Floating Hearts
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");

    // Random position on screen
    let randomX = Math.random() * window.innerWidth;
    let randomDelay = Math.random() * 2;

    heart.style.left = `${randomX}px`;
    heart.style.animationDelay = `${randomDelay}s`;

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
