import { createDom } from "../helperFunctions/Dom";

function createNav(){

const body = createDom('div','bodyDiv');


const NavBody = createDom('div', 'navbody');
body.appendChild(NavBody);

const Shortcuts = createDom('div','shortcuts');
NavBody.appendChild(Shortcuts);

const ShortcutsHead = createDom('h3','shortcuthead');
ShortcutsHead.textContent = "Shortcuts";
Shortcuts.appendChild(ShortcutsHead);

const listItem = createDom('div','itemElements');

listItem.id = "Alltasks";

const icon = createDom('i','fa','fa-calendar');
const discription = createDom('span');
discription.textContent = "All Tasks";
listItem.appendChild(icon);
listItem.appendChild(discription);

Shortcuts.appendChild(listItem);

const projdiv = createDom('div','projdiv');
NavBody.appendChild(projdiv);

const Projhead = createDom('h3','projhead');
Projhead.textContent = "Projects";
projdiv.appendChild(Projhead);

const projects = createDom('div','projects');
projdiv.appendChild(projects);


const projAdd = createDom('div','projadddiv');
NavBody.appendChild(projAdd);

const addprojbtn = createDom('button', 'addprojbtn');
addprojbtn.id = "add-project";
addprojbtn.textContent = "Add Project";
projAdd.appendChild(addprojbtn);


const projaddbox = createDom('div','project-box','hidden');
NavBody.appendChild(projaddbox);

const projectInput = createDom('input');
projectInput.id = "Project-Name";
projectInput.type = "text";
projectInput.placeholder = "Project Name";
projaddbox.appendChild(projectInput);

const projboxbtns = createDom('div','projboxbtns');
projaddbox.appendChild(projboxbtns);

const addboxbtn = createDom('button');
addboxbtn.id = "add-project-box";
addboxbtn.textContent = "Add";
projboxbtns.appendChild(addboxbtn);

const cancelButton = createDom('button');
cancelButton.id = 'cancel-project-box';
cancelButton.textContent = 'Cancel';
projboxbtns.appendChild(cancelButton);


return body;
}

export {createNav};