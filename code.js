let mainContainer = document.createElement("div")

function coloredBoard() {
mainContainer.innerHTML = ""
 let container = document.createElement("div")
 
 container.classList.add("div-wrapper")
    
    for(let i = 0; i <= 10; i += 1){  
        
let rowDiv = document.createElement("div")

rowDiv.classList.add(`color${Math.ceil(Math.random() * 10)}`, 'div-css')


console.log(rowDiv)
for(let i = 0; i <= 9; i += 1) {
    let columnDiv = document.createElement("div")
    columnDiv.classList.add(`color${Math.ceil(Math.random() * 10)}`, 'div-column')
    
    rowDiv.append(columnDiv)
}

container.append(rowDiv) 
}
mainContainer.append(container)
document.body.append(mainContainer)

}

setInterval(coloredBoard, 1000)