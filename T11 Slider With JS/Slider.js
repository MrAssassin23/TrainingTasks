let current_slide = 1;
const slider = document.querySelector('.slider');
const indicators = document.querySelectorAll('.btn-indicator');
const next_btn = document.querySelector('.next');
const prev_btn = document.querySelector('.prev');

next_btn.addEventListener('click', () => {
    if (current_slide != 5) { 
        slider.style.transform = "translateX(-"+ current_slide * 20 + "%)";
        indicators[current_slide-1].classList.remove('active')
        current_slide++;
        indicators[current_slide-1].classList.add('active')
    } else { 
        slider.style.transform = "translateX(0%)"; 
        indicators[current_slide-1].classList.remove('active')
        current_slide = 1;
        indicators[current_slide-1].classList.add('active')
    }
})

prev_btn.addEventListener('click', () => {
    if (current_slide != 1) { 
        slider.style.transform = "translateX(-"+ ((current_slide * 20)-40) + "%)" 
        indicators[current_slide-1].classList.remove('active')
        current_slide--;
        indicators[current_slide-1].classList.add('active')
    } else { 
        slider.style.transform = "translateX(-80%)"; 
        indicators[current_slide-1].classList.remove('active')
        current_slide = 5;
        indicators[current_slide-1].classList.add('active')
    }
})