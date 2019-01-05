var taskList = document.querySelectorAll('.slideShow li');

var prevBtn = document.querySelector('.leftArrow');
var nextBtn = document.querySelector('.rightArrow');

var counter = 0;

taskList[counter].classList.add('visible');
nextBtn.addEventListener('click', nextPicture);
prevBtn.addEventListener('click', prevPicture);

function nextPicture(ev) {
    ev.preventDefault();

    taskList[counter].classList.remove('visible');

    if(counter === taskList.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    taskList[counter].classList.add('visible');
}


function prevPicture(ev) {
    ev.preventDefault();

    taskList[counter].classList.remove('visible');

    if(counter === 0) {
        counter = taskList.length - 1;
    } else {
        counter--;
    }
    taskList[counter].classList.add('visible');
}


