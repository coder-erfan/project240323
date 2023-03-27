import data from "../data/db.json";

const imgData = data.images;

function createCard(imginfo) {
  const cardDom = document.createElement("div");
  cardDom.classList.add("card");
  cardDom.style.backgroundImage = `url(${imginfo})`;
  return cardDom
}

export const cardGroup = document.createElement("div");
cardGroup.classList.add("cardGroup");

imgData.forEach((img)=>{
  const imgDom = createCard(img.address);
  cardGroup.append(imgDom)
})

