// DOM textarea
const textareaEl = document.querySelector('.textarea');
  
// DOM text
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
const sentencesNumberEl = document.querySelector('.stat__number--sentences');
const paragraphsNumberEl = document.querySelector('.stat__number--paragraphs');
const dotsNumberEl = document.querySelector('.stat__number--dots');
const spacesNumberEl = document.querySelector('.stat__number--spaces');

// DOM platforms
const platforms = ['twitter', 'facebook', 'tiktok', 'instagram', 'linkedin', 'youtube', 'pinterest', 'reddit'];

const platformEls = Object.fromEntries(
  platforms.map(p => [p, document.querySelector(`.stat__number--${p}`)])
);

// Core feature
const inputHandler = () => {
  const text = textareaEl.value;

  // Basic input validation to block specific unwanted content
  if (text.includes('<script>')) {
    alert("You cannot use <script> in your text.");
    textareaEl.value = text.replace('<script>', '');
    return;
  }

  // TEXT STATISTICS

  // Count words (ignoring extra spaces)
  const numberOfWords = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  // Count characters, ignoring newline characters (\n)
  const numberOfCharacters = text.replace(/\n/g, '').length;

  // Count sentences based on punctuation: ., !, or ? (not repeated)
  const numberOfSentences = (text.match(/(?<![.!?])[.!?](?![.!?])/g) || []).length;

  // Count paragraphs by counting line breaks, +1 to account for the first paragraph
  const numberOfParagraphs = (text.match(/\n/g) || []).length + 1;

  // Count dots
  const numberOfDots = (text.match(/\./g) || []).length;

  // Count spaces
  const numberOfSpaces = (text.match(/ /g) || []).length;


  // SOCIAL MEDIA CHARACTER LIMITS

  // Define the max character limits for each platform
  const platformLimits = {
    twitter: 280,
    facebook: 63206,
    tiktok: 4000,
    instagram: 2200,
    linkedin: 1300,
    youtube: 100,
    pinterest: 500,
    reddit: 40000
  };

  // Calculate remaining characters for each platform
  const platformLeft = Object.fromEntries(
    Object.entries(platformLimits).map(([platform, limit]) => [platform, limit - numberOfCharacters])
  );

  // Helper function: update DOM for each platform’s counter and visual warning
  const updateSocialStat = (element, value) => {
    element.textContent = value;
    element.classList.toggle('stat__number--limit', value < 0);
  };

  // Loop through all platforms and update their counters
  Object.entries(platformLeft).forEach(([platform, left]) => {
    updateSocialStat(platformEls[platform], left);
  });


  // Update basic text stat displays
  charactersNumberEl.textContent = numberOfCharacters;
  wordsNumberEl.textContent = numberOfWords;
  sentencesNumberEl.textContent = numberOfSentences;
  paragraphsNumberEl.textContent = numberOfParagraphs;
  dotsNumberEl.textContent = numberOfDots;
  spacesNumberEl.textContent = numberOfSpaces;
};

textareaEl.addEventListener('input', inputHandler);