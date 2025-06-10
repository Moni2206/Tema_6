/*const css = document.querySelector("#lightmode");
console.log(css.href);

const btn3 = document.querySelector("#switchBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3() {
  if (css.href.includes("css/custom_dark.css")) {
    css.href = "css/custom.css";
    switchtext3.textContent = "Dark Mode";
    console.log(css.href);
  } else {
    css.href = "css/custom_dark.css";
    switchtext3.textContent = "Light Mode";
    console.log(css.href);
  }
}*/

const toggle = document.getElementById("darkToggle");
const text = document.getElementById("switchtext3");

// Start med light mode
window.onload = function () {
  document.body.classList.add("light-mode");
  text.textContent = "Dark mode"; // Starttekst
};

toggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    text.textContent = "Light mode"; // Skift tekst!
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    text.textContent = "Dark mode"; // Skift tekst!
  }
});
