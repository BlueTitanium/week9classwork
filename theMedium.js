// console.log("theMessage");

// const theButton = document.querySelector("button");
// const theInput = document.querySelector("input")
// let theDivider = document.querySelector("div")

// let theUserWords;
// let theItem;
// let theTxt;

// theButton.addEventListener('click', makeList)

// function makeList() {
//     console.log("click!");
//     theUserWords = theInput.value;
//     // console.log(theUserWords)
//     theItem = document.createElement('li')
//     const theSpan = document.createElement('span');
//     theTxt = document.createTextNode(theUserWords);
//     // document.body.appendChild(theItem);
//     theDivider.appendChild(theItem);
//     theItem.appendChild(theTxt);
// }

// document.querySelector("p").addEventListener('click', eraseList)

// function eraseList(){
//     console.log("erase!");
//     document.querySelector("div").remove(theItem)
// }

let listNum = 1;

const newListButton = document.getElementById("NewList");
newListButton.addEventListener("click",newList);
const holder = document.getElementById("Holder");
function newList() {
    console.log("CLICKED!");
    var listObj = document.querySelector("div[data-type='template']").cloneNode(true);
    listObj.id = listNum;
    var removeButton = listObj.querySelector(".RemoveList");
    removeButton.id = "r"+listNum;
    removeButton.addEventListener("click",deleteList);
    var itemButton = listObj.querySelector(".NewItem");
    itemButton.id = "n"+listNum;
    itemButton.addEventListener("click",newItem);
    listObj.style.display="flex";
    holder.appendChild(listObj);
    listNum++;
}

function deleteList(){
    console.log("deleted");
    var listObj = document.getElementById(this.id.substring(1));
    listObj.remove();
}

function newItem(){
    var listObj = document.getElementById(this.id.substring(1));
    var listContent = listObj.querySelector(".ListContent");
    
}