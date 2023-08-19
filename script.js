console.log("Welcome here!")

let dateMonthYear = document.getElementById("date")
let time = document.getElementById("time")


// console.log(`${date} ${month} ${years}`)
// dateMonthYear.innerText = fullDate


setInterval(()=>{
    fullDate = new Date()
    date = fullDate.getDate()
    month = fullDate.getMonth()
    years = fullDate.getFullYear()
    hours = fullDate.getHours()
    minutes = fullDate.getMinutes()
    seconds = fullDate.getSeconds()

    hRotate = 30*hours + minutes/2
    mRotate = 6*minutes
    sRotate = 6*seconds

    document.getElementById("hour").style.transform = `translate(17.5vw, 7.5vw) rotate(${hRotate}deg)`
    document.getElementById("minute").style.transform = `translate(17.5vw, 5vw) rotate(${mRotate}deg)`
    document.getElementById("second").style.transform = `translate(17.5vw, 2.5vw) rotate(${sRotate}deg)`


    dateMonthYear.innerText = `Date : ${date}-${month}-${years}`
    time.innerText = `Time : ${hours}:${minutes}:${seconds}`
    console.log("hello")
},1000)
