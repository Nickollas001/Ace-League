let brawn = document.getElementById("brawn");
let brawnFoto = document.getElementById("brawn-img");

brawn.addEventListener("mouseover",function(){
    this.style.height = "310px"
    brawnFoto.style.height = "260px"
})
brawn.addEventListener("mouseout",function(){
    this.style.height = ""
    brawnFoto.style.height = ""
})
let cup = document.getElementById("cup");
let cupFoto = document.getElementById("cup-img");

cup.addEventListener("mouseover",function(){
    this.style.height = "310px"
    cupFoto.style.height = "260px"
})
cup.addEventListener("mouseout",function(){
    this.style.height = ""
    cupFoto.style.height = ""
})