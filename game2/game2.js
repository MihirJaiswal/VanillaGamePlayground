const cardArray = [
    //objects
    {
        name:'naruto',
        img:'img/naruto.png'
    },
    {
        name:'luffy',
        img:'img/luffy.png'
    },
    {
        name:'natsu',
        img:'img/natsu.jpg'
    },
    {
        name:'ichigo',
        img:'img/ichigo.jpg'
    },
    {
        name:'kaneki',
        img:'img/kaneki.jpg'
    },
    {
        name:'gintoki',
        img:'img/gintoki.jpg'
    },
    {
        name:'naruto',
        img:'img/naruto.png'
    },
    {
        name:'luffy',
        img:'img/luffy.png'
    },
    {
        name:'natsu',
        img:'img/natsu.jpg'
    },
    {
        name:'ichigo',
        img:'img/ichigo.jpg'
    },
    {
        name:'kaneki',
        img:'img/kaneki.jpg'
    },
    {
        name:'gintoki',
        img:'img/gintoki.jpg'
    }
]

cardArray.sort( () => 0.5 - Math.random () )//for shuffling array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChoosen = []
let cardChoosenId = []
const cardWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src','img/cat.jpg')
       card.setAttribute('data-id', i)
       card.addEventListener("click", flipCard)
       gridDisplay.append(card)
    }
}
createBoard()

function checkMatch (){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChoosenId[0]
    const optionTwoId = cardChoosenId[1]
    console.log(cards)
    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src', 'img/cat.jpg')
        cards[optionTwoId].setAttribute('src', 'img/cat.jpg')
        alert('you have clicked on same images')
    }
    if(cardChoosen[0]== cardChoosen[1]){
        cards[optionOneId].setAttribute('src', 'img/bg.png')
        cards[optionTwoId].setAttribute('src', 'img/bg.png')
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardWon.push(cardChoosen)
   } else {
        cards[optionOneId].setAttribute('src', 'img/cat.jpg')
        cards[optionTwoId].setAttribute('src', 'img/cat.jpg')
   }
   resultDisplay.innerHTML = cardWon.length
   cardChoosen = []
   cardChoosenId = []
    
   if(cardWon.length ==(cardArray.length)/2){
    resultDisplay.innerHTML = 'Congrats you found them all'
   }
}

function flipCard() {
    let cardID = this.getAttribute('data-id');
    if (!cardChoosenId.includes(cardID) && cardChoosenId.length < 2) {
        cardChoosen.push(cardArray[cardID].name);
        cardChoosenId.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
    }

    if (cardChoosenId.length === 2) {
        setTimeout(checkMatch, 500);
    }
}