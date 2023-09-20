// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // (Done in the currentDate function)
});


// Global Varaiables
var renderDate = $('#currentDay');
// var renderTime = dayjs().format('hh:mm:ss a');
var pastEl     = $('.past');
var presentEl  = $('.present');
var futureEl   = $('.future');

var idTime     = $('.time-block');

// Displays the current date in the header
function currentDate() {
  var now = dayjs();
  renderDate.text(now.format('dddd MMM, DD, YYYY'));
}
currentDate();

// Sets the class to either Past, Present, or Future depending on time of day
// function currentTime() {
//   var idEl = $('#hour-17');
//   idTime = dayjs(idEl);
//   if (timeNow.isBefore(idTime)) {
//     idEl.addClass('future');
//   } else if (timeNow.isSame(idTime)) {
//     idEl.addClass('present');
//   } else {
//     idEl.addClass('past');
//   }

//   console.log(timeNow);
// }

// currentTime();


// Getting elements by their ID and assigning to a variable
var hour9El  = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');

//Checks the current id against timeNow
function checkTime() {
  var timeNow    = dayjs().hour();
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour < timeNow) {
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
  } else if (blockHour === timeNow) {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
  } else {
    $(this).removeClass('present');
    $(this).removeClass('past');
    $(this).addClass('future');
  };
  })
  
}
checkTime();
setInterval(checkTime, 1000);

$('.saveBtn').on('click', function() {
  var hour = $(this).parent().attr('id');
  var input = $(this).siblings('.description').val();
  localStorage.setItem(hour, input);
})