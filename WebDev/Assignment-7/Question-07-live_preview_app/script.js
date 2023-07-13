const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const imgInput = document.querySelector('#img');
const authorInput = document.querySelector('#author');
const categoryInput = document.querySelector('#category');
const storyInput = document.querySelector('#story');
const right = document.querySelector('.right');

const storyTitle = document.querySelector('.storyTitle');
const storyImg = document.querySelector('.storyImg');
const storyContent = document.querySelector('.storyContent');
const authorName = document.querySelector('.authorName');

right.style.visibility = 'hidden';

form.addEventListener('input', updatePreview);

form.addEventListener('submit', submitForm);

function updatePreview() {
    const isFormEmpty =
    titleInput.value === ''

  if (isFormEmpty) {
    right.style.visibility = 'hidden';
  } else {

    right.style.visibility = 'visible';
    storyTitle.textContent = titleInput.value;
    storyImg.src = imgInput.value;
    storyContent.textContent = storyInput.value;
    authorName.textContent = `Written By ${authorInput.value}`;
}
}

function submitForm(e) {
    e.preventDefault();
    updatePreview()
    form.reset()
}

updatePreview();
