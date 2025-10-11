"use strict";

document.getElementById("hotelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("hotelName");
  const value = input.value.trim();

  if (value === "") {
    alert("⚠️ The field can not be empty.");
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(value)) {
    alert("❌ Please enter only Latin letters (A–Z, a–z).");
    return;
  }

  alert("✅ Search: " + value);
});

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

window.addEventListener("scroll", function () {
  const whatsapp = document.querySelector(".whatsapp-float");
  if (window.scrollY > 200) {
    whatsapp.style.opacity = "1";
    whatsapp.style.visibility = "visible";
  } else {
    whatsapp.style.opacity = "0";
    whatsapp.style.visibility = "hidden";
  }
});

document.getElementById("colorBtn").addEventListener("click", function () {
  const colors = ["#f9fafb", "#ffe4e1", "#e0ffff", "#e6e6fa", "#fff8dc", "#f0fff0"];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
});

function showDateTime() {
  const now = new Date();
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("dateTime").textContent = now.toLocaleString("en-GB", options);
}

showDateTime();
setInterval(showDateTime, 1000);
