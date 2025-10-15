"use strict";

document.getElementById("hotelForm").addEventListener("submit", function (e) { //findind form with id="hotelForm"
  e.preventDefault();

  const input = document.getElementById("hotelName"); 
  const value = input.value.trim(); // deleting spaces from both side

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

const questions = document.querySelectorAll(".question"); // finding all classes with ".question"

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block"; // if answer hidden -> show || if answer shown -> hide
  });
});

window.addEventListener("scroll", function () { 
  const whatsapp = document.querySelector(".whatsapp-float"); //finding class ".whatsapp-float"
  if (window.scrollY > 200) {  // If the page is scrolled down more than 200 pixels → show the button.
    whatsapp.style.opacity = "1";
    whatsapp.style.visibility = "visible";
  } else {
    whatsapp.style.opacity = "0"; //if user at the bottom of page → hide button
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
