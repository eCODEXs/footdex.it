function menu() {
    let menuIcon = document.getElementById('menu-1')
    let menu2 = document.getElementById('menu-2')
    menu2.style.display = "flex"
    let svg1 = document.getElementById('svg-1')
    let svg2 = document.getElementById('svg-2')
    svg1.style.display= "none"
    svg2.style.display= "flex"
    menuIcon.setAttribute("onclick", "lock()")
}

function lock() {
    let menuIcon = document.getElementById('menu-1')
    let menu2 = document.getElementById('menu-2')
    menu2.style.display = "none"
    let svg1 = document.getElementById('svg-1')
    let svg2 = document.getElementById('svg-2')
    svg1.style.display= "flex"
    svg2.style.display= "none"
    menuIcon.setAttribute("onclick", "menu()")
}

function airforce1WB() {
    let scarpe = { data: {
        name : "Nike Air Force 1 '07 WB",
        gener: "Men",
        color: "Brown",
        originalPrice: "139,99",
        discountPrice: "119,99",
        stock: "20"
    }}
   console.log(scarpe)
    return scarpe
}
let airForce0 = "./img/nikeAir107/nike-2.webp"
let airForce1 = "./img/nikeAir107/nike-3.webp"
let airForce2 = "./img/nikeAir107/nike-4.webp"
let airForce3 = "./img/nikeAir107/nike-5.webp"
let airForce4 = "./img/nikeAir107/nike-7.webp"
let imgPrincipale = document.getElementById('imgPrincipale')

function airOn1() {
    imgPrincipale.setAttribute('src', airForce1)
}
function airOn2() {
    imgPrincipale.setAttribute('src', airForce2)
}function airOn3() {
    imgPrincipale.setAttribute('src', airForce3)
}function airOn4() {
    imgPrincipale.setAttribute('src', airForce4)
}
function principal() {
    imgPrincipale.setAttribute("src", airForce0)
}

function openInfo() {
    let svg1 = document.getElementById('rev1')
    let svg2 = document.getElementById('rev2')
    let p = document.getElementById('reviewInfo')
    p.style.display = "flex"
    svg1.style.display = "flex"
    svg2.style.display = "none"
    let topInfo = document.getElementById('topInfo')
    topInfo.setAttribute("onclick", "lockInfo()")

}

function lockInfo() {
    let svg1 = document.getElementById('rev1')
    let svg2 = document.getElementById('rev2')
    let p = document.getElementById('reviewInfo')
    p.style.display = "none"
    svg1.style.display = "none"
    svg2.style.display = "flex"
    let topInfo = document.getElementById('topInfo')
    topInfo.setAttribute("onclick", "openInfo()")
}