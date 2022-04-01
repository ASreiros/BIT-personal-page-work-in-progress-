let counter = 0;
const arrSlide = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
let Ltimeout = null;
let Rtimeout = null;
let bumper = 0;
let posx1 = 0;
let posx2 = 0;
let eventTracker = 0;
const ctrack = document.getElementById('ctrack');

setInterval(clickerdefence, 1200);

function clickerdefence() {
    bumper = 0;
}

setTimeout(slideClient, 0, 1);

function slideLeft() {
    if (bumper === 0) {
        counter++;
        clearTimeout(Ltimeout);
        clearTimeout(Rtimeout);
        Ltimeout = setTimeout(slideClient, 0, 1);
        bumper = 1;
    }
}

function slideRight() {
    if (bumper === 0) {
        counter--;
        clearTimeout(Ltimeout);
        clearTimeout(Rtimeout);
        Rtimeout = setTimeout(slideClient, 0, 0);
        bumper = 1;
    }
}

function mouseDown() {
    posx1 = event.pageX;
    eventTracker = 1;
}

ctrack.onmouseup = function (event) {
    if ((eventTracker = 1)) {
        posx2 = event.pageX;
        if (posx1 > posx2) {
            slideLeft();
            eventTracker = 0;
            console.log('moveleft');
        }
    }
    if ((eventTracker = 1)) {
        if (posx1 < posx2) {
            slideRight();
            eventTracker = 0;
            console.log('moveright');
        }
    }
};

function slideClient(p) {
    // console.log('pong');
    for (let i = 0; i < arrSlide.length; i++) {
        const passive = document.getElementById(`${arrSlide[i]}`);
        passive.classList.remove('activeslide-0');
        passive.classList.remove('activeslide-1');
        passive.classList.remove('activeslide-2');
        passive.classList.remove('activeslide-3');
        passive.classList.remove('activeslide-4');
        // console.log(arrSlide[i]);
    }

    if (counter < 0) {
        counter = 6;
    }
    if (counter > arrSlide.length - 1) {
        counter = 0;
    }

    let a = counter + 1;
    if (a < 0) {
        a = 6;
    }
    if (a > arrSlide.length - 1) {
        a = 0;
    }

    let b = a + 1;
    if (b < 0) {
        b = 6;
    }
    if (b > arrSlide.length - 1) {
        b = 0;
    }

    let c = b + 1;
    if (c < 0) {
        c = 6;
    }
    if (c > arrSlide.length - 1) {
        c = 0;
    }

    let d = c + 1;
    if (d < 0) {
        d = 6;
    }
    if (d > arrSlide.length - 1) {
        d = 0;
    }

    const counterText = arrSlide[counter];
    const aText = arrSlide[a];
    const bText = arrSlide[b];
    const cText = arrSlide[c];
    const dText = arrSlide[d];

    const active0 = document.getElementById(`${counterText}`);
    active0.classList.add('activeslide-0');
    const active1 = document.getElementById(`${aText}`);
    active1.classList.add('activeslide-1');
    const active2 = document.getElementById(`${bText}`);
    active2.classList.add('activeslide-2');
    const active3 = document.getElementById(`${cText}`);
    active3.classList.add('activeslide-3');
    const active4 = document.getElementById(`${dText}`);
    active4.classList.add('activeslide-4');

    const sbnl = document.getElementById(`sbl`);
    const sbnr = document.getElementById(`sbr`);

    if (p === 1) {
        sbnl.classList.add('active-slideround-btn');
        sbnr.classList.remove('active-slideround-btn');
        // console.log("go left");
        Ltimeout = setTimeout(slideLeft, 5000);
    } else {
        sbnl.classList.remove('active-slideround-btn');
        sbnr.classList.add('active-slideround-btn');
        // console.log("go right");
        Rtimeout = setTimeout(slideRight, 5000);
    }
}
