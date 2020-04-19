//Variables

let badges = [
  {
    name: "AFC-Bournemouth",
    img: "../../assets/images/AFC-Bournemouth1.jpg",
  },
  {
    name: "AFC-Bournemouth",
    img: "../../assets/images/AFC-Bournemouth1.jpg",
  },
  {
    name: "Arsenal-FC",
    img: "../../assets/images/Arsenal-FC1.jpg",
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
    name: "Aston-Villa-FC",
    img: "../../assets/images/Aston-Villa-FC1.jpg",
  },
  {
    name: "Brighton-&-Hove-Albion",
    img: "../../assets/images/Brighton-&-Hove-Albion1.jpg",
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
    name: "Burnley-FC",
    img: "../../assets/images/Burnley-FC1.jpg",
  },
  {
    name: "Chelsea-FC",
    img: "../../assets/images/Chelsea-FC1.jpg",
  },
  {
    name: "Chelsea-FC",
    img: "../../assets/images/Chelsea-FC1.jpg",
  },
  {
    name: "Crystal-Palace-FC",
    img: "../../assets/image/Crystal-Palace-FC1.jpg",
  },
  {
    name: "Crystal-Palace-FC",
    img: "../../assets/image/Crystal-Palace-FC1.jpg",
  },
  {
    name: "Everton-FC1",
    img: "../../assets/images/Everton-FC1.jpg",
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
    name: "Leicester-City-FC",
    img: "../../assets/images/Leicester-City-FC1.jpg",
  },
  {
    name: "Liverpool-FC",
    img: "../../assets/images/Liverpool-FC1.jpg",
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
    name: "Manchester-City-FC",
    img: "../../assets/images/Manchester-City-FC1.jpg",
  },
  {
    name: "Manchester-United-FC",
    img: "../../assets/images/Manchester-United-FC1.jpg",
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
    name: "Newcastle-United-FC",
    img: "../../assets/images/Newcastle-United-FC1.jpg",
  },
  {
    name: "Norwich-City-FC",
    img: "../../assets/images/Norwich-City-FC1.jpg",
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
    name: "Sheffield-United-FC",
    img: "../../assets/images/Sheffield-United-FC1.jpg",
  },
  {
    name: "Southampton-FC",
    img: "../../assets/images/Southampton-FC1.jpg",
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
    name: "Tottenham-Hotspur-FC",
    img: "../../assets/images/Tottenham-Hotspur-FC1.jpg",
  },
  {
    name: "Watford-FC",
    img: "../../assets/images/Watford-FC1.jpg",
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
    name: "West-Ham-United-FC",
    img: "../../assets/images/West-Ham-United-FC1.jpg",
  },
  {
    name: "Wolverhampton-Wanderers-FC",
    img: "../../assets/images/Wolverhampton-Wanderers-FC1.jpg",
  },
  {
    name: "Wolverhampton-Wanderers-FC",
    img: "../../assets/images/Wolverhampton-Wanderers-FC1.jpg",
  },
];
let values = [];
let badgesids = [];
let badgesflipped = 0;

// Shuffle 

Array.prototype.badgeshuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//Generates a new game

function newGame() {
    badgesflipped = 0;
    let output = '';
    badges.badgeshuffle();
    for(let i = 0; i < badges.length; i ++) {
        output += '<div id="badge_'+i+'" onclick="flipbadge(this,\''+badges[i]+'\"></div>'
    }
    document.getElementById('game-board').innerHTML = output;
}
