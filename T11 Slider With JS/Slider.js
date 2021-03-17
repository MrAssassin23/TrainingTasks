let current_slide = 1;
const slider = document.querySelector(".slider");
const indicators = document.querySelectorAll(".btn-indicator");
// const next_btn = document.querySelector('.next');
// const prev_btn = document.querySelector('.prev');

// next_btn.addEventListener('click', moveNext)

// prev_btn.addEventListener('click', moveBack)

function moveNext() {
  if (current_slide != 5) {
    slider.style.transform = "translateX(-" + current_slide * 20 + "%)";
    indicators[current_slide - 1].classList.remove("active");
    current_slide++;
    indicators[current_slide - 1].classList.add("active");
  } else {
    slider.style.transform = "translateX(0%)";
    indicators[current_slide - 1].classList.remove("active");
    current_slide = 1;
    indicators[current_slide - 1].classList.add("active");
  }
}
function moveBack() {
  if (current_slide != 1) {
    slider.style.transform = "translateX(-" + (current_slide * 20 - 40) + "%)";
    indicators[current_slide - 1].classList.remove("active");
    current_slide--;
    indicators[current_slide - 1].classList.add("active");
  } else {
    slider.style.transform = "translateX(-80%)";
    indicators[current_slide - 1].classList.remove("active");
    current_slide = 5;
    indicators[current_slide - 1].classList.add("active");
  }
}

let isClicked = 0;
let firstMove = 0;
let startPoint;


//Mouse Events
// slider.addEventListener("mousedown", (e) => {
//   isClicked = 1;
//   startPoint = e.pageX;
// });

// slider.addEventListener("mouseup", (e) => {
//   isClicked = 0;
//   firstMove = 0;
// });

// slider.addEventListener("mouseleave", (e) => {
//   isClicked = 0;
// });

// slider.addEventListener("mousemove", (e) => {
//     console.log(firstMove);
//   if (isClicked === 1) {
//     let x = e.pageX - startPoint;
//     if ((x === 50 || x > 50) && firstMove === 0) {
//       moveBack()
//       firstMove = 1;
//     } else if ((x === -50 || x < -50) && firstMove === 0) {
//       moveNext()
//       firstMove = 1;

//     }
//   }
// });

//Touch Events
slider.addEventListener("touchstart", (e) => {
    isClicked = 1;
    startPoint = e.touches[0].pageX;
  });
  
  slider.addEventListener("touchend", (e) => {
    isClicked = 0;
    firstMove = 0;
  });
  
  slider.addEventListener("mouseleave", (e) => {
    isClicked = 0;
  });
  
  slider.addEventListener("touchmove", (e) => {
      console.log(firstMove);
    if (isClicked === 1) {
      let x = e.touches[0].pageX - startPoint;
      if ((x === 50 || x > 50) && firstMove === 0) {
        moveBack()
        firstMove = 1;
      } else if ((x === -50 || x < -50) && firstMove === 0) {
        moveNext()
        firstMove = 1;
  
      }
    }
  });
