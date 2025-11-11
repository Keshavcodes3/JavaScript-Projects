const imgInput = document.querySelector("#imgInput");
const nameInput = document.querySelector("#nameInput");
const bioInput = document.querySelector("#bioInput");
const form = document.querySelector("#profileForm");
const container = document.querySelector("#cardContainer");
const searchInput = document.querySelector("#searchInput"); // 👈 renamed properly

let profiles = [];

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameVal = nameInput.value.trim();
  const bioVal = bioInput.value.trim();
  const url = imgInput.value.trim();

  if (!nameVal || !bioVal || !url) return;

  const profile = { name: nameVal, bio: bioVal, url: url };
  profiles.push(profile);

  renderProfiles(profiles);
  form.reset();
});

// 🔍 SEARCH FEATURE
searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase().trim();
  const filtered = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(value)
  );
  renderProfiles(filtered);
});

// 🧱 RENDER FUNCTION
function renderProfiles(list) {
  container.innerHTML = ""; // clear old cards
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-all";
    card.innerHTML = `
      <img src="${p.url}" alt="${p.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover">
      <h2 class="text-xl font-semibold">${p.name}</h2>
      <p class="text-md font-semibold text-gray-600">${p.bio}</p>
    `;
    container.appendChild(card);
  });
}
