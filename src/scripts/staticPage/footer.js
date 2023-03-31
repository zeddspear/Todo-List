import { createDom } from "../helperFunctions/Dom";

function createFoot(){
    const footerdiv = createDom('div' , 'footer');

    const footpara = createDom('p');
    footpara.textContent = "Made by Zeddspear";
    footerdiv.appendChild(footpara);

    const link = createDom('a');
    link.href = "https://github.com/zeddspear";
    link.target = "_blank";

    const icon = createDom('i','fab','fa-github');
    link.appendChild(icon);

    footpara.appendChild(link);

    return footerdiv;
}

export {createFoot};