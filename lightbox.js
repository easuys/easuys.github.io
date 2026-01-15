(() => {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const image = lightbox.querySelector(".lightbox-image");
  const caption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll("[data-lightbox]");
  let lastFocus = null;

  const openLightbox = (trigger) => {
    lastFocus = document.activeElement;
    image.src = trigger.dataset.full;
    image.alt = trigger.dataset.alt || "";
    caption.textContent = trigger.dataset.caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    image.src = "";
    if (lastFocus) {
      lastFocus.focus();
    }
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
})();
