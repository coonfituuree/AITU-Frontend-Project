"use strict";
      console.log("✅ JS loaded");

      // === 1. Таймер (обновляется каждую секунду)
      const datetime = document.getElementById("datetime");
      function updateTime() {
        const now = new Date();
        datetime.textContent = now.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      }
      updateTime();
      setInterval(updateTime, 1000);

      // === 2. Show Time
      document.getElementById("showTimeBtn").onclick = () =>
        alert("🕒 Current time: " + new Date().toLocaleTimeString());

      // === 3. Change Background
      document.getElementById("colorBtn").onclick = () => {
        const colors = ["#F97316", "#3B82F6", "#10B981", "#F43F5E", "#8B5CF6"];
        document.body.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      };

      // === 4. Day/Night Mode
      document.getElementById("modeBtn").onclick = () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        modeBtn.textContent = isDark ? "☀️ Day Mode" : "🌙 Night Mode";
      };

      // === ✅ GALLERY с эффектом fade-in ===
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".gallery-thumbs img");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // добавляем fade-out эффект
    mainImage.classList.add("fade-out");

    // ждём 300мс, потом меняем картинку
    setTimeout(() => {
      mainImage.src = thumb.src;

      // после замены плавно возвращаем прозрачность
      mainImage.classList.remove("fade-out");
    }, 300);
  });
});

  // === ✅ ASYNC FORM через fetch() ===
  const successMsg = document.createElement("p");
  successMsg.textContent = "✅ Message sent successfully!";
  successMsg.style.color = "#16a34a";
  successMsg.style.fontWeight = "600";
  successMsg.style.display = "none";
  document.getElementById("contactForm").appendChild(successMsg);

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        successMsg.style.display = "block";
        contactForm.reset();
        setTimeout(() => (successMsg.style.display = "none"), 3000);
      } else {
        alert("❌ Error sending message.");
      }
    } catch (err) {
      alert("⚠️ Network error.");
    }
  });
      // === 6. Form Validation
      document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value.trim(),
          email = emailInput.value.trim(),
          message = messageInput.value.trim();
        if (!name || !email || !message)
          return alert("⚠️ Please fill in all fields.");
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(email))
          return alert("❌ Invalid email address.");
        alert("✅ Thank you, " + name + "! Your message has been sent.");
        e.target.reset();
      });

      // === 7. Accordion
      document.querySelectorAll(".accordion-question").forEach((q) => {
        q.addEventListener("click", () => {
          const ans = q.nextElementSibling;
          ans.style.display = ans.style.display === "block" ? "none" : "block";
        });
      });

      // === 8. Popup
      const popup = document.getElementById("popup");
      document.getElementById("openPopup").onclick = () =>
        (popup.style.display = "block");
      document.getElementById("closePopup").onclick = () =>
        (popup.style.display = "none");
      window.onclick = (e) => {
        if (e.target === popup) popup.style.display = "none";
      }