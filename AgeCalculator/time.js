const hourSelector = document.getElementById('hourSelector')
    for (let i = 0; i < 24; i++) {
        let timeString = i < 10 ? '0' + i : i.toString()
        let option = new Option(timeString, timeString)
        hourSelector.appendChild(option)
    }

const minSecSelector = (selectorId) => {
    for (let i = 0; i < 60; i++) {
        let timeString = i < 10 ? '0' + i : i.toString();
        let option = new Option(timeString, timeString);
        selectorId.appendChild(option)
    }
}

minSecSelector(minuteSelector);
minSecSelector(secondSelector);