// Handle "Yes" Button Click
document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("message").innerHTML = "🔥 BOOM BOOM BOOM BOOM 🔥";
    document.body.classList.add("shake");

    // Remove shake effect after animation
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 2000);
});

// Make "No" Button Run Away
document.getElementById("noButton").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
