// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Global Varaiables
  var renderDate = $('#currentDay');
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

  // Saves user inputs to localStorage once saveBtn is clicked 
  $('.saveBtn').on('click', function() {
    var hour = $(this).parent().attr('id');
    var input = $(this).siblings('.description').val();
    localStorage.setItem(hour, input);
  })

  // function for rendering user input
  function renderInput () {
    $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
    $('#hour-10 textarea').val(localStorage.getItem('hour-10'));
    $('#hour-11 textarea').val(localStorage.getItem('hour-11'));
    $('#hour-12 textarea').val(localStorage.getItem('hour-12'));
    $('#hour-13 textarea').val(localStorage.getItem('hour-13'));
    $('#hour-14 textarea').val(localStorage.getItem('hour-14'));
    $('#hour-15 textarea').val(localStorage.getItem('hour-15'));
    $('#hour-16 textarea').val(localStorage.getItem('hour-16'));
    $('#hour-17 textarea').val(localStorage.getItem('hour-17'));
  }
  
  renderInput();
});


