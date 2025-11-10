let taskInput=document.querySelector("#taskInput");
const addBtn=document.querySelector("#addBtn");
const taskList=document.querySelector("#taskList")


addBtn.addEventListener('click',addTask)


taskInput.addEventListener('keypress',function(e){
     if(e.key=="Enter") addTask();
})

function addTask(){
     const text=taskInput.value.trim();
     if(!text) return;
     const li=document.createElement("li");
     li.className="flex justify-between items-center bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg";

     const Delbtn=document.createElement('button');
     Delbtn.className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition";
     Delbtn.textContent="Delete"

     const span=document.createElement("span");
     span.textContent=text;
     span.className="cursor-pointer select-none";

     li.appendChild(span);
     li.appendChild(Delbtn);
     taskList.appendChild(li);
     taskInput.value=" ";

     Delbtn.addEventListener('click',()=>{
          li.remove();
     })

     span.addEventListener('dblclick',function(){
          li.className="bg-green-100";
     })
}