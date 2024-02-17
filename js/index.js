
// Task 1: Show the JavaScript Resources

// reference variable to div element with id of resources
let resourcesDiv = document.querySelector('#resources');
// reference variable to the button with the id of show-resources
let showResourcesBtn = document.querySelector('#show-resources');

//add event listener on the button that will listen to the click event 
showResourcesBtn.addEventListener("click", showResources);

// Create an event handler function for button element id that removes the class d-none from the div element
function showResources(){
    resourcesDiv.classList.remove('d-none');
}

// Task 2: Making links bold 

// Add an event listener on to the to the div element with the id of resources
document.querySelector('#resources').addEventListener("mouseover", addBoldHandler)

// Make sure to pass the event object to the event handler function.
function addBoldHandler(e){
    // Using the console.log() method display the target property of the event object
    console.log(e.target);

    // On the event.target use the method classList.add to add the class named fw-bold.
    e.target.classList.add('fw-bold');
}


// Task 3: Remove the bold font from the links

document.querySelector('#resources').addEventListener("mouseout", removeBoldHandler)

function removeBoldHandler(e){
    console.log(e.target);

    e.target.classList.remove('fw-bold');
}


// Task 4: Italicize a clicked item

document.querySelector('#resources').addEventListener("click", addItalicHandler)

function addItalicHandler(e){
    console.log(e.target);

    e.target.classList.add('fst-italic');
}

// Task 5: Remove Italic 

document.querySelector('#resources').addEventListener("mouseout", removeItalicHandler)

function removeItalicHandler(e){
    console.log(e.target);

    e.target.classList.remove('fst-italic');
}
