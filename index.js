// Remove the 'main' element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign it an id of 'victory'
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "ibsisituh is the champion";

// Add it to the DOM (e.g., append to body)
document.body.append(newHeader);