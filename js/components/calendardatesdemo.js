const dategenerator = document.getElementById("cdrd");

let curentText = "<p class='nmdate'>31</p>"

for (let i = 1; i < 29; i++) {
    curentText = curentText + `<p class='mdate'>${i}</p>`;    
}


for (let y = 1; y < 14; y++) {
    curentText = curentText + `<p class='nmdate'>${y}</p>`;    
}


dategenerator.innerHTML = curentText;