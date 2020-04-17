var vid = document.getElementById("myVideo");
vid.playbackRate = 0.6;
var navbar = document.querySelector(".nav-bar");
var navline1 = document.querySelector(".nav-bar1");
var navline2 = document.querySelector(".nav-bar2");
var navline3 = document.querySelector(".nav-bar3");
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
navbar.addEventListener('click',animate);
function animate(e)
{     if(clickcount%2==0)
       {
            navline1.className="nav-bar1";
    navline2.className="nav-bar2";
    navline3.className="nav-bar3";     
       }
    
    else{
    navline1.className+=" animateitonce";
    navline2.className+=" animateittwice";
    navline3.className+=" animateitthrice";
     }
}