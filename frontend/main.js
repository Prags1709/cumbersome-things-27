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

// general channels
let general = document.getElementById("ch_general");
let ch1 = document.getElementById("created_ch");
// general.addEventListener("click",ch_general);
let ch_div = document.getElementById("midSection");
// general
general.addEventListener('click',function(){
  ch_div.innerHTML=""
  ch_div.innerHTML=
      `<div id="midSec">
      <p id="xyBtn" class="msg_chn">
        <i class="fa-regular fa-hashtag"></i> general
      </p>

      <!-- user modal -->
      <div id="xyModal" class="xmodal">
        <!-- Modal content -->
        <div class="xmodal-content">
          <span class="xclose">&times;</span>
          <h2><i class="fa-regular fa-hashtag"></i> general</h2>
          <div class="z_star">
            <i id="z_star" class="fa-regular fa-star"></i>
            <p class="z_noti">
              <i id="z_noti" class="fa-regular fa-bell"></i> Enable
              Notification
            </p>
          </div>
          <div class="z_topic">
            <p>About</p>
            <p id="z_to">Members</p>
            <p>Integrations</p>
            <p>Settings</p>
          </div>
          <div class="z_srh">
            <button id="z_srh_btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input class="z_srh_input" placeholder="Find Members" />
          </div>
          <p class="z_addpeople">
            <i id="z_addpeople" class="fa-solid fa-user-plus"></i>Add People
          </p>

          <!-- map users -->
          <div class="map_userdiv">
            <!-- user1 -->
            <div class="user_div">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
              />
              <p>Dummy User</p>
              <p>Dummyuser@gmail.com</p>
            </div>
            <!-- user2 -->
            <div class="user_div">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
              />
              <p>Dummy User1</p>
              <p>Dummyuser@gmail.com</p>
            </div>
            <!-- user3 -->
            <div class="user_div">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
              />
              <p>Dummy User2</p>
              <p>Dummyuser@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

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
    </div>`
})

ch1.addEventListener('click',function(){
    ch_div.innerHTML=""
    ch_div.innerHTML=
        `<div id="midSec">
        <p id="xyBtn" class="msg_chn">
          <i class="fa-regular fa-hashtag"></i> Channel 1
        </p>

        <!-- user modal -->
        <div id="xyModal" class="xmodal">
          <!-- Modal content -->
          <div class="xmodal-content">
            <span class="xclose">&times;</span>
            <h2><i class="fa-regular fa-hashtag"></i> Channel 1</h2>
            <div class="z_star">
              <i id="z_star" class="fa-regular fa-star"></i>
              <p class="z_noti">
                <i id="z_noti" class="fa-regular fa-bell"></i> Enable
                Notification
              </p>
            </div>
            <div class="z_topic">
              <p>About</p>
              <p id="z_to">Members</p>
              <p>Integrations</p>
              <p>Settings</p>
            </div>
            <div class="z_srh">
              <button id="z_srh_btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <input class="z_srh_input" placeholder="Find Members" />
            </div>
            <p class="z_addpeople">
              <i id="z_addpeople" class="fa-solid fa-user-plus"></i>Add People
            </p>

            <!-- map users -->
            <div class="map_userdiv">
              <!-- user1 -->
              <div class="user_div">
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
                />
                <p>Dummy User</p>
                <p>Dummyuser@gmail.com</p>
              </div>
              <!-- user2 -->
              <div class="user_div">
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
                />
                <p>Dummy User1</p>
                <p>Dummyuser@gmail.com</p>
              </div>
              <!-- user3 -->
              <div class="user_div">
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638__340.png"
                />
                <p>Dummy User2</p>
                <p>Dummyuser@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

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
      </div>`
})

// done by birendra

document.querySelector("#workspace").innerText=JSON.parse(localStorage.getItem("companyname"))

