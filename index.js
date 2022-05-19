const globalButton = document.querySelector('#globalButton');
const container = document.querySelectorAll('.accordion-container');
const arrows = document.querySelectorAll('.accordion-header__button');
const content = document.querySelectorAll('.accordion-content');
let activeAccordion;

//Update the UI of the Global button
function updateState() {
  activeAccordion = document.querySelectorAll('article.active').length;
  if (activeAccordion === container.length) {
    globalButton.innerHTML = `Collapse All`;
  } else {
    globalButton.innerHTML = `Expand All`;
  }
}

function expand(i) {
  arrows[i].classList.add('rotate');
  container[i].classList.add('active');
  content[i].style.maxHeight = `${content[i].scrollHeight}px`;
  updateState();
}

function collapse(i) {
  arrows[i].classList.remove('rotate');
  container[i].classList.remove('active');
  content[i].style.maxHeight = null;
  updateState();
}

//Indivial component
for (let i = 0; i < container.length; i++) {
  arrows[i].addEventListener('click', (e) => {
    if (container[i].classList.contains('active')) {
      collapse(i);
    } else {
      expand(i);
    }
  });
}

//Global expand and collapse button
globalButton.addEventListener('click', (e) => {
  if (activeAccordion === container.length) {
    container.forEach((e, i) => {
      collapse(i);
    });
  } else {
    container.forEach((e, i) => {
      expand(i);
    });
  }
  updateState();
});
