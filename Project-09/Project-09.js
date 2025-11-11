const noteForm = document.querySelector('#noteForm');
const noteInput = document.querySelector("#noteInput");
const notesContainer = document.querySelector("#notesContainer");

// 🧠 Step 1: Load saved notes when page loads
window.addEventListener('DOMContentLoaded', function() {
     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

     savedNotes.forEach(function(noteText){
          const card = document.createElement('div');
          const h2 = document.createElement('h2');
          h2.className = "text-lg text-blue-600";
          h2.textContent = noteText;
          card.className = "bg-gray-800 p-4 rounded shadow";
          card.appendChild(h2);
          notesContainer.appendChild(card);
     });
});
noteForm.addEventListener('submit', function(evt){
     evt.preventDefault();

     const noteInputVal = noteInput.value.trim();
     if(!noteInputVal) return;

     // 1️⃣ Create the note card visually
     const card = document.createElement('div');
     const h2 = document.createElement('h2');
     h2.className = "text-lg text-blue-600";
     h2.textContent = noteInputVal;
     card.className = "bg-gray-800 p-4 rounded shadow";
     card.appendChild(h2);
     notesContainer.appendChild(card);

     // 2️⃣ Save the note to localStorage
     let notes = JSON.parse(localStorage.getItem("notes")) || []; // get old notes or empty array
     notes.push(noteInputVal); // add new one
     localStorage.setItem("notes", JSON.stringify(notes)); // save back

     // 3️⃣ Reset the form input
     noteForm.reset();
});
