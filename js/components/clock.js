setInterval(clockCheck, 1000);

function clockCheck() {
    const date = new Date();
    /*Gaunu valandos ir minutes*/
    const hourT = Math.trunc(date.getHours() / 10);
    const hour = date.getHours() % 10;
    const minuteT = Math.trunc(date.getMinutes() / 10);
    const minute = date.getMinutes() % 10;
    /*Idedu valandos ir minutes*/
    const hourTvalue = document.getElementById('hourT');
    hourTvalue.innerHTML = hourT;
    const hourvalue = document.getElementById('hour');
    hourvalue.innerHTML = hour;
    const minuteTvalue = document.getElementById('minuteT');
    minuteTvalue.innerHTML = minuteT;
    const minutevalue = document.getElementById('minute');
    minutevalue.innerHTML = minute;
    const twoDotValue = document.getElementById('twodots');
    twoDotValue.classList.toggle('displaynot');
}
