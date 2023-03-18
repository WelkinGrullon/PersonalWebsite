let header = document.getElementById("change");
const projectsContainer = document.querySelector(".projectsContain");
const modal = document.querySelectorAll(".modal");
const btn = document.querySelectorAll(".projectBtn");
const span = document.querySelectorAll(".close");
const hiddenElements = document.querySelectorAll(".hidden");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const linkSection = document.querySelector(".linkSection");
const socialSection = document.querySelector(".socialSection");
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");
activeMenu();
window.onscroll = function () {
  const scroller = window.scrollY;
  let header = document.getElementById("change");
  if (scroller > 150) {
    header.style.backgroundColor = "RGB(0, 0, 0, .5)";
  } else {
    header.style.backgroundColor = "black";
  }
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));
toggleButton.addEventListener("click", function () {
  //document.body.classList.toggle("stop-scrolling");
  linkSection.classList.toggle("active2");
});
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 75 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
  document.querySelector(".active").style.color = "purple";
}
window.addEventListener("scroll", activeMenu);
linkSection.addEventListener("click", function () {
  linkSection.classList.remove("active2");
});
projectsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projectBtn");
  const activeModal = document.querySelector(`.modal-${clicked.dataset.modal}`);
  console.log("clicked");
  if (!clicked) return;

  activeModal.classList.add("activeModal");
  document.body.classList.add("stop-scrolling");

  window.onclick = function (event) {
    if (event.target == activeModal) {
      activeModal.classList.toggle("activeModal");
      document.body.classList.remove("stop-scrolling");
    }
  };

  span.forEach((e) => {
    e.addEventListener("click", function () {
      activeModal.classList.remove("activeModal");
      document.body.classList.remove("stop-scrolling");
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      activeModal.classList.remove("activeModal");
      document.body.classList.remove("stop-scrolling");
    }
  });
});
