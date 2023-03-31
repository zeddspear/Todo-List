
// here *************************************************
import { projectBox } from "../DynamicPage/ProjectFunctionality";
import { Projectcontrol } from "./Projecthandle";
import { TaskControl } from "./Taskhandle";
import { endOfTomorrow , endOfWeek , addYears } from "date-fns";
let projects = [];


const storageControl = (()=>{


    const initiate = function(){
        let storedProjects = check('projects');

    // check if there are stored projects
        if(storedProjects !== undefined){
            projects = storedProjects;
            projectBox.renderall(projects);
            projectBox.loadAlltasks();
        }else{
            console.log("No project in localStorage");
        }



    }






    // check data in local storage
    const check = function(string){
        if(localStorage.getItem(string)){
            return JSON.parse(localStorage.getItem(string));
        }
    }

    // store data in local storage
    const store = function(store , data){
        localStorage.setItem(store,JSON.stringify(data));
    }


    return {store,
            check,
            initiate,
                }

})();



export {projects , storageControl};