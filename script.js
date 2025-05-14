window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
});

function playClickSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", playClickSound);
});

const sections = document.querySelectorAll("section, main");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
