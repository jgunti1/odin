const container = document.querySelector('#container');
const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I\'m red'
content.style.color = 'red';
const header = document.createElement('h3');
header.classList.add('header');
header.textContent = 'I\'m a blue h3';
header.style.cssText = 'color:blue;';
const div = document.createElement('div');
const header2 = document.createElement('h1');
header2.textContent = 'I\m in a div';
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'ME TOO!';
div.style.cssText = 'border-style:solid; background-color:pink;';
div.appendChild(header2);
div.appendChild(paragraph2);
container.appendChild(content);
container.appendChild(header);
container.appendChild(div);
const btn = document.querySelector('#btn');
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.id);
    })
})