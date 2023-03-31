import { checkforDuplicates , checkforInput } from "../helperFunctions/error";
import { projectBox } from "./ProjectFunctionality";
import { Projectcontrol } from "../ObjectHandlers/Projecthandle";
import { createDom } from "../helperFunctions/Dom";
import { resetValue } from "../helperFunctions/reset";
import { TaskControl } from "../ObjectHandlers/Taskhandle";
import format from "date-fns/format/index.js";
import { projects } from "../ObjectHandlers/storage";


const taskModel = function(){


    // showing task box 
    const show = function(option){
        const box = document.querySelector('.taskbox');
        const transparent = document.querySelector('.transparent');

            modifyModel(option);
        transparent.classList.remove('hidden');
        box.classList.remove('hidden');

        transparent.addEventListener('click',(e)=>{
            hide();
        })

      
    }

    // hiding task box
    const hide = function(){
        const box = document.querySelector('.taskbox');
        const transparent = document.querySelector('.transparent');

        transparent.classList.add('hidden');
        box.classList.add('hidden');
        reset();
    }


    // modifying taskbox according to the option value for adding or updating task

    const modifyModel = function(option){
        const taskboxtitle = document.querySelector('.task_box_title');
        const taskbtn = document.querySelector('#add_task_box');
    
        const cancelbtn = document.querySelector('#cancel_task_box');
        cancelbtn.addEventListener('click',hide);

        if(option === "New Task"){
            taskboxtitle.textContent = option;
            taskbtn.textContent = "Add Task";
            taskbtn.onclick = Taskbox.addtask;
        }else{
            const tasktitle = document.querySelector('#task_title');
            const discription = document.querySelector('#Discription_text');
            const dateinput = document.querySelector('#date_input');
            const taskpriority = document.querySelector('#task-priority');
            const projectselect = document.querySelector('#task-projects');
            const TaskDiv = option.target.parentNode.parentNode.parentNode.previousSibling.parentNode;
            
           

            let TaskinModification = TaskDiv.querySelector('.title-span').textContent;
           

            let currentProject = Projectcontrol.locatebyTask(TaskinModification);
            TaskinModification = TaskControl.locate(TaskinModification);


            tasktitle.value = TaskinModification.title;
            discription.value = TaskinModification.discription;
            dateinput.value = TaskinModification.date;
            taskpriority.value = TaskinModification.priority;
            projectselect.value = currentProject.title;

            taskboxtitle.textContent = "Modify Task";
            taskbtn.textContent = "Update Task";

            taskbtn.onclick = () => {
                Taskbox.updateTask(TaskinModification,currentProject);
            }

            
        }


    }


    // reseting task values

    const reset = function(){
        let data = [];

        const tasktitle = document.querySelector('#task_title');
        const discription = document.querySelector('#Discription_text');
        const dateinput = document.querySelector('#date_input');
        const taskpriority = document.querySelector('#task-priority');
        const projectselect = document.querySelector('#task-projects');

        data.push(tasktitle,discription,dateinput,taskpriority,projectselect);

        data.forEach(element => {
            if(element.id == 'task-priority' || element.id == 'task-projects' ){
                element.selectedIndex = 0;
            }else {
                resetValue(element);
            }
        })

    };

    return {
        show,
        hide,
        reset,
    }

}();


// add and render new task

const Taskbox = (()=>{

    const addtask = function(){

        let taskData = [];

        const tasktitle = document.querySelector('#task_title');
        const discription = document.querySelector('#Discription_text');
        const dateinput = document.querySelector('#date_input');
        const taskpriority = document.querySelector('#task-priority');
        const projectselect = document.querySelector('#task-projects');

        taskData.push(tasktitle,discription,dateinput,taskpriority,projectselect);


        if(taskData.every(checkforInput) && checkforDuplicates(Projectcontrol.locatebyTask(tasktitle.value))){
            let newTask = TaskControl.create(taskData.map(item => item.value));
            Projectcontrol.insert(projectselect.value,newTask);

            loadState();

            taskModel.reset();
            taskModel.hide();
        }


        

    };

    
    // removing task from div 

    const removeTask = function(targetTask){
            const ParentDiv = targetTask.target.parentNode.parentNode.parentNode.parentNode;
            const TargetTitle = ParentDiv.querySelector('.title-span').textContent;
            const taskProject = Projectcontrol.locatebyTask(TargetTitle);
            TaskControl.erase(taskProject,TargetTitle);

            ParentDiv.remove();
    }


    // toggle checkstrike active not active functionality

    const toggleStrike = function(e){
        
        const spanicon = e.target.parentNode.parentNode;
        const taskTitle = e.target.parentNode.parentNode.nextSibling;
        const targetTask = TaskControl.locate(e.target.parentNode.parentNode.nextSibling.textContent);
       

        if(targetTask.active){
            spanicon.innerHTML = `<svg class="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>`
            taskTitle.classList.add('strikethrough');
            TaskControl.modify(targetTask,'active',false);
            console.log(targetTask);
        }else{
            spanicon.innerHTML = `<svg class="svg-inline--fa fa-circle" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>`
            taskTitle.classList.remove('strikethrough');
            TaskControl.modify(targetTask,'active',true);
            console.log(targetTask);
        }

    }



    // Update task function

    const updateTask = function(Task,oldProject){
        let taskData = [];

        const tasktitle = document.querySelector('#task_title');
        const discription = document.querySelector('#Discription_text');
        const dateinput = document.querySelector('#date_input');
        const taskpriority = document.querySelector('#task-priority');
        const projectselect = document.querySelector('#task-projects');

        taskData.push(tasktitle,discription,dateinput,taskpriority,projectselect);

        if(taskData.every(checkforInput)){
            TaskControl.erase(oldProject,Task.title);
            if(checkforDuplicates(Projectcontrol.locatebyTask(Task.title))){
                const newTask = TaskControl.create(taskData.map((item) => item.value));
                Projectcontrol.insert(projectselect.value,newTask);

                loadState();

                taskModel.hide();
                taskModel.reset();


            }
        }
    }



    

    // render task on page/task container

    const render = function({title,date,active}){
        const tasksContainer = document.querySelector('.task_div');
        const addtask = document.querySelector('#add_task');

        const taskDiv = createDom('div','task');

        tasksContainer.insertBefore(taskDiv,addtask);

        const leftPanel = createDom('div','leftPanel');
        taskDiv.appendChild(leftPanel);

        const icon = createDom('span','iconcheck');
        icon.innerHTML = `<i class="fa fa-circle"></i>`
        icon.addEventListener('click' , toggleStrike);
        
        
        const titlespan = createDom('span','title-span');
        titlespan.textContent = title;

        leftPanel.appendChild(icon);
        leftPanel.appendChild(titlespan);


        if(!active){
            titlespan.classList.add('strikethrough');
            icon.childNodes[0].classList.remove('fa-circle');
            icon.childNodes[0].classList.add('fa-check-circle');
        }
        

        const rightPanel = createDom('div','rightPanel');
        taskDiv.appendChild(rightPanel);

        const dateSpan = createDom('span', 'task-date');
        dateSpan.textContent = format(new Date(date), 'dd/MM/yyyy');
        const editIcon = createDom('span','edit-btn');
        editIcon.innerHTML = `<i class="fas fa-edit"></i>`;
        editIcon.addEventListener('click' , taskModel.show);

        const trashIcon = createDom('span');
        trashIcon.innerHTML = `<i class="fas fa-trash"></i>`;
        trashIcon.addEventListener('click', removeTask);

        rightPanel.appendChild(dateSpan);
        rightPanel.appendChild(editIcon);
        rightPanel.appendChild(trashIcon);

    };



        // setting title 

        const setTitle = function(title){
            const Divtitle = document.querySelector('.header_title');
            Divtitle.textContent = title;
        };

        // rendering projects getting it from projects functionality 

        const renderproject = function(project){
            project.list.forEach((task) => render(task));
        }

 // Loading according to conditions
    const loadState = function(){
        const containerTitle = document.querySelector('.itemElements > span').textContent;
        
        if(containerTitle === "All Tasks"){
        projectBox.loadAlltasks();
        }
    }


    // clearing task div

    const clear = function(){
        const tasks = document.querySelectorAll('.task');

        tasks.forEach(task => task.remove());
    };

    




return{
    addtask,
    setTitle,
    clear,
    renderproject,
    updateTask,
    loadState,
};

})();








export  {taskModel , Taskbox};

