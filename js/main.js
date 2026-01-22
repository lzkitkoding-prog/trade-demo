document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // Open lightbox
  document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const imgSrc = card.getAttribute("href");

      lightboxImg.src = imgSrc;
      lightbox.classList.remove("hidden");
      document.body.classList.add("no-scroll");
    });
  });

  // Close lightbox (X button)
  closeBtn.addEventListener("click", closeLightbox);

  // Close lightbox (click outside image)
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox (ESC key)
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
    document.body.classList.remove("no-scroll");
  }
});
