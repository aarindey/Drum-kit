var numberOfDrumButtons=document.querySelectorAll(".drum").length;

 for(var i=0;i<numberOfDrumButtons;i++)
document.querySelectorAll("button")[i].addEventListener("click", function ()
{

var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
});

document.addEventListener("keydown",function(event){
  makeSound(event.key);
})
function makeSound(key)
{
  switch (key){
    case 'w':
document.querySelector(".w").classList.add("shake");
    var tom1=new Audio("tom-1.mp3");
      tom1.play();
      
      break;
      case 'a':
document.querySelector(".a").classList.toggle("shake");
    var tom2=new Audio("tom-2.mp3");
      tom2.play();
    ;
      break;
      case 's':
document.querySelector(".s").classList.toggle("shake");
      var tom3=new Audio("tom-3.mp3");
      tom3.play();
   
      break;
      case 'd':
document.querySelector(".d").classList.toggle("shake");
      var tom4=new Audio("tom-4.mp3");
      tom4.play();
  
      break;
      case 'j':
document.querySelector(".j").classList.toggle("shake");
      var crash=new Audio("crash.mp3");
      crash.play();
      break;
      case 'k':
document.querySelector(".k").classList.toggle("shake");
      var kick=new Audio("kick-bass.mp3");
      kick.play();
     
      break;
      case 'l':
document.querySelector(".l").classList.toggle("shake");
      var snare=new Audio("snare.mp3");
      snare.play();
    
      break;
      default:console.log(buttonInnerHTML);
  }
}
