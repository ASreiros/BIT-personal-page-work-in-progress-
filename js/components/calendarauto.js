setInterval(dateCheck, 1000);
const savDienaArr = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];
const menuoArr = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Grudžio"];

function dateCheck() {
    const fdate = new Date();
    const savDiena = fdate.getDay()-1;
    const menuo = fdate.getMonth();
    const menDiena = fdate.getDate();
    const year = fdate.getFullYear();
    const kalendorius = document.getElementById('kalend');
    kalendorius.innerHTML = `${savDienaArr[savDiena]}, ${menuoArr[menuo]} ${menDiena}, ${year}`;
}


/*css dalys calendar.css*/