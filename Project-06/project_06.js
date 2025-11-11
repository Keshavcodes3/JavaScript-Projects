const profiles = [
  {
    name: "Elon Musk",
    bio: "CEO of Tesla and SpaceX. Innovator and risk-taker.",
    img: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/9fdc84e5-3a4e-59d5-a797-2d0cb2035815/1022a671-5141-5220-8745-76bff839b7d8.jpg",
  },
  {
    name: "Bill Gates",
    bio: "Co-founder of Microsoft and philanthropist.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
  },
  {
    name: "Sundar Pichai",
    bio: "CEO of Google, passionate about AI and innovation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png",
  },
];

const container = document.querySelector("#cardContainer");

function displayProfiles(list) {
  container.innerHTML = "";
  list.forEach(profile => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-all";
    card.innerHTML = `
      <img src="${profile.img}" alt="${profile.name}" class="w-24 h-24 rounded-full mx-auto mb-3 object-cover">
      <h2 class="text-xl font-semibold">${profile.name}</h2>
      <p class="text-md font-semibold text-gray-600">${profile.bio}</p>
    `;
    container.appendChild(card);
  });
}

displayProfiles(profiles);

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();
  const filtered = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchText)
  );
  displayProfiles(filtered);
});
