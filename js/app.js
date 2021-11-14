
var end = new Date('Feb 4,2022 2:30:00').getTime();
var start = new Date('Feb 14,2021 21:30:00').getTime();

var toEnd = new Date('Feb 4,2022 2:30:00').getTime();
var toStart = new Date('Feb 14,2021 21:30:00').getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = end - now;
    var toNow = new Date().getTime();
    var toDistance = toEnd - toNow;

    cvtEndDate = end / (1000 * 60 * 60 * 24);
    cvtStartDate = start / (1000 * 60 * 60 * 24);

    var toSeconds = (toEnd - toStart);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
        $('.clock-days').html(days);
    } else {
        $('.clock-days').html(days);
    }
    if (hours < 10) {
        $('.clock-hours').html('0' + hours);
    } else {
        $('.clock-hours').html(hours);
    }
    if (minutes < 10) {
        $('.clock-minutes').html('0' + minutes);
    } else {
        $('.clock-minutes').html(minutes);
    }
    if (seconds < 10) {
        $('.clock-seconds').html('0' + seconds);
    } else {
        $('.clock-seconds').html(seconds);
    }

    if (distance < 0) {
        clearInterval(x);
        $('.expired-slogan').addClass('active');
        $('.clock-days').html('0')
        $('.clock-hours').html('0')
        $('.clock-minutes').html('0')
        $('.clock-seconds').html('0')
    }

    var processCount = toSeconds;
    var endCount = (toDistance / processCount) * 100;

    var processPer = 100 - endCount;
    document.getElementById('processbar-load').style.width = processPer + '%';

}, 1000);



