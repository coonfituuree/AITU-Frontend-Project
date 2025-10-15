document.addEventListener("DOMContentLoaded", function () {
    // ✅ Task 1: Form Validation
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
  
    // ✅ Task 2: Accordion
    document.querySelectorAll(".accordion-title").forEach((title) => {
      title.addEventListener("click", () => {
        title.nextElementSibling.classList.toggle("show");
      });
    });
  
    // ✅ Task 3: Popup Contact Form
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
  
    // ✅ Task 4: Change Background
    const bgButton = document.getElementById("changeColor");
    if (bgButton) {
      const colors = ["#3B82F6", "#F97316", "#10B981", "#9333EA", "#F43F5E"];
      bgButton.addEventListener("click", () => {
        document.body.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      });
    }
  
    // ✅ Task 5: Date and Time
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
  });
  