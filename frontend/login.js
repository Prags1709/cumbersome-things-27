document.querySelector("form").addEventListener("submit",login)
const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}')
function login(event) {
    event.preventDefault()
    let email=document.querySelector("#email").value;
let password=document.querySelector("#password").value;
const Body={email,password}
    fetch('http://localhost:8080/cred/login', {
        method: "POST",
        body: JSON.stringify(Body),
        headers: { 'Content-Type': 'application/json' }
    }).then((res)=>{
        console.log(res)
        if(res.status==200)
        {
            console.log(res.Cookies)
// window.location.href="createworkspace.html"
        }
    })
}