import { checkforDuplicates , checkforInput } from "../helperFunctions/error";
import { resetValue } from "../helperFunctions/reset";
import { Projectcontrol } from "../ObjectHandlers/Projecthandle";
import { createDom } from "../helperFunctions/Dom";
import { projects } from "../ObjectHandlers/storage";
import { Taskbox } from "./taskFunctionality";


const projectBox = function(){

    const show = function(){
        const addbtn = document.querySelector('.addprojbtn');
        const projBox = document.querySelector('.project-box');

        addbtn.classList.add('hidden');
        projBox.classList.remove('hidden');
    };

    const hide = function(){
        const addbtn = document.querySelector('.addprojbtn');
        const projBox = document.querySelector('.project-box');

        addbtn.classList.remove('hidden');
        projBox.classList.add('hidden');
        reset();
    };


    // add new project and render on page
    const addNew = function(){
        const input = document.querySelector('#Project-Name');

        if(checkforInput(input))
        {
            
            Projectcontrol.create(input.value);
            render(input.value);
            loadProjectfromtitle(input.value);
            reset();
            hide();

        }


    };

    const erase = (e)=> {

        const projDiv = e.target.parentNode.parentNode.parentNode;
        const projectTitle = e.target.parentNode.parentNode.parentNode.firstChild.textContent;
       

        const targetIndex = projects.findIndex(project => project.title === projectTitle);
        Projectcontrol.erase(targetIndex);
        projDiv.remove();


        const projectSelectOptions = document.querySelectorAll(
            '#task-projects > option'
          );

          projectSelectOptions.forEach((option) => {
            if(option.textContent === projectTitle)
            {option.remove()}
             });

             Taskbox.loadState();

        
    };


    // for appending project on static page 
    const render = (title) => {
        
        const projdiv = document.querySelector('.projects');


        const proj = createDom('div' , 'list-element');
        projdiv.appendChild(proj);

        const span = createDom('span','element-title');
        span.textContent = title;
        proj.appendChild(span);

        const icon = createDom('button','delproj');
        icon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        icon.addEventListener('click',erase);
        proj.appendChild(icon);
        


        // render project on taskbox select project optionDiv

        const select = document.querySelector('#task-projects');

        const option = createDom('option');
        option.textContent = title;
        select.appendChild(option);

    }

    // render all projects in nav 

    const renderall = (projects)=> {
        projects.forEach((project) => {render(project.title)});
    }


    // Loading all tasks through project 

    const loadAlltasks = function(){
        Taskbox.clear();
        Taskbox.setTitle("All Tasks");
        projects.forEach((project) => {
            Taskbox.renderproject(project);
        });
    };

    //Load project from title

    const loadProjectfromtitle = function(title){
        const targetProject = Projectcontrol.locatebyProject(title);
        
        Taskbox.clear();
        Taskbox.setTitle(targetProject.title);
        Taskbox.renderproject(targetProject);
    }

    // load Project by clicking on title of project

    const LoadProjectbyClick = function(event){
        const targetProject = Projectcontrol.locatebyProject(event.target.textContent);

        Taskbox.clear();
        Taskbox.setTitle(targetProject.title);
        Taskbox.renderproject(targetProject);

    }





    function reset(){
        const input = document.querySelector('#Project-Name');
        resetValue(input);
    }


    return {
        show,
        hide,
        addNew,
        render,
        renderall,
        loadAlltasks,
        LoadProjectbyClick,
    }
}();

export {projectBox};