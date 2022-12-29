const checkbox = document.getElementById('checkbox');
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark");
}

checkbox.addEventListener('change', () => {
    document.body.classList.toggle("dark");

    let theme = "light";

    if(document.body.classList.contains("dark")) {
      theme = "dark";
    }
    
    localStorage.setItem("theme", theme);
});

/* const theme = localStorage.getItem('theme');

if( theme ) {
  setTheme(theme);
}

localStorage.setItem('theme', checkbox); */
