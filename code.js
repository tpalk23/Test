const btnDisplay = document.querySelector("#btnDisplay");
const btnDownload = document.querySelector("#btnDownload");
const imgConverted = document.querySelector("#imgConverted");


let mainContainer = document.createElement("div")
let container = ""
function coloredBoard() {
mainContainer.innerHTML = ""
 container = document.createElement("div")
 
 container.classList.add("div-wrapper")
    
    for(let i = 0; i <= 10; i += 1){  
        
let rowDiv = document.createElement("div")

rowDiv.classList.add(`color${Math.ceil(Math.random() * 10)}`, 'div-css')


console.log(rowDiv)
for(let i = 0; i <= 9; i += 1) {
    let columnDiv = document.createElement("div")
    columnDiv.classList.add(`color${Math.ceil(Math.random() * 10)}`, 'div-column')
    
    rowDiv.appendChild(columnDiv)
}

container.append(rowDiv) 
console.log(container)
}
mainContainer.append(container)
document.body.append(mainContainer)

}


coloredBoard()

