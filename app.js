const ratingButton = document.querySelector('.btn-rating-number');
const submitButton = document.querySelector('.button');

const gratitudeState = document.querySelector('.container-gratitude-state');
const ratingState = document.querySelector('.container-rating-state');

function replyClick(clickedId) {
    let ratingResult = clickedId;
    const ratingSelected = document.querySelector('.rating-selected');
    ratingSelected.innerHTML += 'You selected ' + ratingResult + ' out of 5';
}

function submitingResult() {

    ratingState.style.display = 'none';
    gratitudeState.style.display = 'flex';
}

submitButton.addEventListener('click', submitingResult);