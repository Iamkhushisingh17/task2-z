// Fetch the JSON data from the URL and store it in a variable called data
let data;
fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    // Do something with the data
  })
  .catch(error => {
    // Handle the error
  });
