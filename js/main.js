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

  document.getElementById('header').className = 'bgTrans';

  // bgHeader.classList.add('bgTrans');
};

// fire off event with enter key //
document.getElementById('yearInput').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('btnSubmit').click();
  }
});
