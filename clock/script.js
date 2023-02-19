
// todo stopwatch// todo end stop watch


// ?timer
const h1h = document.querySelector(".hou h1")
const h1m = document.querySelector(".minu h1")
const h1s = document.querySelector(".seco h1")
const star = document.querySelector('.starting')
const thours = document.querySelector(".hou h1")
const tminuts = document.querySelector(".minu h1")
const tseconds = document.querySelector(".seco h1")
let arrows = document.getElementsByClassName("arrow")
let arrow = Array.from(arrows)
console.log(arrows)
let k = 0
let o = 0
let timer
let sec = 0
let time = new Date()


// !clock
const hours = document.querySelector("#hr");
const minuts = document.querySelector("#mn");
const seconds = document.querySelector("#sc");
const digital_time = document.querySelector(".time")
const date = document.querySelector(".date")
setInterval(() => {
    let date_time = new Date();
    let digital_hour = date_time.getHours();
    let digital_minut = date_time.getMinutes();
    let digital_second = date_time.getSeconds();
    let the_date = date_time.getFullYear() + "-" + (date_time.getMonth() + 1) + "-" + date_time.getDate()
    date.innerHTML = the_date
    let hour = digital_hour * 30 + (digital_minut / 12)
    let minut = digital_minut * 6
    let second = digital_second * 6
    if (digital_hour < 10) {
        digital_hour = "0" + digital_hour
    }
    if (digital_minut < 10) {
        digital_minut = "0" + digital_minut
    }
    if (digital_second < 10) {
        digital_second = "0" + digital_second
    }
    hours.style.transform = "rotateZ(" + hour + "deg)";
    minuts.style.transform = "rotateZ(" + minut + "deg)";
    seconds.style.transform = "rotateZ(" + second + "deg)";
    digital_time.innerHTML = digital_hour + ":" + digital_minut + ":" + digital_second
})
// !clock


// todo stopwatch
const stopwatch = document.querySelector(".stopwatch h1")
const stopwatch_button = document.querySelector(".stopwatch_start")
stopwatch_button.addEventListener("click", () => {
    if (k === 1) {
        k = 0
        stopwatch_button.src = "./icons8-play-48.png"
        start(0)
    } else {
        k = 1
        stopwatch_button.src = "./icons8-pause-32.png"
        start(1)
    }
})

function totime(j) {
    let x = j
    let h = Math.floor(x / 3600000)
    x = x - (h * 3600000)
    let m = Math.floor(x / 60000)
    x = x - (m * 60000)
    let s = Math.floor(x / 1000)
    x = x - (s * 1000)
    let mi = x
    h=h.toString().padStart(2,"0")
    m=m.toString().padStart(2,"0")
    s=s.toString().padStart(2,"0")
    mi=mi.toString().padStart(2,"0")
    if (h != 0) {
        return (h + ":" + m + ":" + s + "." + mi).slice(0, 8)
    } else {
        return (m + ":" + s + "." + mi).slice(0, 8)
    }
}
function start(x) {
    if (x === 1) {
        timer = setInterval(() => {
            sec += 10
            stopwatch.innerHTML = totime(sec)
        }, 10)
    } else {
        clearInterval(timer)
    }
}
function restart() {
    sec = 0
    start(0)
    counter.innerHTML = totime(sec)
    b.src = "./icons8-play-48.png"
    k = 0
}
function change(x, a) {
    let re = parseInt(a.innerHTML) + x
    if (re < 0) {
        re += 60
    }
    let gg = re % 60
    if ((gg < 10) & (gg >= 0)) {
        a.innerHTML = "0" + gg
    } else {
        a.innerHTML = gg
    }
}
function get() {
    return parseInt(h1h.innerHTML) * 3600 + parseInt(h1m.innerHTML) * 60 + parseInt(h1s.innerHTML)
}
function totimesplit(j) {
    let x = j
    let h = Math.floor(x / 3600)
    x = x - (h * 3600)
    let m = Math.floor(x / 60)
    x = x - (m * 60)
    let s = x
    const li = []
    h=h.toString().padStart(2,"0")
    m=m.toString().padStart(2,"0")
    s=s.toString().padStart(2,"0")
    li[0] = h
    li[1] = m
    li[2] = s
    return li
}
let op = 0
function starting(x) {
    if (x === 1) {
        op = get()
        let x = get()
        timer = setInterval(() => {
            x--
            if (x === 0) {
                clearInterval(timer)
                console.log("time is up")
                arrow.forEach((e) => {
                    e.classList.toggle("active")
                })
            }
            let timestring = totimesplit(x)
            thours.innerHTML = timestring[0]
            tminuts.innerHTML = timestring[1]
            tseconds.innerHTML = timestring[2]
        }, 1000)
    } else {
        clearInterval(timer)
    }
}
let k2 = 0
star.addEventListener("click", () => {
    if (k2 === 0) {
        star.src = "./icons8-pause-32.png"
        k2 = 1
        starting(1)
        arrow.forEach((e) => {
            e.classList.toggle("active")
        })
    } else {
        star.src = "./icons8-play-48.png"
        k2 = 0
        arrow.forEach((e) => {
            e.classList.toggle("active")
        })
    }
})
function restarting() {
    let timestring = totimesplit(op)
    thours.innerHTML = timestring[0]
    tminuts.innerHTML = timestring[1]
    tseconds.innerHTML = timestring[2]
    starting(0)
    star.src = "./icons8-play-48.png"
    k2 = 0
    arrow.forEach((e) => {
        e.classList.toggle("active")
    })
}
function length(x, y) {
    let h = x.toString()
    if (h.length < y) {
        return true
    }
}