
function countdown() {
    timeInterval = setInterval(function () {
      //get current time
      //print to span
      var today = dayjs();
    $('#date-time').text(today.format('MMM DD, YYYY [at] h:mm:ss a'));
    console.log(today.format('MMM D, YYYY'));
    }, 1000);
  }

  countdown();