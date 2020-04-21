const badgeArray = [
  {
    name: "AFC-Bournemouth",
    img: "../../assets/images/AFC-Bournemouth1.jpg",
  },
  {
    name: "Arsenal-FC",
    img: "../../assets/images/Arsenal-FC1.jpg",
  },
  {
    name: "Aston-Villa-FC",
    img: "../../assets/images/Aston-Villa-FC1.jpg",
  },
  {
    name: "Brighton-&-Hove-Albion",
    img: "../../assets/images/Brighton-&-Hove-Albion1.jpg",
  },
  {
    name: "Burnley-FC",
    img: "../../assets/images/Burnley-FC1.jpg",
  },
  {
    name: "Chelsea-FC",
    img: "../../assets/images/Chelsea-FC1.jpg",
  },
  {
    name: "Crystal-Palace-FC",
    img: "../../assets/images/Crystal-Palace-FC1.jpg",
  },
  {
    name: "Everton-FC1",
    img: "../../assets/images/Everton-FC1.jpg",
  },
  {
    name: "Leicester-City-FC",
    img: "../../assets/images/Leicester-City-FC1.jpg",
  },
  {
    name: "Liverpool-FC",
    img: "../../assets/images/Liverpool-FC1.jpg",
  },
  {
    name: "Manchester-City-FC",
    img: "../../assets/images/Manchester-City-FC1.jpg",
  },
  {
    name: "Manchester-United-FC",
    img: "../../assets/images/Manchester-United-FC1.jpg",
  },
  {
    name: "Newcastle-United-FC",
    img: "../../assets/images/Newcastle-United-FC1.jpg",
  },
  {
    name: "Norwich-City-FC",
    img: "../../assets/images/Norwich-City-FC1.jpg",
  },
  {
    name: "Sheffield-United-FC",
    img: "../../assets/images/Sheffield-United-FC1.jpg",
  },
  {
    name: "Southampton-FC",
    img: "../../assets/images/Southampton-FC1.jpg",
  },

  {
    name: "Tottenham-Hotspur-FC",
    img: "../../assets/images/Tottenham-Hotspur-FC1.jpg",
  },
  {
    name: "Watford-FC",
    img: "../../assets/images/Watford-FC1.jpg",
  },

  {
    name: "West-Ham-United-FC",
    img: "../../assets/images/West-Ham-United-FC1.jpg",
  },
  {
    name: "Wolverhampton-Wanderers-FC",
    img: "../../assets/images/Wolverhampton-Wanderers-FC1.jpg",
  },
];

let gameGrid = badgeArray.concat(badgeArray);
let count = 0;
let firstGuess = '';
let secondGuess = '';
let sameBadge = null;
let badgeDelay = 1000;

gameGrid.sort(() => 0.5 - Math.random());

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


gameGrid.forEach(item => {
    const badge = document.createElement('div');
    badge.classList.add('badge');
    badge.dataset.name = item.name

    const front = document.createElement('div')
    front.classList.add('front')

    const back = document.createElement('div')
    back.classList.add('back')
    badge.style.backgroundImage = `url(${item.img})`;
    
    grid.appendChild(badge)
    badge.appendChild(front)
    badge.appendChild(back)
})

grid.addEventListener('click', function(event) {
    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === sameBadge){
        return
    }
    if (count < 2) {
        count++
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name
            console.log(firstGuess)
            clicked.parentNode.classList.add('selected')
        }
        else {
            secondGuess = clicked.parentNode.dataset.name
            console.log(secondGuess)
            clicked.parentNode.classList.add('selected')
        }
        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(match, badgeDelay)
                setTimeout(resetGuesses, badgeDelay)
            }
            else {
                setTimeout(resetGuesses, badgeDelay)
            }
        }
        sameBadge = clicked;
    }
})

const match = () => {
    let selected = document.querySelectorAll('.selected')
    selected.forEach(badge => {
        badge.classList.add('match')
    })
}

const resetGuesses = () => {
    firstGuess = ''
    secondGuess = ''
    count = 0

    let selected = document.querySelectorAll('.selected')
    selected.forEach(badge => {
        badge.classList.remove('selected')
    })
}

let myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     let c = 0;

     function myClock() {
       document.getElementById("timer").innerHTML = ++c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Time's Up!");
       }
     }
   }