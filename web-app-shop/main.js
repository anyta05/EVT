function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let header = document.querySelector("header");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        header.style.overflow = "hidden"; 
    } else {
        header.style.overflow = "visible";
    }
}


  
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    body.classList.toggle('light-theme');
    button.textContent = body.classList.contains('light-theme') ? '☀️' : '🌙';
  }

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const carousel = document.querySelector('.carousel');
        if (index >= totalSlides) currentIndex = 0; 
        else if (index < 0) currentIndex = totalSlides - 1;
        else currentIndex = index;

        const offset = -currentIndex * 100 + "%";
        carousel.style.transform = `translateX(${offset})`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    
    setInterval(nextSlide, 10000);

