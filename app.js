const userInput = document.getElementById("saveinput")
const saveBtn = document.getElementById("save")
const ulList = document.querySelector(".lists")
let editLi = 0;

let date = new Date();

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());



saveBtn.addEventListener("click", save)

function save() {

    if(userInput.value === ""){
       return alert("Enter a valid value")
    }


    let list = document.createElement("li")
    list.textContent = userInput.value

    list.classList = "list"

    ulList.prepend(list)

    userInput.value = "";

    let container = document.createElement("div")

    list.appendChild(container)


    let time = document.createElement("p")
    
    time.innerText = date.toLocaleDateString()
    
    container.appendChild(time)
    
    let time2 = document.createElement("p")

    time2.innerText = date.toLocaleTimeString()


    container.appendChild(time2)
    


    // let time = date.toLocaleDateString()

    let icons = document.createElement("div")

    list.append(icons)

    let deleteIcon = document.createElement("i")

    deleteIcon.classList = "fa-solid fa-trash"

    icons.appendChild(deleteIcon)

    deleteIcon.addEventListener("click" ,function () {
        list.remove()
    })

    let complete = document.createElement("i")

    complete.classList = "fa-regular fa-circle-check check"

    icons.appendChild(complete)


    complete.addEventListener("click" , function () {
        list.style.textDecoration = "line-through"
    })

    let edit = document.createElement("i")

    edit.classList = "fa-regular fa-pen-to-square edit"

    icons.appendChild(edit);
    // console.log(edit);
    
    edit.addEventListener("click", function () {
        editLi = edit.parentElement.parentElement
        userInput.value = editLi.textContent
        saveBtn.innerText = "Update"

        editLi.remove()
    })
    
    
    saveBtn.innerText = "Save"
    
}





// console.log(editLi);
