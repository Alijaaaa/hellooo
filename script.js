document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("message").innerHTML = "Yay! You're mine now! 💋💕💍";
});

document.getElementById("noButton").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
