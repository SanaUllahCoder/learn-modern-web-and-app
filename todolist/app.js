

var ul = document.getElementById('ul')


function addTodo() {
    var taskInput = document.getElementById("taskInput");
    var value = taskInput.value && taskInput.value.trim();
    if (!value) return;

    // create list item
    var li = document.createElement("li");
    li.className = 'todo-item';

    // checkbox element
    var cb = document.createElement('div');
    cb.className = 'checkbox';
    cb.addEventListener('click', function () {
        li.classList.toggle('completed');
        updateCount();
    });
    li.appendChild(cb);

    // text
    var text = document.createElement('span');
    text.className = 'text';
    text.textContent = value;
    li.appendChild(text);

    // actions
    var actions = document.createElement('div');
    actions.className = 'actions';

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function () { edit(this); });
    actions.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () { deletebtn(this); });
    actions.appendChild(deleteBtn);

    li.appendChild(actions);

    ul.appendChild(li);
    taskInput.value = '';
    updateCount();
}

function deletebtn(e) {
    e.parentNode.parentNode.remove();
    updateCount();
}

function edit(e) {
    var li = e.parentNode.parentNode;
    var text = li.querySelector('.text');
    var newValue = prompt("Enter new value", text.textContent);
    if (newValue !== null) text.textContent = newValue;
}

function clearCompleted(){
    var items = ul.querySelectorAll('.todo-item.completed');
    items.forEach(function(i){ i.remove(); });
    updateCount();
}

function updateCount(){
    var total = ul.querySelectorAll('.todo-item').length;
    var countEl = document.getElementById('count');
    if(countEl) countEl.textContent = total;
}

