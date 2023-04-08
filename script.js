var hero = document.querySelector(".hero");
var obstacles = document.querySelector(".obstacles");
function sauter(){
    //faire sauter le hero
    if(hero.classList != "animation"){
        hero.classList.add('animation');
    }
    setTimeout(function(){
        hero.classList.remove('animation');
    },500);
}
//verifier si l'obstacle touche le hero
var verif = setInterval(function(){
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    
    if(obstaclesLeft < 20 && obstaclesLeft > 0 && heroTop >= 130){
        obstacles.style.animation ="none";
        alert("vous avez perdu");
    }
    },1);