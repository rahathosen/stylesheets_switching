var path = "./css/#theme#.css";
const link = document.querySelector("#theme");

// to enable more security
let themeNames = ["dark", "light"];

function setTheme(name) {
  link.setAttribute("href", path.replace("#theme#", name));
  link.setAttribute("theme", name);
  localStorage.setItem("themeLocal", name);
}

function getTheme() {
  var theme = localStorage.getItem("themeLocal");
  if (!theme || theme == "null") {
    setTheme("light");
    let currentTheme = document.querySelector("#theme").getAttribute("theme");
    localStorage.setItem("themeLocal", currentTheme);
    theme = currentTheme;
  } else if (!themeNames.some((v) => v.toLowerCase() == theme)) {
    // change the theme to default
    setTheme("light");
  }
  return theme;
}

function loadTheme() {
  var themeName = getTheme();
  setTheme(themeName);
}

loadTheme();

function toggleTheme() {
  let currentTheme = getTheme();
  setTheme(currentTheme == "dark" ? "light" : "dark");
}
