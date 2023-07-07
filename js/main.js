document.addEventListener('DOMContentLoaded', function() {
    var options;
    var materialboxes = document.querySelectorAll('.materialboxed');
    var initMaterialBoxes = M.Materialbox.init(materialboxes, options);
    
    //Initializing modals
    var modalOptions = {
        opacity: 0.8,
        preventScrolling: false
    };
    var modals = document.querySelectorAll('.modal');
    var initModals = M.Modal.init(modals, modalOptions);
});

//Integer
let variableNumber = 2;

//String
let color = "red";

//Change anything to red background
function changeColor(elementId) {
    document.getElementById(elementId).style.backgroundColor = color;
}

//Create a new button button
function createButton() {
    let newButton = document.createElement('a');
    newButton.className = "btn";
    newButton.innerHTML = "New Button!"
    document.getElementById("hero").appendChild(newButton);
}

//Dark Mode
function toggleDark() {
    document.body.classList.toggle('dark');
}

function toggleNav() {
    document.getElementById('navWrapper').classList.toggle('active');
    document.getElementById('navTrigger').classList.toggle('active');
}