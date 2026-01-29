const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains('edit')) {
    const span = e.target.parentElement.parentElement.querySelector('span');
    const newTask = prompt('Edit task:', span.textContent);
    if (newTask) span.textContent = newTask;
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('completed');
  }
});

function addTask() {
  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `<span>${taskInput.value}</span>
                  <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                  </div>`;
  taskList.appendChild(li);
  taskInput.value = '';
}
