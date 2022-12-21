document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const form

  const handleForm = function (event) {
    event.preventDefault();
    const newList = document.createElement('ul');

    const title = document.createElement('li');
    title.textContent = `Title: ${event.target.title.value}`;
    const author = document.createElement('li');
    author.textContent = `Author: ${event.target.author.value}`; 
    const category = document.createElement('li')
    category.textContent = `Category: ${event.target.category.value}`;

    newList.appendChild(title);
    newList.appendChild(author);
    newList.appendChild(category);
    
    const list = document.querySelector('#reading-list');
    list.appendChild(newList);
    
    document.querySelector('#new-item-form').reset();
  } 

  const deleteAll = function () {
    const list = document.querySelector('#reading-list');
    list.replaceChildren();
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', deleteAll);

})
