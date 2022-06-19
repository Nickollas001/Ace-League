var menuBar = document.getElementById("container-menu-mob");

menuBar.addEventListener('click',(e)=>{
    e.preventDefault;
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    }else{
        menuMobile.classList.add('show-menu');
    }
})
function myFunction(x) {
    x.classList.toggle("change");
  }

document.getElementById("logo").addEventListener('click', () => {
    window.location = 'index.html'
  })

let parceiros = document.getElementById("parceiros");
let icone = document.getElementById("icone");

parceiros.addEventListener("mouseover",function(){
    icone.style.color = "red";
});
parceiros.addEventListener("mouseout",function(){
    icone.style.color = "";
});