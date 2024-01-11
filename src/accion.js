
/*---------------BOTON OSCURO------------*/
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeToggleBtn = document.getElementById('theme-toggle');

// Obtener el valor actual del tema del sistema
var isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Obtener el tema almacenado en el localStorage
var storedTheme = localStorage.getItem('color-theme');

// Función para habilitar el tema oscuro
function enableDarkTheme() {
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-theme', 'dark');
  themeToggleLightIcon.classList.remove('hidden');
  themeToggleDarkIcon.classList.add('hidden');
}

// Función para habilitar el tema claro
function enableLightTheme() {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('color-theme', 'light');
  themeToggleLightIcon.classList.add('hidden');
  themeToggleDarkIcon.classList.remove('hidden');
}

// Verificar si hay un tema almacenado en el localStorage
if (storedTheme) {
  // Aplicar el tema almacenado
  if (storedTheme === 'dark') {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
} else {
  // Si no hay tema almacenado, utilizar la preferencia del sistema
  if (isDarkModePreferred) {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
}

themeToggleBtn.addEventListener('click', function () {
  // Alternar entre temas oscuro y claro
  if (document.documentElement.classList.contains('dark')) {
    enableLightTheme();
  } else {
    enableDarkTheme();
  }
});

/*-----------navbar----------*/
// Obtener referencias a los elementos 
const btnNav = document.getElementById('boton');
const navbar = document.getElementById('navbar-language');

// Función para alternar la clase hidden en el navbar
function toggleNav() {
  navbar.classList.toggle('hidden');  
}

// Agregar listener de click al botón que abre/cierra 
btnNav.addEventListener('click', toggleNav);

