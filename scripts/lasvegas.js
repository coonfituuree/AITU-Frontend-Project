// ✅ Проверка загрузки jQuery
$(document).ready(function () {
  console.log("✅ jQuery is ready!");

  /* -----------------------------------
   🧠 TASK 1. REAL-TIME SEARCH FILTER
  ----------------------------------- */
  $("#searchInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".search-item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().includes(value));
    });
  });

  /* -----------------------------------
   💬 TASK 2. AUTOCOMPLETE SUGGESTIONS
  ----------------------------------- */
  const suggestions = [
    "Las Vegas F1 Package",
    "Monaco Grand Prix",
    "Miami GP",
    "Singapore Night Race",
    "Dubai F1 Experience",
  ];

  $("#searchInput").on("input", function () {
    let input = $(this).val().toLowerCase();
    let dropdown = $("#suggestions");
    dropdown.empty();

    if (input.length === 0) return;

    suggestions.forEach((item) => {
      if (item.toLowerCase().includes(input)) {
        dropdown.append(`<div class="suggestion-item">${item}</div>`);
      }
    });
  });

  // При клике на подсказку — подставляем её в инпут
  $(document).on("click", ".suggestion-item", function () {
    $("#searchInput").val($(this).text());
    $("#suggestions").empty();
  });

  /* -----------------------------------
   🔍 TASK 3. SEARCH HIGHLIGHTING
  ----------------------------------- */
  $("#highlightBtn").on("click", function () {
    let keyword = $("#highlightInput").val();
    if (!keyword) return;

    $(".highlight-area").each(function () {
      let text = $(this).text();
      let regex = new RegExp(`(${keyword})`, "gi");
      let newText = text.replace(regex, `<mark>$1</mark>`);
      $(this).html(newText);
    });
  });

  /* -----------------------------------
   🎨 TASK 4. SCROLL PROGRESS BAR
  ----------------------------------- */
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height() - $(window).height();
    let scrollPercent = (scrollTop / docHeight) * 100;
    $("#progress-bar").css("width", scrollPercent + "%");
  });

  /* -----------------------------------
   🔢 TASK 5. ANIMATED NUMBER COUNTER
  ----------------------------------- */
  $(".counter").each(function () {
    let $this = $(this);
    let countTo = parseInt($this.attr("data-count"));
    $({ countNum: 0 }).animate(
      { countNum: countTo },
      {
        duration: 3000,
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

  /* -----------------------------------
   ⏳ TASK 6. LOADING SPINNER ON SUBMIT
  ----------------------------------- */
  $("#submitBtn").on("click", function (e) {
    e.preventDefault();
    let btn = $(this);
    btn.prop("disabled", true);
    btn.html(
      '<span class="spinner-border spinner-border-sm"></span> Please wait...'
    );

    setTimeout(() => {
      btn.prop("disabled", false);
      btn.html("Submit");
      showNotification("✅ Form submitted successfully!");
    }, 2000);
  });

  /* -----------------------------------
   🔔 TASK 7. TEMPORARY NOTIFICATION
  ----------------------------------- */
  function showNotification(message) {
    let notif = $(`<div class="notification">${message}</div>`);
    $("body").append(notif);
    notif.fadeIn(400);

    setTimeout(() => {
      notif.fadeOut(400, function () {
        $(this).remove();
      });
    }, 2500);
  }

  /* -----------------------------------
   📋 TASK 8. COPY TO CLIPBOARD BUTTON
  ----------------------------------- */
  $(".copy-btn").on("click", function () {
    let text = $(this).siblings(".copy-text").text();
    navigator.clipboard.writeText(text);
    $(this).text("✅ Copied!");
    setTimeout(() => $(this).text("Copy"), 1500);
  });

  /* -----------------------------------
   🖼️ TASK 9. IMAGE LAZY LOADING
  ----------------------------------- */
  function lazyLoad() {
    $(".lazy").each(function () {
      if (
        $(this).offset().top < $(window).scrollTop() + $(window).height() &&
        !$(this).attr("src")
      ) {
        $(this).attr("src", $(this).data("src"));
      }
    });
  }

  $(window).on("scroll", lazyLoad);
  lazyLoad();
});
