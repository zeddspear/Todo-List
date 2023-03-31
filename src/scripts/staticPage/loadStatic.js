import { createHeader } from "./header";
import { createNav } from "./nav";
import { createmain } from "./main";
import { createFoot } from "./footer";
import { createTask } from "./newtask";

function renderStaticPage(content){
    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createmain());
    content.appendChild(createFoot());
    content.appendChild(createTask());
}

export { renderStaticPage };