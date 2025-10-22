"use strict";

//Theme Switch
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("night-theme");
  document.body.classList.toggle("day-theme");

  if (document.body.classList.contains("night-theme")) {
    themeToggle.textContent = "🌙 Night";
  } else {
    themeToggle.textContent = "🌞 Day";
  }
});

//  Time-Based Greeting
function timeGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("timeGreeting");
  let greetingText = "";

  if (hour < 12) greetingText = "Good Morning ☀️";
  else if (hour < 18) greetingText = "Good Afternoon 🌤️";
  else greetingText = "Good Evening 🌙";

  greetingElement.textContent = greetingText;
}
timeGreeting();

// Dynamic Name Greeting
const greetForm = document.getElementById("greetForm");
const nameInput = document.getElementById("nameInput");
const userGreeting = document.getElementById("userGreeting");

greetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) userGreeting.textContent = `Hello, ${name}! 👋`;
});

//  Reset Button
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  userGreeting.textContent = "Welcome!";
});

//  Keyboard Navigation
const navLinks = document.querySelectorAll(".nav a");
let focusedIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    focusedIndex = (focusedIndex + 1) % navLinks.length;
    navLinks[focusedIndex].focus();
  } else if (e.key === "ArrowLeft") {
    focusedIndex = (focusedIndex - 1 + navLinks.length) % navLinks.length;
    navLinks[focusedIndex].focus();
  }
});

//  Async Contact Form (using fetch)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    // Simulate POST request
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "green";
    contactForm.reset();
  } catch (error) {
    formStatus.textContent = "❌ Error sending message!";
    formStatus.style.color = "red";
  }
});
