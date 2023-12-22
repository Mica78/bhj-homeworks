const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');
const storage = window.localStorage;


for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    taskList.insertAdjacentHTML('beforeEnd',
                                `<div class="task" data-id=${key}>
                                <div class="task__title">
                                ${key}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                                </div>`);
  }


form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const taskTitle = form.querySelector('input').value;
    taskList.insertAdjacentHTML('beforeEnd',
                                `<div class="task" data-id=${taskTitle}>
                                <div class="task__title">
                                ${taskTitle}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                                </div>`);
    form.reset();
    storage.setItem(taskTitle, '');
    console.log(storage);
})


taskList.addEventListener('click', (event)=> {
    if (event.target.className === 'task__remove') {
        storage.removeItem(event.target.closest('.task').dataset.id);
        event.target.closest('.task').remove();

    };
});
