// DOM textarea
const textareaEl = document.querySelector('.textarea');
  
// DOM text
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
const sentencesNumberEl = document.querySelector('.stat__number--sentences');
const paragraphsNumberEl = document.querySelector('.stat__number--paragraphs');
  
// DOM social media
// const twitterNumberEl = document.querySelector('.stat__number--twitter');
// const facebookNumberEl = document.querySelector('.stat__number--facebook');
// const tiktokNumberEl = document.querySelector('.stat__number--tiktok');
// const instagramNumberEl = document.querySelector('.stat__number--instagram');
// const linkedinNumberEl = document.querySelector('.stat__number--linkedin');
// const youtubeNumberEl = document.querySelector('.stat__number--youtube');
// const pinterestNumberEl = document.querySelector('.stat__number--pinterest');
// const redditNumberEl = document.querySelector('.stat__number--reddit');

const platforms = ['twitter', 'facebook', 'tiktok', 'instagram', 'linkedin', 'youtube', 'pinterest', 'reddit'];

const platformEls = Object.fromEntries(
  platforms.map(p => [p, document.querySelector(`.stat__number--${p}`)])
);



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
  // determine number of characters (not counting \n) 
  const numberOfCharacters = textareaEl.value.replace(/\n/g, '').length;
  
  
  // determine number of sentences (include ending with [.!?])[.!?](?![.!?])/g) || [])
  const text = textareaEl.value;
  const numberOfSentences = (text.match(/(?<![.!?])[.!?](?![.!?])/g) || []).length;

  // determine number of paragraphs
  const newlineMatches = text.match(/\n/g);
  const numberOfParagraphs = newlineMatches ? newlineMatches.length : 0;
  
  
  // determine number of social media limits
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

  // Utility to update platform limits and class toggles
  const updateSocialStat = (element, limitLeft) => {
  element.textContent = limitLeft;
  element.classList.toggle('stat__number--limit', limitLeft < 0);
  };

  updateSocialStat(platformEls.twitter, twitterCharactersLeft);
  updateSocialStat(platformEls.facebook, facebookCharactersLeft);
  updateSocialStat(platformEls.tiktok, tiktokCharactersLeft);
  updateSocialStat(platformEls.instagram, instagramCharactersLeft);
  updateSocialStat(platformEls.linkedin, linkedinCharactersLeft);
  updateSocialStat(platformEls.youtube, youtubeCharactersLeft);
  updateSocialStat(platformEls.pinterest, pinterestCharactersLeft);
  updateSocialStat(platformEls.reddit, redditCharactersLeft);

  // set new numbers for other indicators
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  sentencesNumberEl.textContent = numberOfSentences;
  paragraphsNumberEl.textContent = numberOfParagraphs + 1;
  
  // set new numbers for social media indicators 
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