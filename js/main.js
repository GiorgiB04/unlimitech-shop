$(function () {
  // Hero Slider
  $(document).ready(function () {
    // Hero slider
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

    // Products slider
    $(".products-slider").slick({
      dots: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="arrow-L.png" alt="prev"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="arrow-R.png" alt="next"></button>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
});

// ინიციალიზაცია Slider-wrapper (თუ ცალკე სექციაა)
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

$(document).ready(function () {
  // Products Slider
  $(".products-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: `
<button type="button" class="slick-prev"><img src="img/arrow-L.png" alt="prev"></button>
    `,
    nextArrow: `
<button type="button" class="slick-next"><img src="img/arrow-R.png" alt="next"></button>
    `,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
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
