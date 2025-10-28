// ✅ Assignment 7 — TravelX jQuery Features
$(document).ready(function () {
    console.log("✅ jQuery is ready!");
  
    // =========================================================
    // === Task 1 — Real-time Search & Live Filter (Fixed)
  $("#searchInput").on("keyup", function () {
    const value = $(this).val().toLowerCase().trim(); // получаем текст в нижнем регистре
  
    // Проходим по каждой карточке
    $(".col-sm-6").each(function () {
      const text = $(this).find(".card-body").text().toLowerCase(); // ищем текст только в теле карточки
      if (text.includes(value)) {
        $(this).fadeIn(200); // показываем, если совпадает
      } else {
        $(this).fadeOut(200); // скрываем, если не совпадает
      }
    });
  });
  
  
    // =========================================================
    // Task 2 — Autocomplete Suggestions
    // =========================================================
    const suggestions = ["Beaches", "City Adventures", "Mountain Hiking", "Exotic Trips"];
    $("#searchInput").on("input", function () {
      const value = $(this).val().toLowerCase();
      $("#suggestions").remove();
  
      if (value.length > 0) {
        const list = $("<ul id='suggestions' class='list-group position-absolute shadow bg-white'></ul>");
        suggestions.forEach((item) => {
          if (item.toLowerCase().includes(value)) {
            list.append(`<li class='list-group-item suggestion-item'>${item}</li>`);
          }
        });
        $(this).after(list);
      }
    });
  
    $(document).on("click", ".suggestion-item", function () {
      $("#searchInput").val($(this).text());
      $("#suggestions").remove();
    });
  
    // =========================================================
    // Task 3 — Search Highlighting (FAQ)
    // =========================================================
    $("#searchInput").on("input", function () {
      const query = $(this).val();
      $(".accordion-content p").each(function () {
        const text = $(this).text();
        if (query.length > 0) {
          const regex = new RegExp(`(${query})`, "gi");
          $(this).html(text.replace(regex, "<mark>$1</mark>"));
        } else {
          $(this).html(text);
        }
      });
    });
  
    // =========================================================
    // Task 4 — Colorful Scroll Progress Bar
    // =========================================================
    const progressBar = $("<div id='scrollBar'></div>").appendTo("body");
    $("<style>")
      .prop("type", "text/css")
      .html(`
        #scrollBar {
          position: fixed;
          top: 0; left: 0;
          height: 6px;
          width: 0%;
          background: linear-gradient(90deg, #3B82F6, #F97316, #10B981);
          z-index: 9999;
        }`)
      .appendTo("head");
  
    $(window).on("scroll", function () {
      const scrollTop = $(window).scrollTop();
      const docHeight = $(document).height() - $(window).height();
      const percent = (scrollTop / docHeight) * 100;
      $("#scrollBar").css("width", percent + "%");
    });
  
    // =========================================================
    // Task 5 — Animated Number Counter
    // =========================================================
    if ($("#stats").length === 0) {
      $(".signup-gallery").append(`
        <div id="stats" class="text-center my-5">
          <h3><span class="count" data-target="1200">0</span>+ Travelers joined TravelX</h3>
        </div>
      `);
    }
  
    $(".count").each(function () {
      const $this = $(this);
      const target = +$this.attr("data-target");
      $({ countNum: 0 }).animate(
        { countNum: target },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  
    // =========================================================
    // Task 6 — Loading Spinner on Submit
    // =========================================================
    $("form button[type='submit']").on("click", function (e) {
      e.preventDefault();
      const $btn = $(this);
      $btn.prop("disabled", true).html('<span class="spinner-border spinner-border-sm"></span> Please wait...');
      setTimeout(() => {
        $btn.prop("disabled", false).text("Sign Up");
        showToast("✅ Form submitted successfully!");
      }, 2000);
    });
  
    // =========================================================
    // Task 7 — Notification Toast
    // =========================================================
   function showToast(message) {
    const toast = $(`<div class='toast-msg'>${message}</div>`);
    $("body").append(toast);
    toast.fadeIn(400).delay(1500).fadeOut(400, function () {
      $(this).remove();
    });
  }

  $("<style>")
    .prop("type", "text/css")
    .html(`
      .toast-msg {
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: #10B981;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 500;
        display: none;
        z-index: 9999;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      }
    `)
    .appendTo("head");

  // Example: show toast when popup opens
  $("#openPopup").on("click", function () {
    showToast("Popup opened successfully!");
  });
    // =========================================================
    // Task 8 — Copy to Clipboard
    // =========================================================
   // === Task 8 — Copy to Clipboard (с анимацией и красивым toast по центру)
   if ($("#promoText").length === 0) {
    $(".footer").append(`
      <p id="promoText" class="mt-3">Use code <strong>TRAVELX25</strong> for 25% OFF!
        <button id="copyBtn" class="btn btn-outline-secondary btn-sm ms-2">Copy</button>
      </p>
    `);
  }

  $(document).on("click", "#copyBtn", function () {
    const text = $("#promoText").text();
    navigator.clipboard.writeText(text);
    $(this).text("✔ Copied!");
    setTimeout(() => $(this).text("Copy"), 1500);
    showToast("Promo code copied!");
  });
  
      
  
    // =========================================================
    // Task 9 — Lazy Loading Images
    // =========================================================
    $("img").each(function () {
      const src = $(this).attr("src");
      $(this).attr("data-src", src);
      $(this).removeAttr("src");
    });
  
    function lazyLoad() {
      $(".card img").each(function () {
        const $img = $(this);
        if ($img.offset().top < $(window).scrollTop() + $(window).height()) {
          const src = $img.attr("data-src");
          if (src) {
            $img.attr("src", src).hide().fadeIn(600);
            $img.removeAttr("data-src");
          }
        }
      });
    }
  
    $(window).on("scroll", lazyLoad);
    lazyLoad(); // Run once on page load
  });
  