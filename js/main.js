$(function () {
  // Hero Slider
  $(".hero-slider").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="arrow-L.png" alt="prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="arrow-R.png" alt="next"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: "linear",
  });

  // Slider-wrapper (თუ ცალკე სექციაა)
  $(".slider-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: "ease",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrow-L.png" alt="prev"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrow-R.png" alt="next"></button>',
  });
});

/* ===== Mega menu: Damskie buty skórzane ===== */
(function () {
  const navItem = document.getElementById("nav-women-item");
  const toggle = document.getElementById("nav-women");
  const menu = document.getElementById("mega-women");
  if (!navItem || !toggle || !menu) return;

  // Open/close on click (desktop only)
  const isDesktop = () => window.matchMedia("(min-width: 1025px)").matches;

  toggle.addEventListener("click", (e) => {
    if (!isDesktop()) return; // mobile – let the link work
    e.preventDefault();
    navItem.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", navItem.classList.contains("is-open"));
    menu.setAttribute("aria-hidden", !navItem.classList.contains("is-open"));
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!isDesktop()) return;
    if (!navItem.contains(e.target)) {
      navItem.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    }
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navItem.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    }
  });

  // Left column hover -> switch pane
  const leftItems = menu.querySelectorAll(".mega-left li");
  const panes = menu.querySelectorAll(".mega-center .mega-pane");

  function setPane(name) {
    leftItems.forEach((li) =>
      li.classList.toggle("active", li.dataset.pane === name)
    );
    panes.forEach((p) =>
      p.classList.toggle("is-active", p.dataset.pane === name)
    );
  }

  leftItems.forEach((li) => {
    li.addEventListener("mouseenter", () => setPane(li.dataset.pane));
    li.addEventListener("focus", () => setPane(li.dataset.pane));
  });
})();

const menuTriggers = document.querySelectorAll(".nav > li");
const megaMenu = document.querySelector(".mega-menu");

menuTriggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", () => {
    megaMenu.classList.add("active");
    document.body.classList.add("no-scroll"); // სქროლის გათიშვა
  });

  trigger.addEventListener("mouseleave", () => {
    megaMenu.classList.remove("active");
    document.body.classList.remove("no-scroll"); // სქროლის ჩართვა
  });
});

// ================= Products Slider =================
(function ($) {
  function initProductsSlider() {
    var $slider = $(".products-slider");
    if (!$slider.length) return;

    // თუ უკვე გაშვებულია — unslick და ხელახლა
    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }

    $slider.on("setPosition", function () {
      $(this).find(".slick-slide").height("auto");
    });

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="img/arrow-L.png" alt="prev"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="img/arrow-R.png" alt="next"></button>',
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1200, // laptop
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 992, // tablet
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 768, // mobile
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: "16px",
          },
        },
      ],
    });
  }

  $(function () {
    var $imgs = $(".products-slider img");
    if ($imgs.length) {
      var loaded = 0;
      $imgs.on("load error", function () {
        loaded++;
        if (loaded === $imgs.length) initProductsSlider();
      });
    } else {
      initProductsSlider();
    }

    $(".products-header .tabs a").on("click", function () {
      setTimeout(initProductsSlider, 30);
    });

    $(window).on("orientationchange resize", function () {
      setTimeout(function () {
        var $s = $(".products-slider");
        if ($s.hasClass("slick-initialized")) {
          $s.slick("setPosition");
        }
      }, 200);
    });
  });
})(jQuery);
$(".products-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768, // მობილური
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: "12px", // ოდნავ ჩაჭრილი კიდეები (peek)
        variableWidth: false,
      },
    },
  ],
});
