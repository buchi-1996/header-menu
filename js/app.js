const menuToggle = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.top-head nav');
const line_1 = document.querySelector('.toggle-btn .line-1');
const line_2 = document.querySelector('.toggle-btn .line-2');
const line_3 = document.querySelector('.toggle-btn .line-3');

menuToggle.addEventListener('click', (e) => {
    if (e.target) {
        navMenu.classList.toggle('show');
        line_1.classList.toggle('display');
        line_2.classList.toggle('display');
        line_3.classList.toggle('display');
    }
    

})

