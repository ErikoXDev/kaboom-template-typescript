# Kaboom  Template

A pre-made template for quick-starting a kaboom project.

## Contents


### FILES
- index.js
  - The index.js file contains the webserver used to server the bundled javascript and html.
- src (folder)
  - Contains main.js, the javascript file which will get bundled. You can add more javascript files and have the main.js file import them.
- sounds/sprites
  - Contains your sounds and sprites
- dist (folder)
  - Contains the bundled "dist.js" and the index.html file.


### NPM SCRIPTS
- `runServer` starts the index.js file.
- `testServer` starts the index.js file with nodemon (You can install nodemon with `npm i -g nodemon`)

### SETUP
1. Use the template to create a new repository
2. Clone your new repository
3. Run `npm install` to install all the required packages
4. Edit dist/index.html or src/main.js
5. Run the `runServer` or `testServer` command to build and run

### HOSTING

#### REPLIT

- Go to the https://replit.com dashboard and import your project from github.

#### ITCH.IO

- Make a zip containing the files in your workspace
- Mainly include:
  - the dist/ folder
  - the sounds/ folder
  - the sprites/ folder
  - the index.html file

- Remember to build your javascript with the npm scripts above

**Additional info: `testServer` restarts itself when you save a file!**
