

// check for input is not empty 

function checkforInput(input){
    if(input.value == ""){
        alert("Fields should not be empty");
        return false;
    }else return true;
}

// check for duplicates

function checkforDuplicates(fun){
    if(fun){
        alert("Object by this name already exist.");
        return false;
    }else return true;
}

export {checkforDuplicates,checkforInput};