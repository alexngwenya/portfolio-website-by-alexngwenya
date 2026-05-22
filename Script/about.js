document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  if (typeof profile !== "undefined") {
    const brandText = document.getElementById("brandText");
    const footerText = document.getElementById("footerText");
    const aboutImage = document.getElementById("aboutProfileImage");
    const biographyText = document.getElementById("biographyText");

    if (brandText) brandText.textContent = profile.brand || "Welcome!";
    if (footerText) {
      footerText.textContent = `© ${new Date().getFullYear()} ${profile.fullName}. All rights reserved.`;
    }

    if (aboutImage) aboutImage.src = profile.profileImage;

    if (biographyText && profile.biography) {
      biographyText.textContent = profile.biography;
    }
  }
});