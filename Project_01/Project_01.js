const Quotes=[
     "Honesty is the best policy",
     "Do or Die",
     "Obsess with your work too much that nobody can Stop You",
     "Fuck Your mood , Keep Working"
]

const button=document.querySelector("button");

button.addEventListener('click',()=>{
     const quote=document.querySelector("h1");
     const index=Math.floor(Math.random()*4)
     quote.textContent=Quotes[index];
})