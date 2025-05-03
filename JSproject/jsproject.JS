function generatenumber(){
    let result = Math.floor(Math.random()*10)
    return result
}
let fixednumbers = []
let position = 0
let numbers = [0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0]

function updatenumbers(){
    if(position == 10){
       return
    }
    console.log("change")
    numbers[position] = generatenumber()
    for(let i=0; i<10; i++){
        if(fixednumbers.includes("number" + i)){
            continue
        }
        document.getElementById("number" + i).innerText = numbers[i]
    }
   
}

setInterval(updatenumbers, 400)

function stopnumber(event){
    let id = event.target.id
    if(id != "number"+ position){
        return
    }
    fixednumbers.push(id)
    event.target.className =" number stopped"
    position += 1
    if(position < 10){
        document.getElementById("number" + position).className = "number running"
    }
}
    
function restart(){
    fixednumbers = []
    numbers = [0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0]
    for(let i=0; i<10; i++){
    
        document.getElementById("number" + i).className = "number unstopped"
    }
    position = 0 
    document.getElementById("number" + 0).className = "number running"
}


