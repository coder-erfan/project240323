import data from "../data/db.json";

const buttonData = data.buttons;

function craeteButton(buttonInfo) {
    const buttonDom = document.createElement("i");
    buttonDom.classList.add("buttons");
    buttonInfo.classNames.forEach(element => {
      buttonDom.classList.add(element)
    });
    return buttonDom
}

export const buttonGroup = document.createElement("div");
buttonGroup.classList.add("buttonGroup")


buttonData.forEach((button)=>{
  const buttonDom = craeteButton(button);
  buttonGroup.append(buttonDom)
})