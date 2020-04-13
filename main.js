var vid = document.getElementById("myVideo");
vid.playbackRate = 0.6;
var navbar = document.querySelector(".nav-bar");
var videoSection = document.querySelector(".video-section");
var menu = document.querySelector(".Menu");
var Part = document.querySelector(".part1");
navbar.addEventListener('click',showMenu);
var clickcount=0;
function showMenu(e)
{   console.log(e);
    clickcount++;
	if(clickcount%2==0)
   { 
     videoSection.style.display='inline-block';
     menu.style.display='none';
    }
   else
   {
   	menu.style.display='inline-block';
    videoSection.style.display='none';
    
   }
}
