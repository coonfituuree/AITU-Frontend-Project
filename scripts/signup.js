document.addEventListener("DOMContentLoaded", function () {
  alert("✅ JavaScript connected!");

  // === FORM VALIDATION ===
  const form = document.querySelector("form");
  const fullName = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.value.trim() === "") {
      alert("Please enter your full name.");
      return;
    }

    if (!emailPattern.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password.value !== confirm.value) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account successfully created!");
    form.reset();
  });

  // === ACCORDION ===
  document.querySelectorAll(".accordion-title").forEach((title) => {
    title.addEventListener("click", () => {
      title.nextElementSibling.classList.toggle("show");
    });
  });

  // === POPUP FORM ===
  const popup = document.getElementById("popupForm");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");

  if (openBtn && popup && closeBtn) {
    openBtn.onclick = () => (popup.style.display = "flex");
    closeBtn.onclick = () => (popup.style.display = "none");
    window.onclick = (e) => {
      if (e.target === popup) popup.style.display = "none";
    };
  }

  // === CHANGE BACKGROUND ===
  const bgButton = document.getElementById("changeColor");
  if (bgButton) {
    const colors = ["#3B82F6", "#F97316", "#10B981", "#9333EA", "#F43F5E"];
    bgButton.addEventListener("click", () => {
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });
  }

  // === DATE & TIME ===
  const timeBlock = document.getElementById("dateTime");
  if (timeBlock) {
    function updateTime() {
      const now = new Date();
      timeBlock.textContent = now.toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      });
    }
    setInterval(updateTime, 1000);
    updateTime();
  }

  // === DOM MANIPULATION: READ MORE ===
  const faqSection = document.querySelector(".accordion-item:last-child");
  if (faqSection) {
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.className = "btn btn-outline-primary mt-2";
    faqSection.appendChild(readMoreBtn);

    const extraText = document.createElement("p");
    extraText.textContent =
      "TravelX partners with over 100 agencies worldwide for the best deals.";
    extraText.style.display = "none";
    faqSection.appendChild(extraText);

    readMoreBtn.addEventListener("click", () => {
      extraText.style.display =
        extraText.style.display === "none" ? "block" : "none";
      readMoreBtn.textContent =
        extraText.style.display === "none" ? "Read More" : "Hide";
    });
  }

  // === EVENT HANDLING: TIME BUTTON ===
  const timeButton = document.createElement("button");
  timeButton.textContent = "Show Current Time";
  timeButton.className = "btn btn-info mt-3";
  document.querySelector(".footer").appendChild(timeButton);
  timeButton.addEventListener("click", () => {
    alert("Current time: " + new Date().toLocaleTimeString());
  });

  // === KEYBOARD NAVIGATION ===
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

  // === CALLBACK + FETCH ===
  const popupSendBtn = document.querySelector("#popupForm button.btn-primary");
  if (popupSendBtn) {
    popupSendBtn.addEventListener("click", async () => {
      const msg = document.createElement("p");
      msg.textContent = "Sending message...";
      msg.style.color = "blue";
      document.querySelector(".popup-content").appendChild(msg);

      await new Promise((res) => setTimeout(res, 1000));
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "green";
      setTimeout(() => msg.remove(), 2000);
    });
  }

  // === SWITCH STATEMENT ===
  function greetingByTime() {
    const hour = new Date().getHours();
    let greet;
    switch (true) {
      case hour < 12:
        greet = "Good morning, traveler!";
        break;
      case hour < 18:
        greet = "Good afternoon, adventurer!";
        break;
      default:
        greet = "Good evening, explorer!";
    }
    return greet;
  }
  const greetEl = document.createElement("p");
  greetEl.textContent = greetingByTime();
  document.querySelector(".footer").appendChild(greetEl);
});
