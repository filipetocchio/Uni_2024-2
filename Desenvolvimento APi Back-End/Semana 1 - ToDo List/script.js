document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        taskSpan.addEventListener('click', function() {
            li.classList.toggle('done');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = '';
    }
});
