const addBtn = document.querySelector(`#btn`);
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");
const delBtn = document.querySelector(`.delBtn`);
const counter = document.querySelector("#count"); // on 

// const addBtn = document.querySelector(`#btn`);
addBtn.addEventListener(`click`, addTask); // add a task on click

delBtn.addEventListener(`click`, function() { //delete default task on click
    deleteTask(taskCard); // target the right task
});

function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector(`.delBtn`);
    const newTextArea = newTask.querySelector(`.task`);
    
    
    newTextArea.value = "New Task" // set new task text to "New Task"
    newDelBtn.addEventListener(`click`, function() { //add delete event listener to new task
        deleteTask(newTask); //target the new task
    });
    
    tasksContainer.appendChild(newTask) // append new task to the tasks container
    // updateCount();
    counter.innerHTML = countCards(tasksContainer); // modifier le contenu de la div de qui à comme id "count" grace à la fonction 'countCards'
}

function countCards(listCard) { // Count le nombre de cards dans un list qui contient toutes les cards aui on dans la class 'todoCard'
    let allCards = listCard.querySelectorAll(".todoCard"); // on prendre toutes le cards qui comme class 'todoCard' dans la div parent "todoCards"
    return allCards.length;     // il count les cards qu'ils sont dans le div 'todoCard'
}


function deleteTask(task) {
    task.remove(); //remove the task
    counter.innerHTML = countCards(tasksContainer); // modifier le contenu de la div de qui à comme id "count" grace à la fonction 'countCards'
}