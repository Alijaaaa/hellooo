// Handle "Yes" Button Click
document.getElementById("yesButton").addEventListener("click", function () {
    let audio = document.getElementById("boomSound");

    // Try to play sound and handle autoplay issues
    audio.play().catch(error => {
        console.log("Autoplay prevented. User must interact first:", error);
    });

    // Generate multiple floating GIFs
    for (let i = 0; i < 10; i++) {
        createFloatingGif();
    }
});

function createFloatingGif() {
    const gif = document.createElement("img");
    gif.src = "lebron-james.gif"; // Ensure this file is in the same folder
    gif.classList.add("floating-gif");

    // Random position on screen
    let randomX = Math.random() * (window.innerWidth - 150); // Keep GIF on screen
    let randomY = window.innerHeight - 100; // Start near bottom of the screen

    gif.style.position = "absolute";
    gif.style.left = `${randomX}px`;
    gif.style.bottom = "0px"; // Start from bottom
    gif.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(gif);

    // Remove GIF after animation ends
    setTimeout(() => {
        gif.remove();
    }, 4000);
}

// Make "No" Button Run Away
document.getElementById("noButton").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
