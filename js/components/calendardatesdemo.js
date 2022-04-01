
const data = new Date()


calendargenerator(data)

document.querySelector(".arrownext").addEventListener("click", ()=>{
    const mm = data.getMonth()
    data.setMonth(mm+1)
    calendargenerator(data)
})

document.querySelector(".arrowprev").addEventListener("click", ()=>{
    const mm = data.getMonth()
    data.setMonth(mm-1)
    calendargenerator(data)
})



function calendargenerator(x){
    const dategenerator = document.getElementById("cdrd");
let curentText = ""

const date = new Date(x)
date.setDate(1)
let firstDayIndex = date.getDay() - 1;
if (firstDayIndex < 0) {
    firstDayIndex = 6 
}
const m = date.toLocaleString('en-us', { month: 'long' });
// const msh = date.getMonth()
// const d = date.getDate()
const y = date.getFullYear()
document.querySelector(".monthname").innerHTML = `${m} ${y}`;
let thismonthmax = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
let lastmonthmax = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
let LastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
const nextDays = 7 - LastDayIndex


for (let i = firstDayIndex; i > 0; i--) {
     curentText = curentText + `<p class='nmdate'>${lastmonthmax - i + 1}</p>`;    
 }


for (let i = 1; i <= thismonthmax; i++) {
    if (i===new Date().getDate()&&date.getMonth()===new Date().getMonth()){
        curentText = curentText + `<p class='mdate cdate'>${i}</p>`;    
    } else{
        curentText = curentText + `<p class='mdate'>${i}</p>`;
    }
}


for (let i = 1; i <= nextDays; i++) {
    curentText = curentText + `<p class='nmdate'>${i}</p>`;    
}

dategenerator.innerHTML = curentText;
}


