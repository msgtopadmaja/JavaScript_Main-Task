var backdrop = document.querySelector(".backdrop");
var hamburger = document.querySelector(".menu");
var mobileNav = document.querySelector(".mobile-nav");

console.log(backdrop);
console.log(hamburger);
console.log(mobileNav);

hamburger.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

backdrop.addEventListener("click", function () {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
});

function validate() {
  var email = document.getElementById("text").value;

  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  if (regx.test(email)) {
    alert("You have provided a valid email address");
    return true;
  } else {
    alert("Sorry! Incorrect email address");
    return false;
  }
}
