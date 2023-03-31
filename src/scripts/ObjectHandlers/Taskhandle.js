import { projects } from "./storage";
import { storageControl } from "./storage";


const TaskControl = function(){

    const create = ([title,discription,date,priority])=>{
        let active = true;
        return{
            title,discription,date,priority,active
        }
    }

    const erase = function(targetProject,task){
        let indextask = locateTaskIndex(task);
        targetProject.list.splice(indextask,1);
        storageControl.store('projects',projects);
    }


    const locate = function(targetTask){
        let locatedTask;

        projects.some((project) => 
        { locatedTask = project.list.find(todo => todo.title === targetTask );
        if(locatedTask) return true;
    });
        return locatedTask;
    }


    const modify = function(task,attribute,newValue){
        task[attribute] = newValue;
        storageControl.store('projects',projects);
    }


    const locateTaskIndex = function(targetTask){
        let locatedIndex;

        projects.some((project) => { locatedIndex = project.list.findIndex(task => task.title === targetTask);
        
            if(locatedIndex) return true;
        
        });
        return locatedIndex;
    }


return{
    create,
    erase,
    locateTaskIndex,
    locate,
    modify,
}

}();

export {TaskControl};