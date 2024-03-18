const mario = document.querySelector('.mario');
const pipe=document.querySelector('.pipe');

const jump= () => {
  
   mario.classList.add('jump');
    
   setTimeout(() => {

        mario.classList.remove('jump');

    },500);
}




const loop= setInterval(() => {

    const pipePosition= pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    console.log(pipePosition);
  
if(pipePosition <= 100 && pipePosition<0 && marioPosition < 80){

pipe.style.animation='none';
pipe.style.left=`${pipePosition}px`;

mario.style.animation='none';
mario.style.bottomt=`${marioPosition}px`;

mario.src='./image/game-over.png';
mario.style.width='75px';



}
}
,10);






document.addEventListener('keyup', jump);
/*meu captaodr de evento  irá capturar a telca keyup e chamr a função jump
a funçaão jump nada mais é doque um arrow functions */