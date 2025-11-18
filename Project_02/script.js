const Form = document.querySelector("#Form");
const Name = document.querySelector("#Name");
const Email = document.querySelector("#Email");
const NameSmall = document.querySelector("#NameSmall");
const EmailSmall = document.querySelector("#EmailSmall");
const Info = document.querySelector("#Info");

// CONTACT FORM CHECKER
function ContactChecker() {
  let NameValid = false;
  let EmailValid = false;

  const NameVal = Name.value.trim();
  const EmailVal = Email.value.trim();

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!NameVal) {
    NameSmall.textContent = "Please enter a name";
    NameSmall.classList.remove("hidden");
  } else if (!nameRegex.test(NameVal)) {
    NameSmall.textContent = "Enter a valid name";
    NameSmall.classList.remove("hidden");
  } else {
    NameSmall.classList.add("hidden");
    NameValid = true;
  }

  if (!EmailVal) {
    EmailSmall.textContent = "Please enter an email";
    EmailSmall.classList.remove("hidden");
  } else if (!emailRegex.test(EmailVal)) {
    EmailSmall.textContent = "Enter a valid email";
    EmailSmall.classList.remove("hidden");
  } else {
    EmailSmall.classList.add("hidden");
    EmailValid = true;
  }

  if (NameValid && EmailValid) {
    localStorage.setItem(EmailVal, NameVal);
    const Div = document.createElement("div");
    Div.className = "bg-green-500 text-white rounded-xl px-4 py-2 mt-3 shadow";
    Div.textContent = "Thanks! We'll reach out shortly.";

    Info.appendChild(Div);
    setTimeout(() => Div.remove(), 3000);

    Name.value = "";
    Email.value = "";
  }
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  ContactChecker();
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");

  const size = Math.random() * 10 + 6;
  const colors = ["#ff00f7", "#00eaff", "#ffef00", "#ff4a4a", "#8cff00"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  sparkle.style.position = "absolute";
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";
  sparkle.style.borderRadius = "50%";
  sparkle.style.pointerEvents = "none";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.background = color;
  sparkle.style.boxShadow = `0 0 15px ${color}`;
  sparkle.style.opacity = 1;
  sparkle.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = 0;
    sparkle.style.transform = "scale(0)";
  }, 10);

  setTimeout(() => sparkle.remove(), 500);
});

// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let open = false;

function toggleMenu() {
  open = !open;

  if (open) {
    mobileMenu.classList.remove("scale-0", "opacity-0");
    mobileMenu.classList.add("scale-100", "opacity-100");
  } else {
    mobileMenu.classList.add("scale-0", "opacity-0");
    mobileMenu.classList.remove("scale-100", "opacity-100");
  }
}

menuBtn.addEventListener("click", toggleMenu);
