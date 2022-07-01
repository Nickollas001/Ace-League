var buttonCup = document.getElementById("button-cup");
var cup = document.getElementById("cup");

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