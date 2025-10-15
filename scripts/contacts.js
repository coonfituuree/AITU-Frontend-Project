"use strict";

// === Task 1: Form Validation ===
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent.");
  this.reset();
});

// === Task 2: Accordion ===
const questions = document.querySelectorAll(".accordion-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const ans = q.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

// === Task 3: Popup Form ===
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.onclick = () => (popup.style.display = "block");
closePopup.onclick = () => (popup.style.display = "none");

window.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};

// === Task 4: Change Background Color ===
document.getElementById("colorBtn").addEventListener("click", () => {
  const colors = ["#F97316", "#3B82F6", "#10B981", "#F43F5E", "#8B5CF6"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
});

// === Task 5: Display Current Date and Time ===
function updateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("datetime").textContent = now.toLocaleString(
    "en-US",
    options
  );
}

setInterval(updateTime, 1000);
updateTime();