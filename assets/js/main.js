//Badge images storage

let badgeArray = [
  {
    name: "Mo Salah",
    img: "../assets/images/testing.jpg",
  },
  {
    name: "Arsenal-FC",
    img: src="../assets/images/Arsenal-FC1.jpg",
  },
  {
    name: "Aston-Villa-FC",
    img: src="../assets/images/Aston-Villa-FC1.jpg",
  },
  {
    name: "Brighton-&-Hove-Albion",
    img: src="../assets/images/Brighton-&-Hove-Albion1.jpg",
  },
  {
    name: "Burnley-FC",
    img: src="../assets/images/Burnley-FC1.jpg",
  },
  {
    name: "Chelsea-FC",
    img: src="../assets/images/Chelsea-FC1.jpg",
  },
  {
    name: "Crystal-Palace-FC",
    img: src="../assets/images/Crystal-Palace-FC1.jpg",
  },
  {
    name: "Everton-FC1",
    img: src="../assets/images/Everton-FC1.jpg",
  },
  {
    name: "Leicester-City-FC",
    img: src="../assets/images/Leicester-City-FC1.jpg",
  },
  {
    name: "Liverpool-FC",
    img: src="../assets/images/Liverpool-FC1.jpg",
  },
  {
    name: "Manchester-City-FC",
    img: src="../assets/images/Manchester-City-FC1.jpg",
  },
  {
    name: "Manchester-United-FC",
    img: src="../assets/images/Manchester-United-FC1.jpg",
  },
  {
    name: "Newcastle-United-FC",
    img: src="../assets/images/Newcastle-United-FC1.jpg",
  },
  {
    name: "Norwich-City-FC",
    img: src="../assets/images/Norwich-City-FC1.jpg",
  },
  {
    name: "Sheffield-United-FC",
    img: src="../assets/images/Sheffield-United-FC1.jpg",
  },
  {
    name: "Southampton-FC",
    img: src="../assets/images/Southampton-FC1.jpg",
  },
  {
    name: "Tottenham-Hotspur-FC",
    img: src="../assets/images/Tottenham-Hotspur-FC1.jpg",
  },
  {
    name: "Watford-FC",
    img: src="../assets/images/Watford-FC1.jpg",
  },
  {
    name: "West-Ham-United-FC",
    img: src="../assets/images/West-Ham-United-FC1.jpg",
  },
  {
    name: "Wolverhampton-Wanderers-FC",
    img: src="../assets/images/Wolverhampton-Wanderers-FC1.jpg",
  },
];

//variables for the game

let gameGrid = badgeArray.concat(badgeArray);
let count = 0;
let firstGuess = "";
let secondGuess = "";
let sameBadge = null;
let badgeDelay = 1000;

//Create a random board on page load

gameGrid.sort(() => 0.5 - Math.random());

//Creates the game layout

const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach((item) => {
  const badge = document.createElement("div");
  badge.classList.add("badge");
  badge.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  badge.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(badge);
  badge.appendChild(front);
  badge.appendChild(back);
});

//Game function, decides whether badges match or not

grid.addEventListener("click", function (event) {
  let clicked = event.target;

  if (clicked.nodeName === "SECTION" || clicked === sameBadge) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, badgeDelay);
        setTimeout(resetGuesses, badgeDelay);
        tempAlert("That's A Match!", 1000);
      } else {
        setTimeout(resetGuesses, badgeDelay);
      }
    }
    sameBadge = clicked;
  }
});

const match = () => {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((badge) => {
    badge.classList.add("match");
  });
};

//Resets the guess if incorrect

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  let selected = document.querySelectorAll(".selected");
  selected.forEach((badge) => {
    badge.classList.remove("selected");
  });
};

//Shows pop up div letting the player know it's a match

function tempAlert(msg, duration) {
  let message = document.createElement("div");
  message.setAttribute(
    "style",
    "position: absolute; top: 60%; left: 40%; background-color: rgba(255, 5, 5, 0.8); border: solid black 1px; font-family: 'Lato', sans-serif; font-size: 50px"
  );
  message.innerHTML = msg;
  setTimeout(function () {
    message.parentNode.removeChild(message);
  }, duration);
  document.body.appendChild(message);
}
