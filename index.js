// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL:"https://playground-e5ecf-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSetting)
const database = getDatabase(app)
const realtimeDatabaseinDB = ref(database, "message list")

const displayMassegeEl = document.querySelector(".messageDisplay")
const btnEl = document.getElementById("btn")
const textInputEl = document.querySelector(".textInput")

onValue(realtimeDatabaseinDB, (item)=>{
    if(item.exists()){
        displayMassegeEl.textContent = ""
       let valueArray = Object.values(item.val())
       valueArray.map((val)=>{
           let renderValue = document.createElement("li")
           renderValue.textContent += val
           displayMassegeEl.append(renderValue)
        }) 
    } else {
        displayMassegeEl.textContent = ""
    } 
})

btnEl.addEventListener("click",()=>{
   let message = textInputEl.value
    if(message){
        push(realtimeDatabaseinDB, message )
    }
    textInputEl.value = ""
    
})


