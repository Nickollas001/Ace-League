var buttonCup = document.getElementById("button-cup");
var cup = document.getElementById("cup");
var brawn = document.getElementById("brawn");
var buttonBrawn = document.getElementById("button-brawn");

buttonCup.addEventListener("mouseover",function(){
    cup.style.color = "red";
    this.style.background = "white"
    this.style.border = "1px solid red"
})

buttonCup.addEventListener("mouseout",function(){
    cup.style.color = "";
    this.style.background = ""
    this.style.border = ""
})
buttonBrawn.addEventListener("mouseover",function(){
    brawn.style.color = "red";
    this.style.background = "white"
    this.style.border = "1px solid red"
})

buttonBrawn.addEventListener("mouseout",function(){
    brawn.style.color = "";
    this.style.background = ""
    this.style.border = ""
})