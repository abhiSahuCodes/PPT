const input = document.getElementById('taskInput');
const submit = document.querySelector('.submitButton');
const todoSection = document.querySelector('.todo-section');


const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const editInput = document.getElementById('editInput');
const updateButton = document.querySelector('.updateButton');
const closeButton = document.querySelector('.closeButton');

let value = '';
let currentTodo = null;

input.addEventListener('input', (e) => {
    value = e.target.value;
});

const submitFunction = (e) => {
    e.preventDefault();
    console.log(value);

    // creating todo
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('p');
    title.classList.add('todoTitle');
    const status = document.createElement('p');
    status.classList.add('status');
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('taskButtons');
    const remove = document.createElement('button');
    remove.classList.add('remove');
    const mark = document.createElement('button');
    mark.classList.add('mark');
    const edit = document.createElement('button');
    edit.classList.add('edit');

    title.textContent = value;
    status.textContent = `Status: Pending`;
    remove.textContent = 'Remove';
    mark.textContent = 'Mark Completed';
    edit.textContent = 'Edit Task';

    todo.appendChild(title);
    todo.appendChild(status);
    todo.appendChild(taskButtons);
    taskButtons.appendChild(remove);
    taskButtons.appendChild(mark);
    taskButtons.appendChild(edit);
    todoSection.appendChild(todo);

    input.value = '';

    // Event Listeners for the newly created buttons
    remove.addEventListener('click', () => {
        todo.remove();
    });

    mark.addEventListener('click', () => {
        if (status.textContent === 'Status: Pending') {
            mark.style.backgroundColor = '#FFFF00';
            mark.style.color = '#000000';
            status.textContent = 'Status: Completed';
        } else {
            mark.style.backgroundColor = '#008000';
            mark.style.color = '#ffffff';
            status.textContent = 'Status: Pending';
        }
    });

    edit.addEventListener('click', () => {
        currentTodo = todo;
        const todoTitle = title.textContent;
        editInput.value = todoTitle;
        editModal.style.display = 'block';
    });
};

// Event listener for Update button click
updateButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Updating the title of the current todo with the new value from the edit input
    const updatedTitle = editInput.value;
    currentTodo.querySelector('.todoTitle').textContent = updatedTitle;

    // Closing the edit modal
    editModal.style.display = 'none';
});

// Event listener for Close button click
closeButton.addEventListener('click', () => {
    editModal.style.display = 'none';
});

submit.addEventListener('click', submitFunction);

