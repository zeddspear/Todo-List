// creating element with tag argument and all classes string.

function createDom(tag, ...classes){
    const newdom = document.createElement(tag);

    if(classes.length === 0){
        return newdom;
    }else{
        classes.forEach((string) => newdom.classList.add(string));
        return newdom;
    }
   
}

export {createDom};