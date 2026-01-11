

var ul = document.getElementById('ul')


function addTodo() {
    var taskInput = document.getElementById("taskInput");
    // console.log("adfa")

    // create list
    var li = document.createElement("li");
    li.innerHTML = taskInput.value;
    // console.log( li)
    ul.appendChild(li)


    // delete list 
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        deletebtn(this)
    });


    //edit button
    var editBtn = document.createElement('button')
    editBtn.innerHTML = ('Edit')
    li.appendChild(editBtn)

    editBtn.addEventListener('click', function(){
        edit(this)
    });
}


    function deletebtn(e){
        e.parentNode.remove()
    }

    function edit(e){
        e.parentNode.firstChild.nodeValue = newValue
        var newValue = prompt("Enter new value", e.parentNode.firstChild.nodeValue)
        console.log(newValue)
    }

