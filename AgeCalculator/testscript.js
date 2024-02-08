function startCountdown(dateSelect,humanYear,humanMonth,humanDay,dogYear,dogMonth,dogDay) {
    // var dateSelector = document.getElementById('dateSelector1');
    var dateSelector = document.getElementById(dateSelect);

    function calculateTime() {
        var now = new Date();
        var selectedDate = new Date(dateSelector.value);
        var timezoneOffset = new Date().getTimezoneOffset() * 60000; // Offset in milliseconds
        var localTime = new Date(selectedDate - timezoneOffset);

        var diff = now - localTime; // Difference in milliseconds

        if (diff < 0) {
            // If the selected date is in the future, clear the interval and reset the display
            clearInterval(intervalId);
            alert("Selected date is in the future. Please select a past date.");
            return;
        }

        var seconds = Math.floor(diff / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        var years = Math.floor(days / 365);
        days -= years * 365;
        var months = Math.floor(days / 30); // Simplified month calculation
        days -= months * 30;

        // document.getElementById('humanYears1').textContent = years;
        // document.getElementById('humanMonths1').textContent = months;
        // document.getElementById('humanDays1').textContent = days;
        document.getElementById(humanYear).textContent = years;
        document.getElementById(humanMonth).textContent = months;
        document.getElementById(humanDay).textContent = days;

        // Assuming 1 dog year = 7 human years
        var dogYears = years * 7;
        var dogMonths = months * 7;
        var dogDays = days * 7; // Simplification for demonstration

        // document.getElementById('dogYears1').textContent = dogYears;
        // document.getElementById('dogMonths1').textContent = dogMonths;
        // document.getElementById('dogDays1').textContent = dogDays;
        document.getElementById(dogYear).textContent = dogYears;
        document.getElementById(dogMonth).textContent = dogMonths;
        document.getElementById(dogDay).textContent = dogDays;
    }

    // Clear any existing interval
    if (window.intervalId) clearInterval(window.intervalId);

    // Update every day (86400000 milliseconds in a day)
    window.intervalId = setInterval(calculateTime, 86400000);

    // Immediate calculation on start
    calculateTime();
}

// Attach the startCountdown function to the button's click event listener in JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Set default values for date selectors
    document.getElementById('dateSelector1').value = '2022-05-07';
    document.getElementById('dateSelector2').value = '2023-05-03';
    
    // Correctly passing parameters to startCountdown when buttons are clicked
    document.getElementById('dogAge1').addEventListener('click', function() {
        startCountdown('dateSelector1', 'humanYears1', 'humanMonths1', 'humanDays1', 'dogYears1', 'dogMonths1', 'dogDays1');
    });

    document.getElementById('dogAge2').addEventListener('click', function() {
        startCountdown('dateSelector2', 'humanYears2', 'humanMonths2', 'humanDays2', 'dogYears2', 'dogMonths2', 'dogDays2');
    });
});

