const userInput = document.getElementById("saveinput")
const saveBtn = document.getElementById("save")
const ulList = document.querySelector(".lists")
const list1 = document.getElementById("list1")
const form = document.querySelector("form")
let editLi = null;

// let date = new Date();

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());


form.addEventListener("submit", function (e) {
   e.preventDefault()

   save()
})
saveBtn.addEventListener("click", save)

function save() {

    // ================================================
    //     Empty input
    // ================================================
    if (userInput.value === "") {
        return alert("Enter a valid value")
    }
    // ================================================
    //     Example list
    // ================================================
    list1.style.display = "none"
    // ================================================
    //     user list
    // ================================================

    let list = document.createElement("li")
    list.textContent = userInput.value

    list.classList = "list"

    ulList.prepend(list)

    // ================================================
    //     Input Empty
    // ================================================

    userInput.value = "";


    // let container = document.createElement("div")
    // list.appendChild(container)
    // let time = document.createElement("p")
    // time.innerText = date.toLocaleDateString()
    // container.appendChild(time)
    // let time2 = document.createElement("p")
    // time2.innerText = date.toLocaleTimeString()
    // container.appendChild(time2)
    // let time = document.createElement("p")
    // let time2 = document.createElement("p")

    // setInterval(() => {
    //     time.innerText = date.toLocaleDateString()
    //     container.appendChild(time)
    //     time2.innerText = date.toLocaleTimeString()
    //     container.appendChild(time2)
    // }, 1000);



    // let time = date.toLocaleDateString()

    // ================================================
    //     creating icons
    // ================================================

    let icons = document.createElement("div")

    icons.classList = "icons"

    list.append(icons)

    let deleteIcon = document.createElement("i")

    deleteIcon.classList = "fa-solid fa-trash"

    icons.appendChild(deleteIcon)
    // ================================================
    //     Delete function
    // ================================================
    deleteIcon.addEventListener("click", function () {
        list.remove()
    })

    let complete = document.createElement("i")

    complete.classList = "fa-regular fa-circle-check check"

    icons.appendChild(complete)

    // ================================================
    //  Completed function
    // ================================================
    complete.addEventListener("click", function () {
        list.style.textDecoration = "line-through"
    })

    let edit = document.createElement("i")

    edit.classList = "fa-regular fa-pen-to-square edit"

    icons.appendChild(edit);
    // console.log(edit);
    // ================================================
    //     Edit funtion
    // ================================================
    edit.addEventListener("click", function () {
        editLi = edit.parentElement.parentElement
        userInput.value = editLi.textContent
        saveBtn.innerText = "Update"

        editLi.remove()
    })


    saveBtn.innerText = "Save"

}





// console.log(editLi);
