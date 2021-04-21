
var cards = document.querySelectorAll(".card");

cards.forEach((card) =>{
  card.addEventListener("click",flip);
});

var isFlipped=false;
var firstCard,secondCard;

function flip() {
    this.classList.add("flip");
    // console.log(this);
    if(!isFlipped){
      firstCard=this;
      isFlipped=true;
    }else{
      secondCard=this;
      check();
    }
}

function check(){
  if(firstCard.dataset.image == secondCard.dataset.image){
    sucess();
  }
  else{
    fail();
  }
}

function sucess(){
  firstCard.removeEventListener("click",flip);
  secondCard.removeEventListener("click",flip);
  
  reset();
}

function fail(){
  setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  },1000);
}

function reset(){
  isFlipped=false;
  firstCard=null;
  secondCard=null;
}

(function suffel(){
  cards.forEach((card)=>{
    var index = Math.floor(Math.random() * 16);
    card.style.order=index;
  });
})();