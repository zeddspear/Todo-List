import { createDom } from "../helperFunctions/Dom";


function createmain(){
    const  body2 = document.querySelector('.bodyDiv');
    

    const mainDiv = createDom('div','main');
    body2.appendChild(mainDiv);

    const taskContainer = createDom('div','task_container');
    mainDiv.appendChild(taskContainer);

    const taskHeader = createDom('div','task_header');
    taskContainer.appendChild(taskHeader);

    const headerTitle = createDom('div','header_title');
    headerTitle.textContent = "test";
    taskHeader.appendChild(headerTitle);

    const taskdiv = createDom('div','task_div');
    taskContainer.appendChild(taskdiv);

    const addtask = createDom('div');
    addtask.id = "add_task";
    taskdiv.appendChild(addtask);

    const taskpanel = createDom('div');
    addtask.appendChild(taskpanel);

    const taskicon = createDom('span','fas','fa-plus-circle');
    taskpanel.appendChild(taskicon);

    const taskText = createDom('span');
    taskText.textContent = "Add Task";
    taskpanel.appendChild(taskText);

   


    return body2;

}

export {createmain};