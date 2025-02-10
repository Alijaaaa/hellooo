// Handle "Yes" Button Click
document.getElementById("yesButton").addEventListener("click", function () {
    // Create a new Audio object to FORCE sound to play
    let audio = new Audio("lebron-bo-bo-bo-boom-made-with-Voicemod.mp3");

    // Play sound and catch autoplay errors
    audio.play().then(() => {
        console.log("Sound played successfully!");
    }).catch(error => {
        console.log("Autoplay blocked. Click required:", error);
    });

    // Shake the screen
    document.body.classList.add("shake");

    // Remove shake effect after animation
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 2000);

    // Generate multiple floating GIFs from button position
    for (let i = 0; i < 10; i++) {
        createFloatingGif();
    }
});

// Function to Create Floating GIFs from Yes Button
function createFloatingGif() {
    const yesButton = document.getElementById("yesButton");
    const rect = yesButton.getBoundingClientRect();

    const gif = document.createElement("img");
    gif.src = "lebron-james.gif";
    gif.classList.add("floating-gif");

    // Spawn GIF from Yes Button position
    gif.style.left = `${rect.left + rect.width / 2}px`;
    gif.style.top = `${rect.top}px`;
    gif.style.position = "absolute";
    gif.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(gif);

    // Remove GIF after animation ends
    setTimeout(() => {
        gif.remove();
    }, 4000);
}

// Make "No" Button Run Away FOREVER
document.getElementById("noButton").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);

    // Keep moving it far from "Yes" button
    let yesButton = document.getElementById("yesButton").getBoundingClientRect();

    while (
        Math.abs(x - yesButton.left) < 200 &&
        Math.abs(y - yesButton.top) < 200
    ) {
        x = Math.random() * (window.innerWidth - 150);
        y = Math.random() * (window.innerHeight - 150);
    }

    // Move the button
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;

    // Ensure it's always visible
    this.style.visibility = "visible";
});
