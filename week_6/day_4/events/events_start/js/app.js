// 1. which element will be dispatching the event?
//  (e.g. document)
// 2. which event should we listen for?
//  (e.g. 'DOMContentLoaded')
// 3. which piece of code should run when the event is dispatched?
//  (e.g. callback)



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

// ##########################################
// handle button click

  const handleButtonClick = function(){
    const resultParagraph = document.querySelector('#button-result');
    resultParagraph.textContent = "That button has been clicked";
  }

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

// ###########################################
// handle input

  const handleInput = function (event) {
    
    // get value from input
    // update the paragraph text

    const inputParagraph = document.querySelector('#input-result');
    inputParagraph.textContent = `we've typed "${event.target.value}" here`;
  }

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  // ###############################################
  // handle select

  const handleSelect = function (event) {
    const selectParagraph = document.querySelector('#select-result');
    selectParagraph.textContent = `you have selected: ${event.target.value}... may I suggest: putter`;
  }

  const selectInput = document.querySelector('#select');
  selectInput.addEventListener('change', handleSelect);

  // #################################################
  // handle form submit

  const handleForm = function(event) {
    event.preventDefault();
    const formParagraph = document.querySelector('#form-result');
    formParagraph.textContent = `your name is: 
    ${event.target.first_name.value} 
    ${event.target.last_name.value}`;
  }

  const selectForm = document.querySelector('#form');
  selectForm.addEventListener('submit', handleForm);
  


});

