//Paineis
const painel = document.querySelectorAll('.painel')

painel.forEach(painel=> {
    painel.addEventListener('click', () =>{
        removeActiveClasses()
        painel.classList.add('active')

    })
})

function removeActiveClasses(){
    painel.forEach(painel=> {
        painel.classList.remove('active')
    });
}

//Relógios
const timeny = document.querySelector('.timeny')
const timel = document.querySelector('.timel')
const timehk = document.querySelector('.timehk')
const timerj = document.querySelector('.timerj')
const timet = document.querySelector('.timet')

function GetCurrentTime() {
let date = new Date()
timeny.innerHTML = date.toLocaleString("en-US", {timeZone: "America/New_York"})
timerj.innerHTML = date.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})
timel.innerHTML = date.toLocaleString("en-US", {timeZone: "Europe/London"})
timehk.innerHTML = date.toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"})
timet.innerHTML = date.toLocaleString("en-US", {timeZone: "Asia/Tokyo"})

let t = setTimeout(function(){ GetCurrentTime() }, 1000)
}
GetCurrentTime()