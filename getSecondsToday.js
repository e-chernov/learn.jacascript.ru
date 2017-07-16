function getSecondsToday() {
    var currentTime = new Date;
    var beginTime = new Date(currentTime.getFullYear(),
                             currentTime.getMonth(),
                             currentTime.getDate(),
                             0, 0, 0, 0);
    return (currentTime.getTime() - beginTime.getTime()) / 1000;
}

alert(getSecondsToday());