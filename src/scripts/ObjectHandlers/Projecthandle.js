import { projects } from "./storage";
import { storageControl } from "./storage";


const Projectcontrol = (function(){

    const create = (title)=>{
       const project ={
        title: title,
        list:[],
       }
       projects.push(project);
       storageControl.store('projects',projects);
    };

    const insert = (targetProject,task)=>{
        locatebyProject(targetProject).list.push(task);
        storageControl.store('projects',projects);
    };


    const erase = (index)=>{
       projects.splice(index,1);
       storageControl.store('projects',projects);
    };

    const locatebyTask = (task)=>{
        return projects.find((project) => {
          return  project.list.find((list) => list.title === task)})
    }


    const locatebyProject = (targetProject)=>{
        return projects.find(project => project.title === targetProject);
    };

    return {
        insert,
        locatebyProject,
        locatebyTask,
        create,
        erase,
    };


})();

export {Projectcontrol};