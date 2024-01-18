// Get the elements from the HTML
let fileInput = $("#fileInput");
let fileType = $("#fileType");
let encoding = $("#encoding");
let delimiter = $("#delimiter");
let hasHeader = $("#hasHeader");
let availableFields = $("#availableFields");
let displayedFields = $("#displayedFields");
let nextButton = $("#nextButton");
let cancelButton = $("#cancelButton");

// Add event listeners to the elements
fileInput.on("change", function() {
  // Get the file from the input
  let file = fileInput.files[0];
  // Check the file type and set the fileType value accordingly
  if (file.type === "application/json") {
    fileType.val("JSON");
  } else if (file.type === "text/csv") {
    fileType.val("CSV");
  } else {
    // Handle invalid file type
  }
});

nextButton.on("click", function() {
  // Get the values from the inputs
  let fileTypeValue = fileType.val();
  let encodingValue = encoding.val();
  let delimiterValue = delimiter.val();
  let hasHeaderValue = hasHeader.is(":checked");
  let displayedFieldsValue = displayedFields.val();
  // Parse the file according to the format
  if (fileTypeValue === "JSON") {
    // Parse the JSON file and display the data
  } else if (fileTypeValue === "CSV") {
    // Parse the CSV file and display the data
  } else {
    // Handle invalid file type
  }
});

cancelButton.on("click", function() {
  // Clear the inputs and reset the form
  fileInput.val("");
  fileType.val("CSV");
  encoding.val("UTF-8");
  delimiter.val("Comma");
  hasHeader.prop("checked", false);
  availableFields.val(null);
  displayedFields.val(null);
});