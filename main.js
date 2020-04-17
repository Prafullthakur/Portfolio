var vid = document.getElementById("myVideo");
vid.playbackRate = 0.6;
var navbar = document.querySelector(".nav-bar");
var videoSection = document.querySelector(".video-section");
var menu = document.querySelector(".Menu");
var Part = document.querySelector(".part1");
navbar.addEventListener('click',showMenu);
var clickcount=0;
function showMenu(e)
{ 
    clickcount++;
  if(clickcount%2==0)
   { 
     menu.style.display='none';
       menu.className="Menu-reverse";
    }
   else
   {
    menu.style.display='inline-block';
    menu.className="Menu";
   }
}

var a1 = document.querySelectorAll(".a1");
AOS.init({
  offset: 400,
  duration: 600,
});
console.log(a1);
a1.forEach((items)=>{
    menu.style.position='static';
  items.addEventListener('click',(e)=>{

 menu.style.display='none';

});
});
