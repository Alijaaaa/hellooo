document.getElementById("roseButton").addEventListener("click", function () {
    for (let i = 0; i < 15; i++) { // Number of roses
        createFloatingRose();
    }
});

function createFloatingRose() {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.classList.add("rose");

    // Random position on screen
    let randomX = Math.random() * window.innerWidth;
    let randomDelay = Math.random() * 2;

    rose.style.left = `${randomX}px`;
    rose.style.animationDelay = `${randomDelay}s`;

    document.body.appendChild(rose);

    // Remove rose after animation ends
    setTimeout(() => {
        rose.remove();
    }, 4000);
}
