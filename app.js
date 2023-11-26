var firebaseConfig = {
    apiKey: "AIzaSyDyc55sr7giQaEUE564ef45HOyTh2IwdFg",
    authDomain: "to-do-list-002.firebaseapp.com",
    databaseURL: "https://to-do-list-002-default-rtdb.firebaseio.com",
    projectId: "to-do-list-002",
    storageBucket: "to-do-list-002.appspot.com",
    messagingSenderId: "883279976613",
    appId: "1:883279976613:web:898f8cb8c53a7776abd54c"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

// console.log(app.database)

// function getData()
// {
//     var list = document.getElementById("list")

//     var listObj = {

//         list: list.value
//     }

//     firebase.database().ref("Task/WorkToDo/").set(listObj)
// }


function getData(todoText) {
    // Get a reference to the Firebase database
    var database = firebase.database();

    var key = Math.random() * 258963741
    
    // Push the new item to the database under "Task/WorkToDo/"
    database.ref("Task/WorkToDo/" + Math.round(key)).set({
      text: todoText
    });
  }


function addTodo(){
    var input = document.getElementById("inputfield");
    // console.log(input.value);
    
    var liElement = document.createElement("li");
    
    var liText = document.createTextNode(input.value)
    
    liElement.appendChild(liText)
    
    // console.log(liElement);
    
    var list = document.getElementById("list");
    
    list.appendChild(liElement);
    
    getData(input.value)
    
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

    deleteBtn.setAttribute("id","delete");
    
    editBtn.setAttribute("class","edit");

}




function deleteAll(){
    
    var list = document.getElementById("list");

    list.innerHTML = "";

    firebase.database().ref("Task/WorkToDo/").remove()
}



function deleteItem(a){
    console.log(a.parentNode.remove());

    firebase.database().ref("Task/WorkToDo/").remove()
}

function editItem(b)
{
    var editInput = prompt("Enter Updated Value..");

    b.parentNode.firstChild.nodeValue = editInput;
}


