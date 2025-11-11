document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#userForm");
  const gallery = document.querySelector("#gallery");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const age = form.age.value.trim();
    const email = form.email.value.trim();
    const picUrl = form.picUrl.value.trim();

    // Basic validity
    if (!picUrl) {
      alert("Please provide an image URL");
      return;
    }

    // Create card
    const card = document.createElement("div");
    card.className =
      "border-4 border-red-500 rounded-xl overflow-hidden shadow hover:shadow-lg transition";

    const img = document.createElement("img");
    img.src = picUrl;
    img.alt = `${name}’s profile pic`;
    img.className = "w-full h-48 object-cover";

    img.onerror = () => {
      img.src = "https://via.placeholder.com/150?text=Invalid+Image";
    };

    const info = document.createElement("div");
    info.className = "p-4 bg-white";
    info.innerHTML = `
          <h3 class="font-bold text-lg">${name}</h3>
          <p class="text-gray-600">Age: ${age}</p>
          <p class="text-gray-600">Email: ${email}</p>
        `;

    card.append(img, info);
    gallery.prepend(card); // show newest first

    form.reset();
  });
});
