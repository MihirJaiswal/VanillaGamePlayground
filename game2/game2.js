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

console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
console.log(gridDisplay)