let brawn = document.getElementById("brawn");
let brawnFoto = document.getElementById("brawn-img");
let cup = document.getElementById("cup");
let cupFoto = document.getElementById("cup-img");

const celular = matchMedia ('(min-width:769px)');
const changeSize = mql => {
    mql.matches
    ? cup.addEventListener("mouseover",function(){
        this.style.height = "310px"
        cupFoto.style.height = "260px"
    })
    : cup.addEventListener("mouseout",function(){
        this.style.height = ""
        cupFoto.style.height = "220px"
    })
}

cup.addEventListener("mouseout",function(){
    this.style.height = ""
    cupFoto.style.height = "220px"
})

const celular2 = matchMedia ('(min-width:769px)');
const changeSize2 = mql2 => {
    mql2.matches
    ? brawn.addEventListener("mouseover",function(){
        this.style.height = "310px"
        brawnFoto.style.height = "260px"
    })
    : brawnFoto.addEventListener("mouseout",function(){
        this.style.height = ""
        brawnFoto.style.height = "220px"
    })
}

brawn.addEventListener("mouseout",function(){
    this.style.height = ""
    brawnFoto.style.height = "220px"
})

celular.addListener(changeSize);
changeSize(celular);
celular2.addListener(changeSize2);
changeSize2(celular2);

document.getElementById("logo").addEventListener('click', () => {
    window.location = 'index.html'
  })


cupFoto.addEventListener('click', () => {
    window.location = '../cup.html'
})