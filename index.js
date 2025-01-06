// 1. Create a function, save(), which logs out the count when it's called
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    //console.log("The button was clicked");
    count += 1
    countEl.textContent = count
}




function save() {

    let countStr = count + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    //console.log(count);
}
save()



