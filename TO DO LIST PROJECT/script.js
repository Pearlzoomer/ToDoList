function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        // Create a new list item and delete button
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        
        const todoContent = document.createElement('span');
        todoContent.className = 'todo-text';
        todoContent.textContent = todoText;

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';

        // Add delete functionality
        deleteButton.onclick = function() {
            todoList.removeChild(listItem);
        };

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-button';

        // Add done functionality
        doneButton.onclick = function() {
            todoContent.style.textDecoration = 'line-through';
        };

        // Append buttons to the button group
        buttonGroup.appendChild(doneButton);
        buttonGroup.appendChild(deleteButton);

        // Append the text and button group to the list item
        listItem.appendChild(todoContent);
        listItem.appendChild(buttonGroup);

        // Add the list item to the list
        todoList.appendChild(listItem);

        // Clear the input field
        input.value = '';
    }
}
