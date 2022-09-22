const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const line1 = document.querySelector(".line:nth-child(1)");
const line2 = document.querySelector(".line:nth-child(2)");
const line3 = document.querySelector(".line:nth-child(3)");
let counter = 0;

hamburger.addEventListener("click", () => {
  counter++;
  navLinks.classList.toggle("open");
  console.log("hamburger1");
  if (counter % 2 == 1) {
    line2.style["opacity"] = "0";
    line3.style["transform"] = "translateY(-10px) rotate(-225deg)";
    line1.style["transform"] = "translateY(10px) rotate(225deg)";
  } else if (counter % 2 == 0) {
    line2.style["opacity"] = "1";
    line1.style["transform"] = "translateY(0px) rotate(0deg)";
    line3.style["transform"] = "translateY(0px) rotate(0deg)";
  }

  links.forEach((link) => {
    link.classList.toggle("fade");
    console.log("hambureger2");
  });
});

navLinks.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    counter++;

    navLinks.classList.toggle("open");
    console.log("navlinks");

    if (counter % 2 == 1) {
      line2.style["opacity"] = "0";
      line3.style["transform"] = "translateY(-10px) rotate(-225deg)";
      line1.style["transform"] = "translateY(10px) rotate(225deg)";
    } else if (counter % 2 == 0) {
      line2.style["opacity"] = "1";
      line1.style["transform"] = "translateY(0px) rotate(0deg)";
      line3.style["transform"] = "translateY(0px) rotate(0deg)";
    }

    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  }
});

window.onscroll = function () {
  addSticky();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function addSticky() {
  if (window.pageYOffset >= sticky && window.innerWidth < 768) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
