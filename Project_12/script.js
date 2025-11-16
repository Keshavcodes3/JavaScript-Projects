const Increment = document.querySelector("#Increment");
const Decrement = document.querySelector("#Decrement");
const Reset = document.querySelector("#Reset");
const text = document.querySelector("#text");

let count = 0;

function Incrementcnt() {
  count++;
  text.textContent = count;
}

function Decrementcnt() {
  if (count <= 0) {
    count = 0;
    text.textContent = count;
    return;
  }
  count--;
  text.textContent = count;
}

function Resetcnt() {
  count = 0;
  text.textContent = 0;
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.id;

    if (id === "Increment") Incrementcnt();
    else if (id === "Decrement") Decrementcnt();
    else Resetcnt();
  });
});
