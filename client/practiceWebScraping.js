/*
  
  The Plan:

  client:

  1. show an HTML form that takes user input needed to perform a search,
  2. on form submit, save the search parameters to a cookie
  3. perform an AJAX request to the server using search parameters
  4. when results come back from server, save those too (and associate them with the search parameters somehow)
  5. if there are any saved results, compare them. if the prices differ, alert the user
  6. when the page loads, check for saved search parameters. if any exist, go to step 3

// server

  1. setup express endpoint that takes user input needed for a search
  2. in that endpoint, use webdriverio to simulate going to southwest.com and searching for those things
  3. parse useful data from the results, like flight numbers and prices
  4. return useful data to client as json

*/