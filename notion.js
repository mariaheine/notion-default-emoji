// ==UserScript==
// @name     Notion Default Emoji
// @version  1
// @grant    none
// @include https://www.notion.so/*
// ==/UserScript==

// @ts-check

( function()
{

  const emojiClassName = "notion-emoji";
  const refreshRate = 10;

  let breakSpinnerLoop = false;

  emojiClearLoop();

  function emojiClearLoop()
  {
    /* ⭐ ---- ---- */

    if ( breakSpinnerLoop ) return;
    var emojis = document.getElementsByClassName( emojiClassName );
    clearSrcFields( emojis );
    window.setTimeout( emojiClearLoop, refreshRate );
    
    /* ---- ---- 🌠 */
  }

  function clearSrcFields( images )
  {
    /* ⭐ ---- ---- */
    
    Array.prototype.forEach.call( images, ( image ) =>
    {

      image.src = "";
      image.style.background = null;

      /* 
      This part handles the emojis in Notion which are missing "notion-emoji" class name,
      but which are always next to an unused <img> with such class name.
      */
      let nextSibling = image.nextSibling;
      if (nextSibling !== null) {
        if (nextSibling.tagName == "IMG") {
          nextSibling.src = "";
          nextSibling.parentElement.style.fontSize = nextSibling.style.width;
        }
      }

    } );
    
    /* ---- ---- 🌠 */
  }

  // * I am not sure if this optimization really is important
  // * But hey here it is! 🎈
  document.onfocus = function()
  {
    /* ⭐ ---- ---- */
    
    if ( breakSpinnerLoop === true )
    {
      breakSpinnerLoop = false;
      emojiClearLoop();
    }
    
    /* ---- ---- 🌠 */
  }

  document.onblur = function()
  {
    /* ⭐ ---- ---- */
    
    breakSpinnerLoop = true
    
    /* ---- ---- 🌠 */
  }

} )();