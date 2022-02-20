/*
1. List View
You are required to create a visual model that explains list insertion. The model must consist of three elements:
• List display section: The section on the page where the list will be displayed.
• Text field: A field to provide input for inserting a new element into the list.
• Button (named "Insert"): Clicking this button inserts a new element at the end of the existing list, the new element
being the value provided in the text field.
Requirements:
• No element should be inserted if the text field is empty. When the user clicks the button in case of empty input,
display the alert with the message "Please provide the valid input".
• When an element is inserted, reset the input value.
• Every third element in the list must be displayed in red and the remaining elements in black.
• Each of the list elements should follow the format <li style="">text to be inserted</fi>.
*/

function createButton(n) {
  for (let i = 1; i <= n; i++) {
    let buttons = document.createElement("button");
    buttons.innerHTML = i;
    document.body.appendChild(buttons);
  }
  let allButtons = document.getElementsByTagName("button");

  allButtons = Array.prototype.slice.call(allButtons);
  allButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      alert(index + 1);
    });
  });
}

createButton(20);
