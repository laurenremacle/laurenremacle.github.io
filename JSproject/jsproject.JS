function generatenumber(){
    let result = Math.floor(Math.random()*10)
    return result
}
let fixednumbers = []

function updatenumbers(){
    console.log("change")
    for(let i=0; i<10; i++){
        if(fixednumbers.includes("number" + i)){
            continue
        }
        document.getElementById("number" + i).innerText = generatenumber()
    }
   
}

setInterval(updatenumbers, 500)

function stopnumber(event){
    let id = event.target.id
    fixednumbers.push(id)

}
    
function restart(){
    fixednumbers = []
    for(let i=0; i<10; i++){
        if(fixednumbers.includes("number" + i)){
            continue
        }
        document.getElementById("number" + i).innerText = 0
    }
}


