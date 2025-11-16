const input = document.querySelector("#cityInput");
const button = document.querySelector("#getWeather");
const weatherResult = document.querySelector("#weatherResult");
const output = document.querySelector("#status");
const RecentCity = document.querySelector("#Recent");
let RecentlyViewdCity = [];

const weatherColors = {
  Clear: "#ffe066",
  Rain: "#4dabf7",
  Clouds: "#adb5bd",
  Snow: "#f8f9fa",
  Thunderstorm: "#495057",
  Drizzle: "#74c0fc",
  Mist: "#ced4da",
  Haze: "#dee2e6",
  Tornado: "#212529",
};

function SetBodyColor(Type) {
  const Color = weatherColors[Type] || "#ffffff"; // fallback color
  document.body.style.backgroundColor = Color;
}

function CreateCard(Type, data) {
  weatherResult.textContent = "";
  const div = document.createElement("div");

  const color = weatherColors[Type] || "blue";

  div.className =
    "bg-slate-300 backdrop-blur-md rounded-xl p-4 shadow-md mt-4 text-center";

  div.innerHTML = `
    <p class="text-2xl font-bold text-red-700">City : ${data.name}</p>
    <p class="text-lg">Temperature: ${data.main.temp} °C</p>
    <p class="text-lg">Weather: ${Type} <span id="span1"></span></p>
  `;

  const span1 = div.querySelector("#span1");
  span1.className = "w-8 h-8 rounded-full inline-block align-middle";
  span1.style.backgroundColor = color;

  weatherResult.appendChild(div);

  SetBodyColor(Type);
}

async function GetWeather(city) {
  try {
    const APIKey = "Your_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    console.log(`URL: ${url}`);

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      output.textContent = data.message || "Some Error Occurred";
      input.value = "";
      return;
    }

    localStorage.setItem(data.name, JSON.stringify(data.main.temp));

    if (!RecentlyViewdCity.includes(data.name)) {
      RecentlyViewdCity.push(data.name);
    }
    ShowCities();
    const Type = data.weather[0].main;
    CreateCard(Type, data);
  } catch (err) {
    if (err instanceof TypeError) {
      output.textContent = "Network issue. Try again";
      weatherResult.innerHTML = "";
      return;
    }
    output.textContent = "Something Error Occurred";
    weatherResult.innerHTML = "";
  }
}

button.addEventListener("click", function () {
  let city = input.value.trim();
  if (!city) {
    output.textContent = "Please Enter a valid Name";
    return;
  }
  GetWeather(city);
});

function ShowCities() {
  RecentCity.innerHTML = ""; // Clear previous list to avoid duplicates
  if (RecentlyViewdCity.length === 0) return;

  const ul = document.createElement("ul");
  ul.className = "list-disc list-inside space-y-2 text-gray-800";

  RecentlyViewdCity.forEach((key) => {
    const temp = JSON.parse(localStorage.getItem(key));
    const li = document.createElement("li");
    li.textContent = `${key} : ${temp} °C`;
    ul.appendChild(li);
  });

  RecentCity.appendChild(ul);
}
