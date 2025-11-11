const bookmarkForm = document.querySelector("#bookmarkForm");
const titleInput = document.querySelector("#titleInput");
const urlInput = document.querySelector("#urlInput");
const bookmarkContainer = document.querySelector("#bookmarkContainer");

// Load existing bookmarks
window.addEventListener("DOMContentLoaded", function () {
  const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  savedBookmarks.forEach((bookmark) => renderBookmark(bookmark));
});

// Render function
function renderBookmark(bookmark) {
  const card = document.createElement("div");
  card.className = "bg-gray-800 p-4 rounded shadow flex justify-between items-center";

  const link = document.createElement("a");
  link.href = bookmark.url;
  link.target = "_blank";
  link.textContent = bookmark.title;
  link.className = "text-blue-400 hover:underline";

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "text-red-400 hover:text-red-600";
  delBtn.addEventListener("click", function () {
    deleteBookmark(bookmark.url);
    card.remove();
  });

  card.appendChild(link);
  card.appendChild(delBtn);
  bookmarkContainer.appendChild(card);
}

// Handle new bookmark submission
bookmarkForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titleVal = titleInput.value.trim();
  const urlVal = urlInput.value.trim();

  if (!titleVal || !urlVal) return;

  const newBookmark = { title: titleVal, url: urlVal };

  renderBookmark(newBookmark);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  bookmarkForm.reset();
});

// Delete bookmark function
function deleteBookmark(url) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const filtered = bookmarks.filter((b) => b.url !== url);
  localStorage.setItem("bookmarks", JSON.stringify(filtered));
}
