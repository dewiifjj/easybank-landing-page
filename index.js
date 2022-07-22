const burger = document.querySelector(".burger");
const nav = document.querySelector(".header nav");

burger.addEventListener('click', function() {
    // manggil navbar
    nav.classList.toggle("slide");
    // manggil burger
    burger.classList.toggle('toggle');
  });
