// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildTable(arrayData) {
arrayData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}



// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", filterTable);

// Complete the event handler function for the form
function filterTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    
tbody.html("")

  buildTable(filteredData);
}




buildTable(tableData)
