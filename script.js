const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const question = document.getElementById("question");
const song = document.getElementById("loveSong");

// YES CLICK 💖
yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    celebration.classList.remove("hidden");

    song.play();
    launchConfetti();
});

// NO BUTTON RUNS AWAY 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// CONFETTI 🎊
function launchConfetti() {
    for (let i = 0; i < 90; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.borderRadius = "50%";
        confetti.style.backgroundColor =
            ["#ff4d6d", "#ffb3c6", "#ffd6e0"][Math.floor(Math.random() * 3)];
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
