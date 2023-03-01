let cookieEl = document.getElementById("cookie-el")

let cookies = 0

function cMessage(){
    message = "You clicked on a diamond sword"
}
function cCookie(){
    cookies += 1
    cookieEl.innerText = cookies
}

function sprCookie(){
    cookies += 100
    cookieEl.innerText = cookies
}

function ultraCookie(){
    cookies += 1000
    cookieEl.innerText = cookies
}

function turboCookie(){
    cookies += 10000
    cookieEl.innerText = cookies
}

function reset(){
    cookies = 0
    cookieEl.innerText = cookies
}

function dCookie(){
    cookies += 1000000
    cookieEl.innerText = cookies
}