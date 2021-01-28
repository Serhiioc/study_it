document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.querySelector(".tasks-in__button");
    const addField = document.querySelector(".tasks-in__field");
    const listWraper = document.querySelector(".tasks-wrap");
    

    let taskArray = [];

    if( localStorage.tasks ) {
        taskArray = JSON.parse(localStorage.getItem("tasks"));
    } else {
        taskArray = [];
    }

    function addTask (taskHeader) {
        this.taskHeader = taskHeader;
        this.status = false;
    }

    const refreshLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(taskArray))
    }
    
    const addNewTask = () => {
        taskArray.unshift(new addTask(addField.value));
        refreshLocalStorage();
        showTasksList();
        addField.value = null;
    }
    
    function greateRow(elem, index) {
        return `
            <div class="tasks-out ${elem.status ? "tasks-out--checked" : ""}" tabindex="0">
                    <h3 class="tasks-out__title">${elem.taskHeader}</h3>
                    <input class="tasks-out__status" type="checkbox" ${elem.status ? "checked" : ""} data-index="${index}">
                    <button class="icon-cancel button button--delete tasks-out__button" data-index="${index}"></button>
            </div>
        `;
    }

    const showTasksList = () => {
        listWraper.innerHTML = " ";
        taskArray.forEach((elem, index) => {
            listWraper.innerHTML += greateRow(elem, index);
        });

        const taskCheckbox = document.querySelectorAll(".tasks-out__status");
        const deleteBtn = document.querySelectorAll(".tasks-out__button");
        
        taskCheckbox.forEach( elem => {
            elem.addEventListener("change", checkTask);
        });

        deleteBtn.forEach( elem => {
            elem.addEventListener("click", deleteTask);
        });

    }

    function checkTask () {
        taskArray[this.dataset.index].status = !taskArray[this.dataset.index].status;
        refreshLocalStorage();
        showTasksList();
    };

    function deleteTask () {
        taskArray.splice(this.dataset.index, 1);
        refreshLocalStorage();
        showTasksList();
    }
    
    showTasksList();

    addBtn.addEventListener("click", () => { 
        if(addField.value != false)  {
            addNewTask();
        }    
    });

    document.addEventListener("keyup", function (evt) {
        if (evt.code == "Enter" && evt.target == addField && addField.value != false) {
            addNewTask();
        }
    });

});