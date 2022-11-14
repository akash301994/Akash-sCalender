var now = dayjs(); // current time
var now0 = now; // time that starts at real
//variables for the time
var hour = now.hour();
var minute = now.minute();
var second = now.second();
//console.log function
function logger() {
  for (let i = 1; i <= 9; i++) {
    console.log(localStorage.getItem(`input${i}`));
  }
}
// function to set colors
function setColors() {
  var thisHour0 = now0.hour(); //sets the current hour
  for (let i = 9; i <= 17; i++) {
    // goes through the hours and sets colors based on if its before,after or during the hour
    if (i > thisHour0) {
      $(`#input${i - 8}`).addClass("future");
    } else if (i < thisHour0) {
      $(`#input${i - 8}`).addClass("past");
    } else {
      $(`#input${i - 8}`).addClass("present");
    }
  }
}
// function to set placeholders for the textboxes/areas
function placeholderSetter() {
  for (let i = 1; i <= 9; i++) {
    $(`#input${i}`).val(localStorage.getItem(`input${i}`));
  }
}
// function to set event listeners
function eventListeners() {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
    $(`#button-addon${i}`).click(function () {
      let input = $(`#input${i}`).val();
      console.log(input);
      $(`#label${i}`).text(input);
      localStorage.setItem(`input${i}`, input);
    });
  }
}
function setCurrentDay() {
  $("#currentDay").text(
    "Today is " +
      now.format("dddd, MMMM D, YYYY" + ` (${hour}:${minute}:${second})`)
  ); // sets the date at the top
}

setCurrentDay();
setColors();
logger();
placeholderSetter();
eventListeners();

// time interval to call the functions every second
setInterval(function () {
  now = dayjs();
  now0 = now;
  hour = now.hour();
  thisHour0 = now0.hour();
  minute = now.minute();
  second = now.second();
  setCurrentDay();
  setColors();
  logger();
  // placeholderSetter();
}, 1000);