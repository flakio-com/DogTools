function startCountdown(dateSelect, hourSelect, minSelect, secSelect, zoneSelect) {
    var today = new Date().toISOString().substring(0, 10);
    document.getElementById(dateSelect).value = today;
    var now = new Date();

    // Extract the hours, minutes and seconds
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    // Set them in the appropriate select elements
    document.getElementById(hourSelect).value = hours;
    document.getElementById(minSelect).value = minutes;
    document.getElementById(secSelect).value = seconds;

    var intervalId;
    if (intervalId) {
        clearInterval(intervalId);
    }

    var dateSelector = document.getElementById(dateSelect);
    var hourSelector = document.getElementById(hourSelect);
    var minuteSelector = document.getElementById(minSelect);
    var secondSelector = document.getElementById(secSelect);
    var timezoneSelector = document.getElementById(zoneSelect);

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

        document.getElementById('humanYears1').innerHTML = String(years).padStart(2, '0')
        document.getElementById('humanMonths1').innerHTML = String(months).padStart(2, '0')
        document.getElementById('humanWeeks1').innerHTML = String(weeks).padStart(2, '0')
        document.getElementById('humanDays1').innerHTML = String(days).padStart(2, '0')
        document.getElementById('humanHours1').innerHTML = String(hours).padStart(2, '0')
        document.getElementById('humanMinutes1').innerHTML = String(minutes).padStart(2, '0')
        document.getElementById('humanSeconds1').innerHTML = String(seconds).padStart(2, '0')
        document.getElementById('humanYears2').innerHTML = String(years).padStart(2, '0')
        document.getElementById('humanMonths2').innerHTML = String(months).padStart(2, '0')
        document.getElementById('humanWeeks2').innerHTML = String(weeks).padStart(2, '0')
        document.getElementById('humanDays2').innerHTML = String(days).padStart(2, '0')
        document.getElementById('humanHours2').innerHTML = String(hours).padStart(2, '0')
        document.getElementById('humanMinutes2').innerHTML = String(minutes).padStart(2, '0')
        document.getElementById('humanSeconds2').innerHTML = String(seconds).padStart(2, '0')

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

        document.getElementById('dogYears1').innerHTML = String(dogYears).padStart(2, '0')
        document.getElementById('dogMonths1').innerHTML = String(dogMonths).padStart(2, '0')
        document.getElementById('dogWeeks1').innerHTML = String(dogWeeks).padStart(2, '0')
        document.getElementById('dogDays1').innerHTML = String(dogDays).padStart(2, '0')
        document.getElementById('dogHours1').innerHTML = String(dogHours).padStart(2, '0')
        document.getElementById('dogMinutes1').innerHTML = String(dogMinutes).padStart(2, '0')
        document.getElementById('dogSeconds1').innerHTML = String(dogSeconds).padStart(2, '0')
        document.getElementById('dogYears2').innerHTML = String(dogYears).padStart(2, '0')
        document.getElementById('dogMonths2').innerHTML = String(dogMonths).padStart(2, '0')
        document.getElementById('dogWeeks2').innerHTML = String(dogWeeks).padStart(2, '0')
        document.getElementById('dogDays2').innerHTML = String(dogDays).padStart(2, '0')
        document.getElementById('dogHours2').innerHTML = String(dogHours).padStart(2, '0')
        document.getElementById('dogMinutes2').innerHTML = String(dogMinutes).padStart(2, '0')
        document.getElementById('dogSeconds2').innerHTML = String(dogSeconds).padStart(2, '0')
    }

    // update every second
    intervalId = setInterval(calculateTime, 1000);
}







let mainIds = ['dateSelector', 'hourSelector', 'minuteSelector', 'secondSelector', 'timezoneSelector'];
const addNum = num => {
    let newArr = []
    for (let i = 0; i < mainIds.length; i++) {
        newArr.push(mainIds[i] + num)
    }
    return newArr.toString()
}


document.addEventListener('DOMContentLoaded', function () {
    startCountdown('dateSelector1', 'hourSelector1', 'minuteSelector1', 'secondSelector1', 'timezoneSelector1');
    startCountdown('dateSelector2', 'hourSelector2', 'minuteSelector2', 'secondSelector2', 'timezoneSelector2');
});

// startCountdown('dateSelector2')