// Task 1: F1 Form Validation
console.log("Works");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // твоя форма бронирования
  const errorBox = document.createElement("div");
  errorBox.classList.add("alert", "alert-danger", "mt-3", "d-none");
  form.appendChild(errorBox);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // предотвратить стандартную отправку

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const destination = document.getElementById("destination").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value.trim();

    const errors = [];

    // ---- Validation rules ----
    if (!firstName) errors.push("⚠️ First Name is required.");
    if (!lastName) errors.push("⚠️ Last Name is required.");

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      errors.push("⚠️ Email is required.");
    } else if (!emailPattern.test(email)) {
      errors.push("⚠️ Please enter a valid email address.");
    }

    // Phone validation
    const phonePattern = /^[+]?[\d\s()-]{8,}$/;

    if (!phone) {
      errors.push("⚠️ Phone number is required.");
    } else if (!phonePattern.test(phone)) {
      errors.push("⚠️ Please enter a valid phone number.");
    }

    // Destination required
    if (!destination) errors.push("⚠️ Please select a destination.");

    // Guests number
    if (guests < 1 || guests > 10) {
      errors.push("⚠️ Number of guests must be between 1 and 10.");
    }

    // Optional field (message) — no strict validation, but we can trim long text
    if (message.length > 300) {
      errors.push("⚠️ Special request message is too long (max 300 chars).");
    }

    // ---- Show result ----
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
      errorBox.classList.remove("d-none");
      errorBox.scrollIntoView({ behavior: "smooth" });
    } else {
      errorBox.classList.add("d-none");
      alert("✅ Your booking form was successfully submitted!");
      form.reset();
    }
  });
});

// ======================
// Task 2: Accordion (FAQ)
// ======================
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    // Закрыть другие аккордеоны (опционально)
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    // Переключить текущий
    accordionItem.classList.toggle("active");
  });
});

// ============================
// Task 3: Popup Subscription
// ============================
// JavaScript для Popup
const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupForm = document.getElementById("popupForm");

// Открыть popup
openPopupBtn.addEventListener("click", () => {
  popup.classList.add("show");
  document.body.style.overflow = "hidden"; // Блокируем скролл
});

// Закрыть popup по клику на крестик
closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  document.body.style.overflow = "auto"; // Разблокируем скролл
});

// Закрыть popup по клику вне контента
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// Обработка формы
popupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("popupEmail").value;

  // Здесь можно добавить отправку данных
  alert(`Subscribed with email: ${email}`);

  // Закрыть popup после подписки
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
  popupForm.reset();
});

// Закрыть по ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.classList.contains("show")) {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// Change Background Color
const changeBgBtn = document.getElementById("changeBg");
const heroSection = document.querySelector(".hero-section");

const backgrounds = [
  "linear-gradient(135deg, #000 0%, #1a1a1a 50%, #e10600 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #e10600 50%, #000 100%)",
  "linear-gradient(135deg, #e10600 0%, #000 50%, #1a1a1a 100%)",
  "linear-gradient(135deg, #ff1e00 0%, #1a1a1a 50%, #000 100%)",
  "linear-gradient(135deg, #000 0%, #e10600 100%)",
];

let currentBgIndex = 0;

changeBgBtn.addEventListener("click", () => {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  heroSection.style.background = backgrounds[currentBgIndex];
  heroSection.style.transition = "background 0.5s ease";
});

// Date Time Display
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  document.getElementById("dateTime").textContent = now.toLocaleString(
    "en-US",
    options
  );
}

updateDateTime();
setInterval(updateDateTime, 1000);
