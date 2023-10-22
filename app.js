function addTodo(){
    var input = document.getElementById("inputfield");
    // console.log(input.value);

    var liElement = document.createElement("li");

    var liText = document.createTextNode(input.value)
    
    liElement.appendChild(liText)

    // console.log(liElement);

    var list = document.getElementById("list");

    list.appendChild(liElement);

    input.value = "";

    var editBtn = document.createElement("button");

    var editText = document.createTextNode("Edit This");

    editBtn.setAttribute("onclick", "editItem(this)");

    editBtn.appendChild(editText);

    liElement.appendChild(editBtn);

    var deleteBtn = document.createElement("button");

    var deleteText = document.createTextNode("Delete This");

    deleteBtn.setAttribute("onclick", "deleteItem(this)");

    deleteBtn.appendChild(deleteText);

    liElement.appendChild(deleteBtn);


    
    deleteBtn.setAttribute("class","del");

    editBtn.setAttribute("class","edit");
}




function deleteAll(){
    
    var list = document.getElementById("list");

    list.innerHTML = "";

}

function deleteItem(a){
    console.log(a.parentNode.remove());
}

function editItem(b)
{
    var editInput = prompt("Enter Updated Value..");

    b.parentNode.firstChild.nodeValue = editInput;
}


