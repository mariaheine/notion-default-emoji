# 🎭 notion-default-emoji
A userscript to override Notion new emoji styling, made beacsue I really don't like Twitter emoji style which is now enforced over the Notion webapp.

If you are as crazy as I am about emoji in your documentation this could help you.

Using this script will remove Notion image src overrides and revert to `alt` text of those images which happen to be your unicoded emoji *that depend on the system you are uusing*.

Currently works only on Firefox, could be easily ported to extensions similar to Greasemonkey on Chrome.

## Usage
1. Get Greeasemonkey extension for Firefox.
2. Opene its menu and press `New user script...`
3. Paste contents of `notion.js` inside of the opened window
4. Save and refresh Notion page
