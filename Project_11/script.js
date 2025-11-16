function GenarateRandomHexColorCode() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
}

const button = document.querySelector("button");
const NameColor = document.querySelector("#NameColor");
button.addEventListener("click", ()=> {
  const color = GenarateRandomHexColorCode();
  NameColor.textContent = color;
  document.body.style.backgroundColor = color;
});