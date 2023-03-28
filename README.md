# DeCode DemonList
This is the public API made for the decode demonlist that can be used for anyone by anyone with the simple setup sets below

Simple Setup Steps

##Windows Setup: 
First Download the repository off the main branch then open it up in your terminal. 

Make sure you have the latest version of node installed, to check this run:
`npm -v` 
in your terminal.

Next, to initialize node, type 
`npm init` 
and fill in the fields as you wish.

Next, to install the project dependencies run:
`npm install nodemon express googleapis`

you might have to run:
`npm install nodemon express googleapis ejs -g`
this second command installs these dependencies globally rather than to the local folder.

when you do this you should see a folder called node_modules, a file called package.json, and a file called package-lock.json. 

If you see those then run 
`nodemon index.js` 
and open up your browser of choice to the url
<a href="http://localhost:3000/"> http://localhost:3000/content.js </a>
