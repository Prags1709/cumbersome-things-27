// let getdetails=async()=>{
//   let data=JSON.parse(sessionStorage.getItem("user"));
//   let user= await fetch("http//localhost:8080/channel/data",{
//     method:"POST",
//     body:JSON.stringify({
//       email:`${data.email}`
//     }),
//     headers:{ 'Content-Type': 'application/json' }
//   })
//   console.log(user)
//   document.querySelector("#workspace").innerText="";
// }
// getdetails()
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
// var xmodal = document.getElementById("xyModal");

// Get the button that opens the modal
// var xbtn = document.getElementById("xyBtn");

// Get the <span> element that closes the modal
// var xspan = document.getElementsByClassName("xclose")[0];

// When the user clicks the button, open the modal 
// xbtn.onclick = function() {
//   xmodal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// xspan.onclick = function() {
//   xmodal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == xmodal) {
//     xmodal.style.display = "none";
//   }
// }

document.querySelector('.chann').addEventListener('submit', formSubmit)
var arr = JSON.parse(localStorage.getItem('channel')) || [];
function formSubmit(event){
  event.preventDefault();
  var formObj = {
      name: document.querySelector(".x_channel").value
  }
  var name = formObj.name;

  if (name == "") {
      alert("Fill all Fields")
      return
  }
  else{
      alert("Channel Created")
      // window.location = './login.html'
      arr.push(formObj)
      console.log(arr)
      localStorage.setItem('channel', JSON.stringify(arr));
      window.location="./main.html"
      return;
  }
}

var ch_arr = JSON.parse(localStorage.getItem('channel'))
console.log(arr);
console.log(ch_arr);
let midSec = document.getElementById("midsection");
function display(ch_arr){

  document.querySelector("#panel").innerHTML="";

  ch_arr.map(function (elem){
    
      let a_div = document.createElement("div");
      a_div.setAttribute("id","chhh");
      let a_span = document.createElement("span");
      a_span.setAttribute("id","Channel_icon");
      let a_i = document.createElement("i");
      a_i.setAttribute("class","fa-regular fa-hashtag");
      let a_cspan = document.createElement("span");
      a_cspan.innerText=elem.name;
      a_span.setAttribute("class","Channel_name");
      a_span.append(a_i);
      a_cspan.addEventListener("click",function() {
        midSec.innerHTML=`
    <div id="midSec">
          <p class="msg_chn">
            <i class="fa-regular fa-hashtag"></i> ${elem.name}
          </p>
  
          <div id="msg_container">
            <!-- show chat here -->
          </div>
  
          <!-- message div -->
          <div id="msg_section">
            <div id="msg_icon">
              <i class="fa-sharp fa-solid fa-bold"></i>
              <i class="fa-sharp fa-solid fa-italic"></i>
              <i class="fa-solid fa-strikethrough"></i>
              <i class="fa-solid fa-link"></i>
              <i class="fa-sharp fa-solid fa-list-ol"></i>
              <i class="fa-sharp fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-code"></i>
              <i class="fa-sharp fa-solid fa-code-compare"></i>
            </div>
  
            <!-- message input box -->
  
            <form id="msg_form">
              <input id="msg_inp" type="text" placeholder="message # General" />
              <input id="msg_submit" type="submit" value="Send" />
            </form>
  
            <div id="msg_icon1">
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-video"></i>
              <i class="fa-sharp fa-solid fa-microphone"></i>
              <i class="fa-solid fa-face-smile"></i>
              <i class="fa-solid fa-at"></i>
              <i class="fa-sharp fa-solid fa-font-case"></i>
            </div>
          </div>
        </div>
  `
      })
      a_div.append(a_span,a_cspan)
      document.querySelector("#panel").append(a_div);
  })
}

display(ch_arr);

let gene_ch = document.getElementById("general_ch");
gene_ch.addEventListener("click",function() {
  midSec.innerHTML=`
  <div id="midSec">
          <p class="msg_chn">
            <i class="fa-regular fa-hashtag"></i> general
          </p>
  
          <div id="msg_container">
            <!-- show chat here -->
          </div>
  
          <!-- message div -->
          <div id="msg_section">
            <div id="msg_icon">
              <i class="fa-sharp fa-solid fa-bold"></i>
              <i class="fa-sharp fa-solid fa-italic"></i>
              <i class="fa-solid fa-strikethrough"></i>
              <i class="fa-solid fa-link"></i>
              <i class="fa-sharp fa-solid fa-list-ol"></i>
              <i class="fa-sharp fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-code"></i>
              <i class="fa-sharp fa-solid fa-code-compare"></i>
            </div>
  
            <!-- message input box -->
  
            <form id="msg_form">
              <input id="msg_inp" type="text" placeholder="message # General" />
              <input id="msg_submit" type="submit" value="Send" />
            </form>
  
            <div id="msg_icon1">
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-video"></i>
              <i class="fa-sharp fa-solid fa-microphone"></i>
              <i class="fa-solid fa-face-smile"></i>
              <i class="fa-solid fa-at"></i>
              <i class="fa-sharp fa-solid fa-font-case"></i>
            </div>
          </div>
        </div>
`
})



// done by birendra
// document.querySelector("#workspace").innerText=JSON.parse(localStorage.getItem("companyname"))