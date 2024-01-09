const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');


if (localStorage.getItem("array")) {
    array = JSON.parse(localStorage.getItem("array"));
    console.log(array);
    for(let i=0; i<array.length; i++) {
        taskList.insertAdjacentHTML('beforeEnd',
                                    `<div class="task" data-id=${array[i]}>
                                    <div class="task__title">
                                    ${array[i]}
                                    </div>
                                    <a href="#" class="task__remove">&times;</a>
                                    </div>`);
    };
} else {
    array = [];
    localStorage.setItem("array", JSON.stringify(array));
    console.log(localStorage.getItem("array"));
};


form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const taskTitle = form.querySelector('input').value;
    if (taskTitle.trim()) {
        taskList.insertAdjacentHTML('beforeEnd',
                                `<div class="task" data-id=${taskTitle}>
                                <div class="task__title">
                                ${taskTitle}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                                </div>`);
        form.reset();
        array = JSON.parse(localStorage.getItem("array"));
        array.push(taskTitle);
        localStorage.setItem("array", JSON.stringify(array));
    } else {
        form.reset();
    };
});


taskList.addEventListener('click', (event)=> {
    if (event.target.className === 'task__remove') {
        event.target.closest('.task').remove();
        array = JSON.parse(localStorage.getItem("array"));
        let idx = array.indexOf(event.target);
        array.splice(idx,1);
        localStorage.setItem("array", JSON.stringify(array));
    };
});
