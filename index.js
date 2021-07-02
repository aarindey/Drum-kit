var numberOfDrumButtons=document.querySelectorAll(".drum").length;
// var audio=[];
// var audio[0]=new Audio("sounds/tom-1.mp3");
// var audio[1]=new Audio("sounds/tom-2.mp3");
// var audio[2]=new Audio("sounds/tom-3.mp3");
// var audio[3]=new Audio("sounds/tom-4.mp3");
// var audio[4]=new Audio("sounds/crash.mp3");
// var audio[5]=new Audio("sounds/kick-bass.mp3");
// var audio[6]=new Audio("sounds/snare.mp3");
 for(var i=0;i<numberOfDrumButtons;i++)
document.querySelectorAll("button")[i].addEventListener("click", function ()
{
// this.style.color="white";
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
    var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      // document.querySelector(".w").classList.remove("shake");
      break;
      case 'a':
document.querySelector(".a").classList.toggle("shake");
    var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      // document.querySelector(".a").classList.remove("shake");
      break;
      case 's':
document.querySelector(".s").classList.toggle("shake");
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      // document.querySelector(".s").classList.remove("shake");
      break;
      case 'd':
document.querySelector(".d").classList.toggle("shake");
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      // document.querySelector(".d").classList.remove("shake");
      break;
      case 'j':
document.querySelector(".j").classList.toggle("shake");
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      // document.querySelector(".j").classList.remove("shake");
      break;
      case 'k':
document.querySelector(".k").classList.toggle("shake");
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      // document.querySelector(".k").classList.remove("shake");
      break;
      case 'l':
document.querySelector(".l").classList.toggle("shake");
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      // document.querySelector(".l").classList.remove("shake");
      break;
      default:console.log(buttonInnerHTML);
  }
}
