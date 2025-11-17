const button = document.querySelector("button");
const Append=document.querySelector("#Append");


async function RandomQuote() {
  try {
    const data = await fetch("https://dummyjson.com/quotes/random");
    const quote = await data.json();
    return quote;
  } catch {
    return "Error !";
  }
}
let isAlreadyClicked=false;
button.addEventListener("click", function () {
     if(isAlreadyClicked){
          return;
     }
     RandomQuote().then((ele) => {
         setTimeout(()=>{
           MakeCard(ele.quote, ele.author);
         },10)
     });
});

function MakeCard(Quote, teller) {
     Append.innerHTML=""
  const div = document.createElement("div");
  div.className =
    "max-w-md mx-auto my-5 p-6 bg-gray-100 border-l-4 border-purple-600 rounded-lg shadow-md";
  div.innerHTML = `
          <p class="text-lg text-gray-900 leading-relaxed mb-4">
          ${Quote}
          </p>
          <p class="text-right font-bold text-purple-600">
           ${teller}
          </p>
     `;
     Append.appendChild(div)
}
