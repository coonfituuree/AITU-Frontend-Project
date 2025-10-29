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

// Dynamic Name Greeting + Toast
const greetForm = document.getElementById("greetForm");
const nameInput = document.getElementById("nameInput");
const userGreeting = document.getElementById("userGreeting");
const greetToast = document.getElementById("greetToast");

greetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    userGreeting.textContent = `Hello, ${name}! 👋`;

    // Toast
    greetToast.textContent = `👋 Hello, ${name}!`;
    greetToast.style.display = "block";
    setTimeout(() => greetToast.style.display = "none", 2000);
  }
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


//7 assignment (Jquery)

//1-2-3 tasks:
$(document).ready(function () {
  $("#searchForm").on("submit", function (e) {
    e.preventDefault();

    let value = $("#searchBox").val().toLowerCase();

    // deleting last light only in h3
    $(".card h3").each(function () {
      $(this).html($(this).text());
    });

    // filter cards only for h3
    const $cards = $(".card").filter(function () {
      return $(this).find("h3").text().toLowerCase().includes(value);
    });

    // hide all except found onces 
    $(".card").hide();
    $cards.show();

    // if no such word 
    if ($cards.length === 0) {
      alert("No such tours ❌");
      return;
    }

    // highlighting founded word h3
    $cards.each(function () {
      let heading = $(this).find("h3");
      let text = heading.text();
      let regex = new RegExp(value, "gi");
      let newText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
      heading.html(newText);
    });

  });
});

//task-4:
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});


// task-5
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 150; 

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10); 
    } else {
      counter.innerText = target; 
    }
  };

  updateCounter();
});


//  task6
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();


  sendBtn.disabled = true;
  sendBtn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Please wait...`;

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
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

  //button to normal after 1 second
  setTimeout(() => {
    sendBtn.disabled = false;
    sendBtn.innerHTML = "Send";
  }, 1000);
});


// task-8: Copy for all items
$(".copyBtn").on("click", function () {
  let text = $(this).prev(".copyText").text(); // taking text before button
  navigator.clipboard.writeText(text);

  let btn = $(this);
  btn.text("Copied ✅");
  setTimeout(() => btn.text("Copy link to tour"), 1500);
});


// Task 9
$(window).on("scroll", function () {
  $(".lazy-img").each(function () {
    let imgTop = $(this).offset().top;
    let scrollBottom = $(window).scrollTop() + $(window).height();

    if (scrollBottom > imgTop) {
      $(this).attr("src", $(this).data("src"));
      $(this).addClass("loaded");
      $(this).removeClass("lazy-img");
    }
  });
});

$(window).trigger("scroll");
