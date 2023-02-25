document.querySelector("form").addEventListener("submit", login)
const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}')
function login(event) {
    event.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    const Body = { email, password }
    fetch('http://localhost:8080/cred/login', {
        method: "POST",
        body: JSON.stringify(Body),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        return (res.json()).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.user))
            console.log(res)
            window.location.href = "createworkspace.html"
        })
        if (res.status == 200) {
            console.log(res)
            window.location.href = "createworkspace.html"
        }
    })
}