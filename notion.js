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
  const refreshRate = 100;

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