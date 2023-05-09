var color = ["red", "blue", "yellow", "green"]
var conteiner = []
var i = 0
var scorebord = document.getElementById("score")
function start() {
   game()
   document.getElementById("btn").style.display = "none"
   document.getElementById("score").style.display = "block"
}

function game() {
   var number = Math.floor(Math.random() * 4)
   document.getElementById(color[number]).classList.add("animation");
   conteiner.push(color[number]);
   setTimeout(() => {
      document.getElementById(color[number]).classList.remove("animation")
   }, 300);
}

var a = 0;
function pk() {
   if(document.activeElement.id == conteiner[a]){
      if (a == conteiner.length -1) {
         // alert("RIGHT");
         a =0;
         i++
         scorebord.innerHTML = "Your Score Is : " + i
         game()

      }
      else{
         a++
      }
   }
   else{
      alert("GAME OVER");
      window.location.reload()
   }
   return i
}

