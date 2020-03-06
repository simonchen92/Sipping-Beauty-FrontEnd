# Sipping Beauty

## Links
* [Front End GitHub Repo](https://github.com/simonchen92/Sipping-Beauty-FrontEnd)
* [Deployed Front End Client](https://simonchen92.github.io/Sipping-Beauty-FrontEnd/)
* [Back End GitHub Repo](https://github.com/simonchen92/Sipping-Beauty-BackEnd)
* [Deployed Back End URL](https://sipping-beauty.herokuapp.com/)

## Preparation
1.  Fork and clone this repository.
1.  Create a new branch for your work.
1.  Checkout to the branch that you have named.
1.  Install dependencies with `npm install`.
1.  Run `npm start` to run website on local host

## Description
Sipping Beauty is an application where you can search information through [OpenBeerDB](https://public-us.opendatasoft.com/explore/dataset/open-beer-database/information/?dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6Im9wZW4tYmVlci1kYXRhYmFzZSIsIm9wdGlvbnMiOnsibG9jYXRpb24iOiIyLDE2Ljk4MjMyLDkuNDk4IiwiYmFzZW1hcCI6Imphd2cuc3RyZWV0cyJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoibGluZSIsImZ1bmMiOiJBVkciLCJ5QXhpcyI6ImFidiIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiM2NmMyYTUifV0sInhBeGlzIjoibGFzdF9tb2QiLCJtYXhwb2ludHMiOiIiLCJ0aW1lc2NhbGUiOiJ5ZWFyIiwic29ydCI6IiJ9XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&location=2,16.98232,9.498&basemap=jawg.streets) on your favorite beers and add them onto your list of favorites or just beers you want to try in the future. You must create a sign in in order to start using the application. You can create your own beers if you cannot find the one you want in the search. You may also delete the beers you feel like you do not want anymore in the list.

###### Please be advised that OpenBeerDB is outdated and hasn't been updated since March 2017.

## Website Screenshot

![Imgur](https://i.imgur.com/aGh8LXj.png)

## Technologies Used
* Bootstrap
* HTML
* JavaScript
* React
* SASS / SCSS
* Styled Components
* OpenBeerDB

## User Stories
* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I want to be able to create a new beers I like
* As a signed in user, I want to be able to delete the beers from my list if I want to.
* As a signed in user, I want to be able to search for all available beers that I want
* As a signed in user, I want to be able to add those restaurant from my search to my list of beers.

## Planning / Development Process

I began my project by mapping out my ERD (Entity Relationship Diagram) and then writing out my user stories to cater to what I would like to do with my application. Once all of this was done, I decided to go with building my back end infrastructure first so that I know what endpoints I need to give to receive data on the front end. I decided to go with Ruby on Rails for my back-end and setting up the relational data wasn't hard since Rails have some neat built in functions like `scaffold` which literally maps all the routes for you (aside from some tweaks here and there to make it how you want to display the data on to the user). Once it was built, I decided to do some back end testing using a third party application called Postman. Once the endpoints were working via Postman, I decided that I will work on the front end.

I decided to use React for the front-end portion of my application. I chose React because it is still a popular framework and I wanted to get better with it. I knew I was going to be seperating a lot of my components because I want my application to be modular and also be scalable down the line if I choose to come back and work on it. I also knew that I was going to style my application using the framework `styled-components` so there will be tons of seperated components. In order to make sure my front end was good to go, I decided that I had to get my beers to show, and my create beers to work. Once that was working, I decided to move onto implementing the third party OpenBeerDB into both the back end and front end of my application.

Since I knew what beer database I wanted to use, I used Postman to create some scripts to test if the endpoints I created will receive the information I want. I ran into a problem here where Postman scripts were receiving information that I want, but my `Ruby on Rails` back end was not so I searched up what can help render my information into JSON data and found a neat gem called `HTTParty`. Once that was working, I decided to create a search functionality on the front end to generate the beer information users wanted and create a add button to add any of the searched beers from the database and also created a delete button on the show beer list to delete the beers once users may not want it there anymore.

Overall, the project was pretty fun and rewarding. It has a purpose in the sense that it gave me all the neccessary information that I want to have from a beer. Building this project made me better as a developer as well as gaining more insight in developing using React and Ruby on Rails. Most challenging part was implementing the third party API (OpenBeerDB) that to this day, I am still having trouble with the encoding issue. I had a blast and hope to create another application soon with new languages.

## Future Iterations
* Solve the encoding issues
* Find a better free open source database that isn't limited in what it can give me

