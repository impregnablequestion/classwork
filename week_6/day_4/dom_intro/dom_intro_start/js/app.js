console.log("app loaded", window);

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = 'Javascript says "Hello World"!';

    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    console.log(welcomeParagraph);
    console.dir(welcomeParagraph);

    const redElement = document.querySelector('li.red');
    console.dir(redElement);
    redElement.textContent = 'I am a silly red element haha';
    redElement.classList.add('bold');

    const allListElements = document.querySelectorAll('li');
    console.log(allListElements);
    
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
});
