// determine new numbers
const textareaEl = document.querySelector('.textarea');
  
// determine new numbers
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
  
// determine new numbers
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const tiktokNumberEl = document.querySelector('.stat__number--tiktok');
const instagramNumberEl = document.querySelector('.stat__number--instagram');


const inputHandler = () => {
  // example of input validation
  if (textareaEl.value.includes('<script>')) {
    alert("No puedes usar <script> en tu texto.");
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }

  // determine new numbers
  let numberOfWords = textareaEl.value.split(' ').length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 63206 - numberOfCharacters;
  const tiktokCharactersLeft = 4000 - numberOfCharacters;
  const instagramCharactersLeft = 2200 - numberOfCharacters;

    // add visual indicator if 420 characters
  if (numberOfCharacters === 420) {
    charactersNumberEl.classList.add('alt');
  } else {
    charactersNumberEl.classList.remove('alt');
  }

    // add visual indicator if 420 words
  if (numberOfWords === 420) {
    wordsNumberEl.classList.add('alt');
} else {
    wordsNumberEl.classList.remove('alt');
  }

    // add visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add('stat__number--limit');
  } else {
    twitterNumberEl.classList.remove('stat__number--limit');
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add('stat__number--limit');
  } else {
    facebookNumberEl.classList.remove('stat__number--limit');
  }

  if (tiktokCharactersLeft < 0) {
    tiktokNumberEl.classList.add('stat__number--limit');
  } else {
    tiktokNumberEl.classList.remove('stat__number--limit');
  }

  if (instagramCharactersLeft < 0) {
    instagramNumberEl.classList.add('stat__number--limit');
  } else {
    instagramNumberEl.classList.remove('stat__number--limit');
  }

    // set new numbers
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  tiktokNumberEl.textContent = tiktokCharactersLeft;
  instagramNumberEl.textContent = instagramCharactersLeft;
};

textareaEl.addEventListener('input', inputHandler);