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
const cardChoosen = []
const cardChoosenId = []

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
    const cards = document.querySelector('#grid img')
    if(cardChoosen[0] == cardChoosen[1]){
    alert('you found a match')
    cards[cardChoosenId[0]].setAttribute('src', 'img/bg.png')
   }
}

function flipCard() {
    let cardID =  this.getAttribute('data-id')
    console.log(cardArray[cardID].name)
    cardChoosen.push(cardArray[cardID].name)
    cardChoosenId.push(cardID)
    console.log(cardChoosen)
    console.log(cardChoosenId)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardChoosen.length ===2){
       setTimeout(checkMatch, 500)
    }
}