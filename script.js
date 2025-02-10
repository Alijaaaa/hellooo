// Handle "Yes" Button Click
document.getElementById("yesButton").addEventListener("click", function () {
    // Play Sound Effect
    let audio = document.getElementById("boomSound");
    audio.play();

    // Generate Multiple Floating GIFs
    for (let i = 0; i < 10; i++) {
        createFloatingGif();
    }
});

function createFloatingGif() {
    const gif = document.createElement("img");
    gif.src = "lebron-james.gif"; // Ensure this file is in the same folder
    gif.classList.add("floating-gif");

    // Random position on screen
    let randomX = Math.random() * window.innerWidth;
    let randomDelay = Math.random() * 2;

    gif.style.left = `${randomX}px`;
    gif.style.animationDelay = `${randomDelay}s`;

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
