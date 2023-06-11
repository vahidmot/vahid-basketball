let hs = document.getElementById("homescore")
let gs = document.getElementById("guestscore")
let homescore = 0
let guestscor = 0

function mosbat1h() {
homescore += 1
hs.innerText = homescore
}

function mosbat2h() {
homescore += 2
hs.innerText = homescore
}
function mosbat3h() {
homescore += 3
hs.innerText = homescore
}

function mosbat1g() {
guestscor += 1
gs.innerText = guestscor
}

function mosbat2g() {
guestscor += 2
gs.innerText = guestscor
}
function mosbat3g() {
guestscor += 3
gs.innerText = guestscor
}

function newgame() {
    gs.innerText = guestscor = 0
    hs.innerText = homescore = 0
}