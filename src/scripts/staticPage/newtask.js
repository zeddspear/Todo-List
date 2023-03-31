import { add } from "date-fns";
import { createDom } from "../helperFunctions/Dom";

function createTask(){
    const taskDiv = createDom('div','hidden','taskbox');
    
    const newTaskbox = createDom('div','task_box_container');
    taskDiv.appendChild(newTaskbox);

    const title = createDom('h3','task_box_title');
    title.textContent = "New Task";
    newTaskbox.appendChild(title);

    for(let i = 0;i<3;i++){

        const inputDiv = createDom('div','input_div');
        const label = createDom('label');
        inputDiv.appendChild(label);
    
        switch(i){
            case 0:
                {
                label.textContent = "Title";
                label.setAttribute('for','task_title');
                const input = createDom('input','input_element');
                input.id = "task_title";
                input.type = "text";
                input.placeholder = "Task Title";
                inputDiv.appendChild(input);
                
                }
                break;
            case 1:
                {
                    label.textContent = "Description";
                    label.setAttribute('for','Discription_text');
                    const DisciptionBox = createDom('textarea');
                    DisciptionBox.id = "Discription_text";
                    DisciptionBox.placeholder = "blah blah blah......";
                    inputDiv.appendChild(DisciptionBox);
                }
                break;
            case 2:
                {
                    label.textContent = "Date";
                    label.setAttribute('for','date_input');
                    const dateInput = createDom('input','input_element');
                    dateInput.type = "date";
                    dateInput.id = "date_input";
                    inputDiv.appendChild(dateInput);

                }        
                break;
        }

        
            newTaskbox.appendChild(inputDiv);
        

    }

    const priorityBox = createDom('div', 'task_box_options');
    newTaskbox.appendChild(priorityBox);
  
    const priorityLabel = createDom('label');
    priorityLabel.textContent = 'Priority';
    priorityBox.appendChild(priorityLabel);
  
    const prioritySelect = createDom('select');
    prioritySelect.id = 'task-priority';
    priorityBox.appendChild(prioritySelect);
  
    const firstOption = createDom('option');
    firstOption.textContent = 'Low';
    firstOption.value = 'low';
    prioritySelect.appendChild(firstOption);
    const secondOption = createDom('option');
    secondOption.textContent = 'Medium';
    secondOption.value = 'medium';
    prioritySelect.appendChild(secondOption);
    const thirdOption = createDom('option');
    thirdOption.textContent = 'High';
    thirdOption.value = 'high';
    prioritySelect.appendChild(thirdOption);

    const projectBox = createDom('div', 'task_box_options');
    newTaskbox.appendChild(projectBox);
  
    const projectLabel = createDom('label');
    projectLabel.textContent = 'Project';
    projectBox.appendChild(projectLabel);
  
    const projectSelect = createDom('select');
    projectSelect.id = 'task-projects';
    projectBox.appendChild(projectSelect);

    const buttonDiv = createDom('div','task_box_buttons')
    newTaskbox.appendChild(buttonDiv);

    const addBtn = createDom('button');
    addBtn.id = 'add_task_box';
    addBtn.textContent = "Add Task";
    buttonDiv.appendChild(addBtn);

    const cancelBtn = createDom('button');
    cancelBtn.id = 'cancel_task_box';
    cancelBtn.textContent = "Cancel";
    buttonDiv.appendChild(cancelBtn);



return taskDiv;
}

export {createTask};