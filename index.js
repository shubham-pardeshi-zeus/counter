let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    console.log("start")
    count += 1
    countEl.innerText = count
    console.log("end")
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
}