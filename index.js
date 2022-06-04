function btnClicked () {
    const todoInput = document.getElementById('todoInput');
    const list = document.getElementById('list');

    const inputValue = todoInput.value;
    console.log(inputValue);

    const newTodo = document.createElement ('li');
    const newContent = document.createTextNode (inputValue);

    newTodo.appendChild(newContent);
    list.appendChild(newTodo);
  
}
