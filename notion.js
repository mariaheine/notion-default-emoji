// ==UserScript==
// @name     Notion Default Emoji
// @version  1
// @grant    none
// @include https://www.notion.so/*
// ==/UserScript==

// Class names
const spinnerClassName = "loading-spinner";
const emojiClassName = "notion-emoji";

// Settings
const makeSmallEmojiBigger = true;
const smallEmojiBoxSize = "25px";
const smallEmojiFontSize = "18px";
const spinnerLoopRate = 15; // Make this a bit lower if the method sometimes doesnt work for you

(function () {
  var wasSpinnerActive = false;
  var breakSpinnerLoop = false;

  function spinnerLoop() {
    if (breakSpinnerLoop) return;

    var spinner = document.getElementsByClassName(spinnerClassName)[0];

    if (spinner === undefined) {
      if (wasSpinnerActive == true) {
        clearEmojis(document);
      }
      wasSpinnerActive = false;
      window.setTimeout(spinnerLoop, spinnerLoopRate);
    } else {
      wasSpinnerActive = true;
      window.setTimeout(spinnerLoop, spinnerLoopRate);
    }
  }

  function clearEmojis(element) {
    var emojis = element.getElementsByClassName(emojiClassName);
    clearSrcFields(emojis);
  }

  function clearSrcFields(images) {
    Array.prototype.forEach.call(images, (image) => {

      image.src = "";
      image.style.background = null;

      if (makeSmallEmojiBigger) enlargeSmallEmoji(image);

      /* 
      This part handles the emojis in Notion which are missing "notion-emoji" class name,
      but which are always next to an unused <img> with such class name.
      */
      var nextSibling = image.nextSibling;
      if (nextSibling !== null) {
        if (nextSibling.tagName === "IMG") {
          nextSibling.src = "";
          nextSibling.parentElement.style.fontSize = nextSibling.style.width;
        }
      }
    });
  }

  function enlargeSmallEmoji(emoji)
  {
    emoji.parentElement.style.lineHeight = null;
    emoji.parentElement.style.fontSize = smallEmojiFontSize;
    emoji.parentElement.style.height = smallEmojiBoxSize;
    emoji.parentElement.style.width = smallEmojiBoxSize;
  }

  document.onfocus = function() {
    if (breakSpinnerLoop === true)
    {
      breakSpinnerLoop = false;
      spinnerLoop();
    }
  } 

  document.onblur = function() { 
    breakSpinnerLoop = true 
  }

  spinnerLoop();

})();
