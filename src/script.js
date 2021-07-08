const bigGear = document.querySelector('.big-gear');
const smallGear = document.querySelector('.small-gear');
const man = document.querySelector('.man');
const pencil = document.querySelector('.pencil');


window.addEventListener('scroll', function(){
    console.log(pageYOffset);
    if(pageYOffset >=0 || pageYOffset <= 900){
        bigGear.style.transform = `rotate(${pageYOffset * 0.2}deg)`;
        smallGear.style.transform = `rotate(-${pageYOffset * 0.2}deg)`;
        man.style.transform = `translateX(${pageYOffset * 0.05}px)`;
        pencil.style.transform = `translateX(-${pageYOffset * 0.1}px)`;
    }
});