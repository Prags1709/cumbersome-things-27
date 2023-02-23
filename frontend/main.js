const toggleBtn = document.querySelector("#toggleBtn");
const leftNav = document.querySelector("#leftNav");

toggleBtn.addEventListener("click", () => {
  leftNav.classList.toggle("active");
  if (leftNav.classList.contains("active") === true) {
    toggleBtn.style.top = "3.2rem";
    toggleBtn.style.left = "10.8rem";
    toggleBtn.style.color = "#fff";
  }
  if (leftNav.classList.contains("active") === false) {
    toggleBtn.style.top = "3.5";
    toggleBtn.style.left = "0";
    toggleBtn.style.color = "#000";
  }
});

// accord
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
