// === DOM SELECTION AND MANIPULATION ===

// Rating stars
const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? "#e10600" : "#ccc";
    });
    ratingText.textContent = `You rated ${index + 1} / 5 ⭐`;
  });
});

// === DYNAMIC STYLE CHANGES (Day/Night Toggle) ===
const themeBtn = document.getElementById("theme-toggle");
const rate = document.getElementById("rate");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    rate.style.background =
      "linear-gradient(135deg, #e10600 0%, #000 50%, #1a1a1a 100%)";
    rate.style.color = "#f0f0f0";
    themeBtn.textContent = "☀️ Switch to Day";
  } else {
    rate.style.background = "wheat";
    rate.style.color = "#000";
    themeBtn.textContent = "🌗 Switch to Night";
  }
});

// === ATTRIBUTE / CONTENT MANIPULATION ===
const greetBtn = document.getElementById("greet-btn");
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  greeting.textContent = name
    ? `👋 Welcome to the Grand Prix, ${name}!`
    : `Please enter your name.`;
});

// === RANDOM QUOTE (Fetch or Random Array) ===
const quotes = [
  "Racing is life; everything before or after is just waiting.",
  "To finish first, you must first finish.",
  "The winner ain't the one with the fastest car, it's the one who refuses to lose.",
  "Push yourself to the limit — then go beyond.",
  "Every lap is a new chance to be legendary.",
];

const quoteBtn = document.getElementById("show-quote");
const quoteArea = document.getElementById("quote-area");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteArea.textContent = quotes[randomIndex];
  quoteArea.style.transition = "transform 0.3s ease";
  quoteArea.style.transform = "scale(1.1)";
  setTimeout(() => (quoteArea.style.transform = "scale(1)"), 300);
});

// === KEYBOARD EVENT HANDLING ===
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      alert("↑ You pressed UP — Imagine accelerating!");
      break;
    case "ArrowDown":
      alert("↓ You pressed DOWN — Braking hard!");
      break;
  }
});

// === PLAY SOUND ===
// const clickSound = new Audio("../../assets/audio/George_Ibn_Russell.mp3");
// // const btn = document.getElementById("Russell");
// const russellBin = document.getElementById("russell_bin");
// btn.addEventListener("click", () => {
//   clickSound
//     .play()
//     .then(() => {
//       russellBin.style.display = "block";
//     })
//     .catch((error) => {
//       console.error("Ошибка воспроизведения:", error);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("russellVideo");
  const btn = document.getElementById("Russell");

  btn.addEventListener("click", () => {
    video.style.display = "block";
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
