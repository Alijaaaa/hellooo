let clues = [
    { clue: "This treat is sweet, just like your effort on the exam! Think of something cold and delicious...", answer: "ice cream" },
    { clue: "You did amazing, and amazing people deserve treats! What is a place where you get ice cream?", answer: "dairy queen" },
    { clue: "Final hint! Your reward is waiting at Dairy Queen! Type 'let's go' to claim your treat!", answer: "let's go" }
];

let currentClueIndex = 0;

function startGame() {
    document.getElementById("buttons").classList.add("hidden");
    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("clueText").innerText = clues[currentClueIndex].clue;
}

function notExcited() {
    alert("Aww, don't be like that! Try again? 😊");
}

function checkAnswer() {
    let userInput = document.getElementById("answerInput").value.toLowerCase().trim();
    let feedback = document.getElementById("feedback");

    if (userInput === clues[currentClueIndex].answer) {
        currentClueIndex++;
        if (currentClueIndex < clues.length) {
            document.getElementById("clueText").innerText = clues[currentClueIndex].clue;
            document.getElementById("answerInput").value = "";
            feedback.innerText = "Great job! Here's your next clue. 🔍";
        } else {
            feedback.innerHTML = `
                🎉 Congratulations! You found your surprise! <br><br>
                <strong>📍 Pick it up at Dairy Queen:</strong><br>
                Dairy Queen Restaurant, 6445 Eastridge Dr, Dallas, TX 75231 🍦<br><br>
                💖 Sorry I couldn't make a better website, I've been busy... But I wanted to do something special for you! <br><br>
                I love you. 💕
            `;
            document.getElementById("answerInput").style.display = "none";
        }
    } else {
        feedback.innerText = "Oops! Try again. 🤔";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const lilyContainer = document.createElement("div");
    lilyContainer.classList.add("lily-background");
    document.body.appendChild(lilyContainer);

    function createLily() {
        const lily = document.createElement("img");
        lily.src = "lily.png"; // Make sure to add a lily image in your project
        lily.classList.add("lily");
        lily.style.left = Math.random() * 100 + "vw";
        lily.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random speed
        lilyContainer.appendChild(lily);

        // Remove lily after animation completes
        setTimeout(() => {
            lily.remove();
        }, 10000);
    }

    // Create lilies every second
    setInterval(createLily, 1000);
});

