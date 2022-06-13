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
console.log(fruits);



const math = Math.floor(Math.random()*160+1);
console.log(math);
const mathTwo = Math.floor(Math.random()*100+1);
console.log(mathTwo);
document.getElementById('question').innerHTML = math + "+" + mathTwo;
let sum = math + mathTwo;

function myfuc(){
  let answer = document.getElementById("myinput").value;
  if (answer == sum || answer == "Ashneer") {
    document.querySelector("#para").innerHTML=`Good Job Very Nice Absolutly The Answer Is ${answer} 😉😉`;
    audioPankaj.play();
    console.log(answer);
   newGame.style.display="block";
   imgAman.style.display="block";
  }
  else{
    document.querySelector("#para").innerHTML=`You Are Failed My Friend The Answer Is Not ${answer} 🥺🥺`;
    audioAshneer.play();
    newGame.style.display="block";
    imgAshneer.style.display="block";
  }
}

const newGame = document.querySelector("#newGame");
newGame.addEventListener('click', ()=>{
  window.location.reload();
})
const imgAman = document.getElementById("imgAman");
const imgAshneer = document.getElementById("imgAshneer");
const audioAshneer = new Audio('ashneer.mp3')
const audioPankaj = new Audio('Pankaj.mp3')
