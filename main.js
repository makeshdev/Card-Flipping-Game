const cards = [
  {
    name: "icon1",
    icon: "<img src='./icons/1.png'/>",
  },
  {
    name: "icon2",
    icon: "<img src='./icons/2.png'/>",
  },
  {
    name: "icon3",
    icon: "<img src='./icons/3.png'/>",
  },
  {
    name: "icon4",
    icon: "<img src='./icons/4.png'/>",
  },
  {
    name: "icon5",
    icon: "<img src='./icons/5.png'/>",
  },
  {
    name: "icon6",
    icon: "<img src='./icons/6.png'/>",
  },
  {
    name: "icon1",
    icon: "<img src='./icons/1.png'/>",
  },
  {
    name: "icon2",
    icon: "<img src='./icons/2.png'/>",
  },
  {
    name: "icon3",
    icon: "<img src='./icons/3.png'/>",
  },
  {
    name: "icon4",
    icon: "<img src='./icons/4.png'/>",
  },
  {
    name: "icon5",
    icon: "<img src='./icons/5.png'/>",
  },
  {
    name: "icon6",
    icon: "<img src='./icons/6.png'/>",
  },
];
let flipCard = [];
let clickCount = 0;
let missingClickCount = 0;
let matchedCardsCount = 0;

const card = document.getElementById("cards");
const totalClick = document.getElementById("count");
const missClick = document.getElementById("miss");

for (let i = cards.length - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
}

cards.forEach((element, index) => {
  const box = document.createElement("div");
  box.setAttribute("id", index);
  box.classList.add("active");
  card.appendChild(box);
  box.addEventListener("click", function () {
    clickCount++;
    totalClick.innerText = clickCount;
    if (flipCard.length < 2) {
      let elementId = this.getAttribute("id");
      flipCard.push(this);
      box.innerHTML = cards[elementId].icon;
      const card1 = flipCard[0].getAttribute("id");
      const card2 = flipCard[1].getAttribute("id");
      setTimeout(() => {
        if (flipCard.length == 2) {
          if (cards[card1].name === cards[card2].name) {
            flipCard[0].style.backgroundColor = "#7c5fa0";
            flipCard[0].style.cursor = "unset";
            flipCard[0].style.visibility = "hidden";
            flipCard[0].innerHTML = "";
            flipCard[1].style.backgroundColor = "#7c5fa0";
            flipCard[1].style.cursor = "unset";
            flipCard[1].style.visibility = "hidden";
            flipCard[1].innerHTML = "";
            matchedCardsCount += 2;
          } else {
            missingClickCount++;
            missClick.innerText = missingClickCount;
            flipCard[0].innerHTML = "";
            flipCard[1].innerHTML = "";
          }
        }
        flipCard = [];

        if (matchedCardsCount === cards.length) {
          let h1 = document.createElement("h1");
          h1.innerText = "YOU WON!";
          h1.classList.add("won");
          document.body.appendChild(h1);
        }
      }, 1000);
    }
  });
});

function reload() {
  location.reload();
}
