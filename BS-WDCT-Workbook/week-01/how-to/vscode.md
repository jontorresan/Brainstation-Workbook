# How To VSCode
You are free to use any other editor you feel proficient in, but VSCode will be your main editor you will use in class. You may customize and modify extensions to suit your needs. This guide will get you started on familiarizing yourself with VSCode and tweak some basic settings to enhance your coding experience.
<!-- #### Prerequisites
VSCode -->

## Shortcuts
Similar to `cmd` + `t` opening a new tab in Google Chrome, these shortcuts make using VSCode a little easier.

- `cmd` `shft` + `x` opens up extensions marketplace
- `ctrl` + `` ` `` opens up in-editor console
- `cmd` + `o` open a project folder
- `cmd` + `w` close a tab
- `cmd` + `,` opens settings
- `opt` `shft` + `F` auto format document
- `cmd` + `d` selects multiple of the highlighted text within the file
- `ctrl` + `alt` + `t` opens integrated terminal in VS Code

## Extensions
Search these items in the extensions marketplace. There are much more extensions available than the ones listed. You can experiment and try different extensions to your liking. Remember not to flood your editor with unnecessary extensions though! You may encounter an incompatibility.

#### General
- Atom Keymap (recommended)
- VSCode Great Icons (recommended)
- Open in Browser (recommended)

#### HTML / CSS
- HTML Snippets
- HTML CSS Support
- Auto Close Tag (recommended)
- HTML Class Suggestions

#### Javascript
- Javascript (ES6) code snippets
- Javascript Standard Style
- ESLint

...And much, much more, but this should be enough to get you started!

## Settings
Try it yourself! After installing the recommended extensions, using `cmd` + `,` , open the settings in VS Code. You should see the setting screens in two halves, on the left are the default settings and on the right are the settings that we want to overwrite from the default. Add these changes to your user settings (the right screen)
```
{
"atomKeymap.promptV3Features": true,
"editor.multiCursorModifier": "ctrlCmd",
"editor.formatOnPaste": true,
"window.zoomLevel": -1,
"explorer.confirmDragAndDrop": false,
"files.autoSave": "afterDelay",
"editor.wordWrap": "wordWrapColumn",
"editor.wordWrapColumn": 80,
"editor.tabSize": 2
}
```
To toggle each setting to your preference, hover your cursor over the setting name on the user settings half. You should see a pop up box with details of that particular setting. Follow the instructions and change the output to your own liking.
