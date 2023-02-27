const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const taskList = document.querySelector('.task-list');

form.addEventListener('submit', addTask);

function addTask(event) {
	event.preventDefault();
	const taskText = input.value;
	if (!taskText) return; // do nothing if input is empty
	const task = document.createElement('li');
	task.innerHTML = '<input type="checkbox"><span>' + taskText + '</span><button>Delete</button>';
	taskList.appendChild(task);
	input.value = '';
	task.querySelector('button').addEventListener('click', deleteTask);
}

function deleteTask(event) {
	event.target.parentElement.remove();
}

// bonus feature: toggle task completion status
taskList.addEventListener('click', toggleTaskCompletion);

function toggleTaskCompletion(event) {
	const target = event.target;
	if (target.tagName !== 'INPUT') return;
	const task = target.parentElement;
	task.classList.toggle('completed');
}
