document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to create a new todo item
    function createTodoItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${text}
            <button class="delete">Delete</button>
        `;
        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });
        return li;
    }

    // Add event listener for the Add button
    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    // Allow pressing Enter to add todo item
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});