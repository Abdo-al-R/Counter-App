
let element =document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count  += 1
    element.textContent = count
   
}

function save() {
    let saveNum = count + " - "
    saveEl.textContent += saveNum
    count = 0
    element.textContent = count


}
save()