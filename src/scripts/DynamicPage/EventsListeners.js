import { projectBox } from "./ProjectFunctionality";
import { taskModel } from "./taskFunctionality";





function startEvents(){

    const addProject = document.querySelector('.addprojbtn');
    addProject.addEventListener('click', projectBox.show );

    const cancelprojbtn = document.querySelector('#cancel-project-box');
    cancelprojbtn.addEventListener('click', projectBox.hide);

    const addprojbutton = document.querySelector('#add-project-box');
    addprojbutton.addEventListener('click', projectBox.addNew);

    const projectaddbtn = document.querySelector('#Project-Name');
    projectaddbtn.addEventListener('keyup',(e)=>{
        if(e.keyCode == 13){
            addprojbutton.click();
        }
    })

    const addTaskbtn = document.querySelector('#add_task');
    addTaskbtn.addEventListener('click', ()=>{taskModel.show("New Task")});

    const addTaskbtnHead = document.querySelector('.addTodo');
    addTaskbtnHead.addEventListener('click', ()=>{taskModel.show("New Task")});

    const LoadAlltaskBtn = document.querySelector('#Alltasks');
    LoadAlltaskBtn.addEventListener('click',projectBox.loadAlltasks);

    const loadProjectsbyclick = document.querySelector('.projects');
    loadProjectsbyclick.addEventListener('click',(e) => { projectBox.LoadProjectbyClick(e) });



    
}

export {startEvents};