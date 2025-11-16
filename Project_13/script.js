const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => (b === 0 ? "ERR_DIV_ZERO" : +(a / b).toFixed(2)),
};

//?The Button Selection

const result = document.querySelector("#result");

const inp1 = document.querySelector("#Number1");

const inp2 = document.querySelector("#Number2");

//?Function to get Numbers
function GetTwoNumbers() {
  const a = Number(inp1.value);
  const b = Number(inp2.value);

  if (inp1.value === "" || inp2.value === "") {
    result.textContent = "Please Enter Both Number";
    return null;
  }
  return { a, b };
}

let Button = document.querySelectorAll("button");
Button.forEach((btn) => {
  const BtnId = btn.id;
  let Answer;
  btn.addEventListener("click", function () {
    let Num = GetTwoNumbers();
    if (BtnId == "add") {
      Answer = operations.add(Num.a, Num.b);
    } else if (BtnId == "sub") {
      Answer = operations.sub(Num.a, Num.b);
    } else if (BtnId == "mul") {
      Answer = operations.mul(Num.a, Num.b);
    } else if (BtnId == "div") {
      Answer = operations.div(Num.a, Num.b);
    } else {
      Answer = 0;
      result.textContent = Answer;
      inp1.value = 0;
      inp2.value = 0;
    }
    result.textContent = Answer;
  });
});
