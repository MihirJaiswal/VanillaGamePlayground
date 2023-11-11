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

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src','img/cat.jpg')
       card.setAttribute('data-id', i)
       gridDisplay.append(card)
    }
}
createBoard()