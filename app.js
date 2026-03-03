const userInput = document.getElementById("saveinput")
const saveBtn = document.getElementById("save")
const ulList = document.querySelector(".lists")
const list1 = document.getElementById("list1")
const form = document.querySelector("form")
let editLi = null;

saveBtn.addEventListener("click", save)
// let date = new Date();

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());


form.addEventListener("submit", function (e) {
    e.preventDefault()

    save()
})





let editIndex = null;

function save() {

    if (editIndex === null) {
        let list = document.createElement("li")
        // list.textContent = userInput.value
        list.classList = "list"
        ulList.prepend(list)
        let text1 = document.createElement("span")
        text1.textContent = userInput.value
        list.appendChild(text1)
        let icons = document.createElement("div")
        icons.classList = "icons"
        list.append(icons)
        let deleteIcon = document.createElement("i")
        deleteIcon.classList = "fa-solid fa-trash delete"
        icons.appendChild(deleteIcon)
        let complete = document.createElement("i")
        complete.classList = "fa-regular fa-circle-check check"
        icons.appendChild(complete)
        let edit = document.createElement("i")
        edit.classList = "fa-regular fa-pen-to-square edit"
        icons.appendChild(edit);

    } else {
        ulList.children[editIndex].querySelector("span").textContent = userInput.value;
        // console.log(ulList.children[editIndex].textContent);
        editIndex = null;
        saveBtn.textContent = "Save"
    }
    userInput.value = ""
    // console.log(ulList);
}


ulList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        // console.log(e.target);
        e.target.parentElement.parentElement.remove()
    }

    if (e.target.classList.contains("check")) {
        e.target.parentElement.parentElement.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("edit")) {
        let items = ulList.children
        let targetItem = e.target.parentElement.parentElement
        saveBtn.textContent = "Update"
        for (let i = 0; i < items.length; i++) {
            if (items[i] === targetItem) {
                editIndex = i
            }
        }
        // console.log(ulList.children[editIndex]);
        // console.log(e.target.parentElement.parentElement.textContent);
        userInput.value = e.target.parentElement.parentElement.textContent
    }

})
const searchInput = document.getElementById("searchinput");
searchInput.addEventListener("input", search)
function search() {
    const searchValue = searchInput.value.toLowerCase()
    // console.log(searchValue);
    const todos = document.querySelectorAll(".list")
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
        let todosContent = todos[i].textContent.toLowerCase()

        if (todosContent.includes(searchValue)) {
            todos[i].style.display = "flex"
        } else {
            todos[i].style.display = "none"
        }
    }
}

// function save() {

//     // ================================================
//     //     Empty input
//     // ================================================
//     if (userInput.value === "") {
//         return alert("Enter a valid value")
//     }
//     // ================================================
//     //     Example list
//     // ================================================
//     list1.style.display = "none"
//     // ================================================
//     //     user list
//     // ================================================

//     let list = document.createElement("li")
//     list.textContent = userInput.value

//     list.classList = "list"

//     ulList.prepend(list)

//     // ================================================
//     //     Input Empty
//     // ================================================

//     userInput.value = "";


//     // let container = document.createElement("div")
//     // list.appendChild(container)
//     // let time = document.createElement("p")
//     // time.innerText = date.toLocaleDateString()
//     // container.appendChild(time)
//     // let time2 = document.createElement("p")
//     // time2.innerText = date.toLocaleTimeString()
//     // container.appendChild(time2)
//     // let time = document.createElement("p")
//     // let time2 = document.createElement("p")

//     // setInterval(() => {
//     //     time.innerText = date.toLocaleDateString()
//     //     container.appendChild(time)
//     //     time2.innerText = date.toLocaleTimeString()
//     //     container.appendChild(time2)
//     // }, 1000);



//     // let time = date.toLocaleDateString()

//     // ================================================
//     //     creating icons
//     // ================================================

//     let icons = document.createElement("div")

//     icons.classList = "icons"

//     list.append(icons)

//     let deleteIcon = document.createElement("i")

//     deleteIcon.classList = "fa-solid fa-trash"

//     icons.appendChild(deleteIcon)
//     // ================================================
//     //     Delete function
//     // ================================================
//     deleteIcon.addEventListener("click", function () {
//         list.remove()
//     })

//     let complete = document.createElement("i")

//     complete.classList = "fa-regular fa-circle-check check"

//     icons.appendChild(complete)

//     // ================================================
//     //  Completed function
//     // ================================================
//     complete.addEventListener("click", function () {
//         list.style.textDecoration = "line-through"
//     })

//     let edit = document.createElement("i")

//     edit.classList = "fa-regular fa-pen-to-square edit"

//     icons.appendChild(edit);
//     // console.log(edit);
//     // ================================================
//     //     Edit funtion
//     // ================================================
//     edit.addEventListener("click", function (e) {
//         let editIndex = 0;

//         if(e.target.classList.contains("edit")){
//             let edit = ulList.children
//             let targetItem = e.target.parentElement.parentElement;
//             for(let i = 0 ;i < edit.length; i++){
//                 if(edit[i] === targetItem){
//                     editIndex = i;
//                     console.log(editIndex);
//                     userInput.value = ulList.children[editIndex].textContent;

//                 }
//             }
//             // editIndex = 0
//             // console.log(targetItem);

//         }
//         // console.log(editLi);

//         saveBtn.innerText = "Update"
//         // editLi.remove()
//     })


//     saveBtn.innerText = "Save"

// }
// =======================================================
//   search 
// =====================================================




