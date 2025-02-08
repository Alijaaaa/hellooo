function generateRoses() {
    const roseContainer = document.querySelector(".rose-container");

    for (let i = 0; i < 10; i++) { // Creates 10 roses at a time
        let rose = document.createElement("div");
        rose.innerHTML = "🌹";
        rose.classList.add("rose");

        // Random positioning
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Random float time

        roseContainer.appendChild(rose);

        // Remove rose after animation
        setTimeout(() => {
            rose.remove();
        }, 5000);
    }
}

// Auto-generate roses on load
window.onload = () => {
    generateRoses();
};
