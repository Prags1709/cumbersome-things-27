document.querySelector("form").addEventListener("submit", login)
const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}')
function login(event) {
    event.preventDefault()
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    const Body = { email, password }
    login_data(Body)
}

async function login_data(Body){
    let res = await fetch('https://nice-cyan-chiton-vest.cyclic.app/cred/login', {
        method: "POST",
        body: JSON.stringify(Body),
        headers: { 'Content-Type': 'application/json' }
    })

    
    if (res.ok) {
        let out = res.json()
        out.then((res)=>{
            console.log(res);
            sessionStorage.setItem("partial_user",JSON.stringify(res.user))
            window.location.href = "createworkspace.html"
        }) 
    }else{
        alert("Incredential data, user not match")
    }
    

}