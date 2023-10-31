const dateDisplayEl = $('#currentDay');
const eventDescriptionEl = $('.description');
const saveBtn = $('.saveBtn');

function displayDate() {
  const today = dayjs().format('MMM DD, YYYY | HH:mm:ss A');
  dateDisplayEl.text(today);
  };

  $('.time-block').each(function () {
    var timeBlock = $(this).attr('id').split('-')[1];
    var currentTime = dayjs().format('HH');

    if (currentTime === timeBlock) {
      $(this).addClass('present');
    } else if (currentTime < timeBlock) {
      $(this).removeClass('present');
      $(this).addClass('future');
    } else if (currentTime > timeBlock) {
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  });

  $('.saveBtn').click(function (event) {
    event.preventDefault();
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(time, value);
  })

  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));


displayDate();
setInterval(displayDate, 1000);

