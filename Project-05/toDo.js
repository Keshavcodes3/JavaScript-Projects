const form=document.querySelector("#noteForm")

const titleInput=document.querySelector("#title")

const contentInput=document.querySelector("#content")

const message=document.querySelector("#message")

const notesContainer=document.querySelector("#notes")


form.addEventListener('submit',function(evt){
     evt.preventDefault();
     const title=titleInput.value.trim();
     const content=contentInput.value.trim();
     if(!title || !content) return ;

     const note=document.createElement('div');
     note.className="bg-gray-50 border rounded-md p-3 relative";
     note.innerHTML=`
          <h3 class="font-semibold text-indigo-700">${title}</h3>
          <p class="text-gray-700 mt-1">${content}</p>
          <button class="absolute top-2 right-2 text-red-500 text-sm delete">✕</button>
     `
     notesContainer.appendChild(note);
     message.classList.remove(note);
      message.classList.remove("hidden");
     setTimeout(() => message.classList.add("hidden"), 2000);

     // clear input fields
     titleInput.value = "";
     contentInput.value = "";

});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});