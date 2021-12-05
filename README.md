# 🎭 notion-default-emoji

> Fixed on 5/12/2021 🎈  working again now yay
> 
> Please don't hesitate to open an issue on this little project if it happens to stop working again.

---
### 🌌 To have best experience using it on Windows remember there is this fancy shortcut `WinKey + .` that opens up an emoji selection window in any text field you happen to editing.
---

A userscript to override Notion new emoji styling, made beacsue I really don't like Twitter emoji style which is now enforced over the Notion webapp.

If you are as crazy as I am about emoji in your documentation this could help you.

Using this script will remove Notion image src overrides and revert to `alt` text of those images which happen to be your unicoded emoji *that depend on the system you are uusing*.

Currently works only on Firefox (with Greasemonkey extenstion), could be easily ported to extensions similar to Greasemonkey on Chrome.

## Usage
1. Get Greeasemonkey extension for Firefox.
2. Opene its menu and press `New user script...`
3. Paste contents of `notion.js` inside of the opened window
4. Save and refresh Notion page
