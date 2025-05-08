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
const linkedinNumberEl = document.querySelector('.stat__number--linkedin');
const youtubeNumberEl = document.querySelector('.stat__number--youtube');
const pinterestNumberEl = document.querySelector('.stat__number--pinterest');
const redditNumberEl = document.querySelector('.stat__number--reddit');


const inputHandler = () => {
  // input validation
  if (textareaEl.value.includes('<script>')) {
    alert("No puedes usar <script> en tu texto.");
    textareaEl.value = textareaEl.value.replace('<script>', '');
  } else if (textareaEl.value.includes('tula')) {
    alert("¿Que importa el nombre?");
    textareaEl.value = textareaEl.value.replace('tula', '');
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
  const linkedinCharactersLeft = 1300 - numberOfCharacters;
  const youtubeCharactersLeft = 100 - numberOfCharacters;
  const pinterestCharactersLeft = 500 - numberOfCharacters;
  const redditCharactersLeft = 40000 - numberOfCharacters;

    // add visual if characters is 420
  if (numberOfCharacters === 420) {
    charactersNumberEl.classList.add('alt');
  } else {
    charactersNumberEl.classList.remove('alt');
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

  if (linkedinCharactersLeft < 0) {
    linkedinNumberEl.classList.add('stat__number--limit');
  } else {
    linkedinNumberEl.classList.remove('stat__number--limit');
  }

  if (youtubeCharactersLeft < 0) {
    youtubeNumberEl.classList.add('stat__number--limit');
  } else {
    youtubeNumberEl.classList.remove('stat__number--limit');
  }

  if (pinterestCharactersLeft < 0) {
    pinterestNumberEl.classList.add('stat__number--limit');
  } else {
    pinterestNumberEl.classList.remove('stat__number--limit');
  }

  if (redditCharactersLeft < 0) {
    redditNumberEl.classList.add('stat__number--limit');
  } else {
    redditNumberEl.classList.remove('stat__number--limit');
  }

    // set new numbers
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  tiktokNumberEl.textContent = tiktokCharactersLeft;
  instagramNumberEl.textContent = instagramCharactersLeft;
  linkedinNumberEl.textContent = linkedinCharactersLeft;
  youtubeNumberEl.textContent = youtubeCharactersLeft;
  pinterestNumberEl.textContent = pinterestCharactersLeft;
  redditNumberEl.textContent = redditCharactersLeft;
};

textareaEl.addEventListener('input', inputHandler);