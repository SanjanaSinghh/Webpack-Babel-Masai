// const { json } = require("stream/consumers")

data = new Date()
if(JSON.parse(localStorage.getItem("notes")==null)){
    arr=[]
}
else{
    arr = JSON.parse(localStorage.getItem("notes"))
}
function addnote(){
console.log('click')
    var note = document.getElementById('note').value
    arr.push(note)
    localStorage.setItem('notes',JSON.stringify(arr))
    console.log(arr)
}