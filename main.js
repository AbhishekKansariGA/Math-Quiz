const init = ()=>{
  audioBody.play();
}
function SharkTank(Aman,Anupam,Ashneer,Namita,Peyush,Vineeta,){
  this.Aman = Aman;
  this.Anupam = Anupam;
  this.Ashneer = Ashneer;
  this.Namita = Namita;
  this.Peyush = Peyush;
  this.Vineeta = Vineeta;
}

SharkTank = new SharkTank('Hum Bhi Bana Lenge!','Kamal Hai Yar!','Bhai Kya Rha Hai Yar Tu Ye Sab Doglapan Hai!','Mai Isse Relate nhi Kar Paa Rhi Hu Isliye I Am Out But I Wish You All The Best!','Ok Deal Done!','Mai Inke Offer Match Kr Rhi Hu')

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort()
//console.log(fruits);



const math = Math.floor(Math.random()*160+1);
//console.log(math);
const mathTwo = Math.floor(Math.random()*60+1);
//console.log(mathTwo)
const mathThree = Math.floor(Math.random()*100/2)*2;
//console.log(mathThree)
const mathFour = Math.floor(Math.random()*10/2)*2;
//console.log(mathFour)
const mathFive = Math.floor(Math.random()*100+1);
//console.log(mathFive)

document.getElementById('question').innerHTML = math + "+" + mathTwo + "×" + mathThree + "÷" + mathFour + "-" + mathFive;
let sum = math + mathTwo * mathThree / mathFour - mathFive;
console.log(sum)
function myfuc(){
  let answer = document.getElementById("myinput").value.toLowerCase();
  if (answer == sum || answer == "Ashneer" || answer == "infinity") {
    document.querySelector("#para").innerHTML=`Good Job Very Nice Absolutly The Answer Is ${answer} 😉😉`;
    audioPankaj.play();
    console.log(answer);
   newGame.style.display="block";
   imgAman.style.display="block";
   audioBody.muted=true;
  }
  else{
    document.querySelector("#para").innerHTML=`You Are Failed My Friend The Answer Is Not ${answer} 🥺🥺`;
    audioAshneer.play();
    newGame.style.display="block";
    imgAshneer.style.display="block";
    audioBody.muted=true;
  }
}

const newGame = document.querySelector("#newGame");
newGame.addEventListener('click', ()=>{
  window.location.reload();
})
const imgAman = document.getElementById("imgAman");
const imgAshneer = document.getElementById("imgAshneer");
const audioAshneer = new Audio('ashneer.mp3');
const audioPankaj = new Audio('Pankaj.mp3');
const audioBody = new Audio('wahran.mp3');
