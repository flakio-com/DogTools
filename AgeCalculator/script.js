var today = new Date().toISOString().substring(0, 10);
    document.getElementById('dateSelector').value = today;
    var now = new Date();

    // Extract the hours, minutes and seconds
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    // Set them in the appropriate select elements
    document.getElementById('hourSelector').value = hours;
    document.getElementById('minuteSelector').value = minutes;
    document.getElementById('secondSelector').value = seconds;

    var intervalId;

    function startCountdown() {
        if (intervalId) {
            clearInterval(intervalId);
        }

        var dateSelector = document.getElementById('dateSelector');
        var hourSelector = document.getElementById('hourSelector');
        var minuteSelector = document.getElementById('minuteSelector');
        var secondSelector = document.getElementById('secondSelector');
        var timezoneSelector = document.getElementById('timezoneSelector');

        var selectedDate = new Date(dateSelector.value + "T" + hourSelector.value + ":" + minuteSelector.value + ":" + secondSelector.value);

        function calculateTime() {
            var now = new Date();
            var selectedDateTimezoneAdjusted = new Date(selectedDate.toLocaleString("en-US", { timeZone: timezoneSelector.value }));
            now = new Date(now.toLocaleString("en-US", { timeZone: timezoneSelector.value }));
            var diff = now - selectedDateTimezoneAdjusted;

            var seconds = Math.floor(diff / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            var years = Math.floor(days / 365.25);

            // Keep only remainder values
            days %= 365.25;
            var months = Math.floor(days / 30.44);
            days %= 30.44;
            var weeks = Math.floor(days / 7);
            days %= 7;

            seconds = seconds %= 60;
            minutes = minutes %= 60;
            hours = hours %= 24;

            days = Math.round(days);

            document.getElementById('countdown').innerHTML =
                "<div class='timeBlock'><span class='timeLabel'>Years</span><span class='timeHighlight'>" + String(years).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Months</span><span class='timeHighlight'>" + String(months).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Weeks</span><span class='timeHighlight'>" + String(weeks).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Days</span><span class='timeHighlight'>" + String(days).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Hours</span><span class='timeHighlight'>" + String(hours).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Minutes</span><span class='timeHighlight'>" + String(minutes).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Seconds</span><span class='timeHighlight'>" + String(seconds).padStart(2, '0') + "</span></div>";

            var dogYears = Math.floor(years * 7);
            var dogMonths = Math.floor(months * 7);
            var dogWeeks = Math.floor(weeks * 7);
            var dogDays = Math.floor(days * 7);
            var dogHours = Math.floor(hours * 7);
            var dogMinutes = Math.floor(minutes * 7);
            var dogSeconds = Math.floor(seconds * 7);

            // Update the dog time units when they exceed their maximum values
            if (dogMonths >= 12) {
                dogYears += Math.floor(dogMonths / 12);
                dogMonths %= 12;
            }
            if (dogWeeks >= 52) {
                dogYears += Math.floor(dogWeeks / 52);
                dogWeeks %= 52;
            }
            if (dogDays >= 365.25) {
                dogYears += Math.floor(dogDays / 365.25);
                dogDays %= 365.25;
            }
            if (dogHours >= 24) {
                dogDays += Math.floor(dogHours / 24);
                dogHours %= 24;
            }
            if (dogMinutes >= 60) {
                dogHours += Math.floor(dogMinutes / 60);
                dogMinutes %= 60;
            }
            if (dogSeconds >= 60) {
                dogMinutes += Math.floor(dogSeconds / 60);
                dogSeconds %= 60;
            }

            document.getElementById('dogYears').innerHTML =
                "<div class='timeBlock'><span class='timeLabel'>Years</span><span class='timeHighlight'>" + String(dogYears).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Months</span><span class='timeHighlight'>" + String(dogMonths).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Weeks</span><span class='timeHighlight'>" + String(dogWeeks).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Days</span><span class='timeHighlight'>" + String(dogDays).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Hours</span><span class='timeHighlight'>" + String(dogHours).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Minutes</span><span class='timeHighlight'>" + String(dogMinutes).padStart(2, '0') + "</span></div>" +
                "<span class='timeHighlightsep'>:</span>" +
                "<div class='timeBlock'><span class='timeLabel'>Seconds</span><span class='timeHighlight'>" + String(dogSeconds).padStart(2, '0') + "</span></div>";
        }

        // update every second
        intervalId = setInterval(calculateTime, 1000);
    }

    // Add an event listener for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', function () {
        // Start the countdown when the page has finished loading
        startCountdown();
    });