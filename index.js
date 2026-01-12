import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-trancker-app-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

function render(leads){
let listItems= ""
for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>`
}
ulEl.innerHTML= listItems 
}
deleteBtn.addEventListener("dblclick", function() {
} )

inputBtn.addEventListener("click", function () {
    console.log(inputEl.value)
    inputEl.value = ""
})




 


