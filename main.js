let boton = document.getElementById("iconMenu");
let enlaces = document.getElementById("header--list");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('header--list two');
        contador=1;
    }else{
        enlaces.classList.remove('two');
        enlaces.className = ('header--list one');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('two');
        enlaces.className = ('header--list one');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});