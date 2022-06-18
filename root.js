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