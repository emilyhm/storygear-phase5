# Story Gear
An eCommerce site that sells camera gear. Welcome to Story Gear! Tell us a story. The Story Gear official website is efficient in displaying the products that are offered for the best price.

Visit the live site! --> https://story-gear.herokuapp.com 

## Getting Started
These instructions can be used to run the project locally for development and testing. 
1. Open your terminal and go to the root of the project
2. Run 'npm install' - This downloads the dependencies that are needed to properly run the website
3. Run 'npm start' - This starts the Express server, and the React app at the same time

### Dependencies
No additional instillation should be required. 
However, a possible list of prerequisites can be found below. Simply ‘cd’ into the respective directories and run ‘npm install --save (prerequisite)’ if the prerequisite needs to be downloaded again.

root: story-gear-ecommerce/package.json
- express
- mysql
- concurrently 
- if-env
- helmet 
- morgan
- path
- bcryptjs
- jsonwebtoken
- mongoose

client directory: story-gear-ecommerce/client/package.json
- react
- react-dom
- react-hook-form
- react-router-dom
- react-scripts
- react-slick
- slick-carousel
- axios
- jwt-decode


## Running the tests
Go to the root of the project, and run ‘npm test’ in your terminal. This will run the available tests for this project. The tests can be found in the 'test' directory (story-gear-ecommerce/test/test-pages.js).

## Database
Mongo Atlas is used as a database server in order to display the products available on the Story Gear website. The models used to create the schemas can be found in the models directory, inside of the root. The database is on the cloud instead of locally! 
