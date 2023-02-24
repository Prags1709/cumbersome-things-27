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


// modal channel
var modal = document.getElementById("myModal");

var btn = document.getElementById("addChannelIconText");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// user modal
var mmodal = document.getElementById("mModal");

var mbtn = document.querySelector(".mBtn");

var mspan = document.getElementsByClassName("closed")[0];

mbtn.onclick = function() {
  mmodal.style.display = "block";
}

mspan.onclick = function() {
  mmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mmodal) {
    mmodal.style.display = "none";
  }
}


// channel click modal
var xmodal = document.getElementById("xyModal");

// Get the button that opens the modal
var xbtn = document.getElementById("xyBtn");

// Get the <span> element that closes the modal
var xspan = document.getElementsByClassName("xclose")[0];

// When the user clicks the button, open the modal 
xbtn.onclick = function() {
  xmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
xspan.onclick = function() {
  xmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == xmodal) {
    xmodal.style.display = "none";
  }
}

// done by birendra

document.querySelector("#workspace").innerText=JSON.parse(localStorage.getItem("companyname"))