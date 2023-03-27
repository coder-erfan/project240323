import "../style.scss"
import { cardGroup } from "./cardGroup";
import { buttonGroup } from "./bottonGroup";

const appDom = document.querySelector("#app")
appDom.append(cardGroup)

cardGroup.append(buttonGroup)

const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

buttonLeft.addEventListener(("click"), ()=>{
  const allCards = document.querySelectorAll(".card");
  const buttons = document.querySelector(".buttonGroup")
  cardGroup.insertBefore(allCards[0], buttons)
});

buttonRight.addEventListener(("click"), ()=>{
  const allCards = document.querySelectorAll(".card");
  cardGroup.prepend(allCards[5])
  
});


