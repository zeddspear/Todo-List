import { createDom } from "../helperFunctions/Dom";

function createHeader(){
    let header = createDom('header');

    let logocontainer = createDom('div','logo');
    
    let icon = createDom('i','fa','fa-check-square');

   logocontainer.appendChild(icon);

    let title = createDom('span','title');
    title.textContent = 'TODO - make your LIFE easy';

    logocontainer.appendChild(title);

    header.appendChild(logocontainer);

    let addTodobtn = createDom('button','addTodo');
    addTodobtn.innerHTML = '<i class="far fa-plus-square"></i>'
    header.appendChild(addTodobtn);

   

    return header;
}

export {createHeader}
