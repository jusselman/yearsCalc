// get the date //
var time, currentYear;

time = new Date();

currentYear = time.getFullYear();

// console.log(year);

// grab the p to display the diff. in years //

var calcYears = function() {
  var userInput = document.getElementById('yearInput').value;

  var yearsDiff = currentYear - userInput;

  document.getElementById('diffDisplay').innerHTML =
    'This event happened ' + yearsDiff + ' years ago';
};
