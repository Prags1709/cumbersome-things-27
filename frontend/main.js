let data = JSON.parse(sessionStorage.getItem("partial_user"))

const socket = io("https://socketbe-prags1709.onrender.com/",{transports:["websocket"]})
//const socket = io("http://localhost:8081/",{transports:["websocket"]})

// https://socketbe-prags1709.onrender.com

window.addEventListener("load",async ()=>{
  
  let user_fetch = await fetch(`https://nice-cyan-chiton-vest.cyclic.app/channel/data/${data._id}`, {
    headers: { 'Content-Type': 'application/json' }
  })

  let u_data = await user_fetch.json()
  // console.log(u_data);
  if(user_fetch.ok){
    document.querySelector("#vikrant").innerText = u_data.Name;
  }

})

let channel = sessionStorage.getItem("channelName")
let username = data.Name

document.querySelector("#workspace").innerText = channel;
document.querySelector("#cnl").innerText = channel;

// console.log(username, channel);

socket.emit("user_channel", { username, channel });

    
  socket.on("welcome", (msg) => {
    
        outputMessage(msg);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  });

  socket.on("message_all", (msg) => {
    outputMessage(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
   
  });

  //Chat form
  const chatForm = document.getElementById("msg_form");
  const chatMessages = document.querySelector("#msg_container");

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let msg = e.target.elements.msg_inp.value;
    //console.log(msg);
    msg = msg.trim();

    if (!msg) {
      return false;
    }

    socket.emit("chatMessage", msg);

    e.target.elements.msg_inp.value = "";
    e.target.elements.msg_inp.focus();
  });

  function outputMessage(message) {
    const div = document.createElement("div");
    div.classList.add("message");

    const p = document.createElement("p");
    p.classList.add("meta");

    p.innerText = message.username;

    p.innerHTML += `<span>${message.Time_now}</span>`;

    div.appendChild(p);

    const para = document.createElement("p");

    para.classList.add("text");
    para.innerText = message.text;

    div.appendChild(para);

    chatMessages.appendChild(div);
   
  }

