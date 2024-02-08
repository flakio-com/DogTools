const hourSelectorFunc = (selectorId) => {
    for (let i = 0; i < 24; i++) {
        let timeString = i < 10 ? '0' + i : i.toString()
        let option = new Option(timeString, timeString)
        selectorId.appendChild(option)
    }
}
const minSecSelector = (selectorId) => {
    for (let i = 0; i < 60; i++) {
        let timeString = i < 10 ? '0' + i : i.toString();
        let option = new Option(timeString, timeString);
        selectorId.appendChild(option)
    }
}



hourSelectorFunc(hourSelector1);
minSecSelector(minuteSelector1);
minSecSelector(secondSelector1);
hourSelectorFunc(hourSelector2);
minSecSelector(minuteSelector2);
minSecSelector(secondSelector2);