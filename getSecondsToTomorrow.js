function getSecondsToTomorrow() {
    var now = new Date;
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    return (tomorrow.getTime() - now.getTime()) / 1000;
}

alert(getSecondsToTomorrow());