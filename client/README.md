Create a personal access token on github and authorize orginization.

add token to env file
in main directory run - export TOKEN="<yourtoken>" 
or replace the token variable in server.js

change name variable to desired name in server.js

Right now it is returning only issues from Hyperion, FlaskTitan and Ariel, 
to add other repositories just duplicate what is in the backend (server.js)
as well as the front end (client/app.js) 


in main directory run the backend - npm start

in another terminal cd into client and run the front end- npm start

browser should open automatically and display results.

