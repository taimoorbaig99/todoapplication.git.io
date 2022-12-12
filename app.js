var main = document.getElementById('main');
var input = document.getElementById('inp');
// console.log(input)
function add() {
    // console.log(inp.value);
    if (input.value == "") {
        alert("Enter Value");
    }else{
        var li = document.createElement("li"); // creating list
        var liText = document.createTextNode(input.value); //creating list text
        li.appendChild(liText);
        li.setAttribute("class" , "lunder")
        //para.setAttribute("onclick" , "abc()");

    //creating edit Button
    var editBtn = document.createElement("BUTTON");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick","editTodo(this)");
    editBtn.setAttribute("class" , "edbtn")
    li.appendChild(editBtn);
    
    
    //Creating delete Button
    
    var deleteBtn = document.createElement("BUTTON");
    
    var deleteBtnText = document.createTextNode("Delete");
   
    deleteBtn.appendChild(deleteBtnText);

    deleteBtn.setAttribute("onclick","deleteTodo(this)");
    deleteBtn.setAttribute("class" , "delbtn")

        li.appendChild(deleteBtn);

         main.appendChild(li);

         input.value = ""; //

       }
    }
    function editTodo(element) {
        var newValue = prompt('Enter Edit value')
        console.log(element.parentNode.firstChild.nodeValue);
        element.parentNode.firstChild.nodeValue = newValue;       
    }

function deleteTodo(element) {
element.parentNode.remove(); 
console.log();
    
}

function delAll() {

    main.innerHTML = "" ;

}