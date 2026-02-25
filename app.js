const userInput = document.getElementById("saveinput")
const saveBtn = document.getElementById("save")
const ulList = document.querySelector(".lists")


saveBtn.addEventListener("click", save)

function save() {

    if(userInput.value === ""){
       return alert("Enter a valid value")
    }


    let list = document.createElement("li")
    list.textContent = userInput.value

    list.classList = "list"

    ulList.appendChild(list)

    userInput.value = "";

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

    // console.log(list);    
}