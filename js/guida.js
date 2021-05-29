let navToggleCont = 0

let loaderTime = Math.floor(Math.random() * 2500) + 1000;

setTimeout(function(){
    let loaderWin = document.querySelector(".loader")
    let loaderImg = document.querySelector(".loaderLogoAnime")
    loaderWin.style.zIndex = "-10"
    loaderImg.style.display = "none"
}, loaderTime)

let numArgument = document.querySelectorAll(".sideMenuArument")
let expA = document.querySelectorAll(".expArgument")

for (let i = 0 ; i < numArgument.length; i++) {
    numArgument[i].addEventListener('click' , function(){
        for(let k=0;k<numArgument.length; k++){
            numArgument[k].style.color = "#333"
            numArgument[k].style.textDecoration = "none"
            expA[k].style.display = "none"
        }
        numArgument[i].style.textDecoration = "underline"
        numArgument[i].style.color = "#61DAFB"
        expA[i].style.display = "block"
    }, false) ; 
}

numArgument[0].click()

function navToggler(x) {
    var md = document.querySelector("#menuDiv")
    var bar1 = document.querySelector(".bar1")
    var bar2 = document.querySelector(".bar3")
    var mbtn = document.querySelector(".navbar-toggler")

    navToggleCont++
    if(navToggleCont%2==0){
        md.style.display = "none"
        bar1.style.backgroundColor = "white"
        bar2.style.backgroundColor = "white"
        document.body.style.overflow = "visible"
    }else{
        document.body.style.overflow = "hidden"
        md.style.display = "block"
        md.style.zIndex = "10"
        bar1.style.backgroundColor = "#212529"
        bar2.style.backgroundColor = "#212529"
        mbtn.style.zIndex = "11"
    }
    x.classList.toggle("change");
}
