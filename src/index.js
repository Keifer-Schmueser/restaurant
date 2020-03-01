import homePage from './homePage';
import contact from './contact';
import makeMenu from './menu';

const title = document.getElementById('title');
const content = document.getElementById('content');
const homePageContent = homePage('Pizza Place');
const contactContent = contact();
const menuContent = makeMenu();
const homeBtn = document.getElementById('homePageBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.style.backgroundColor = 'green';
title.innerHTML = 'Pizza Place';
homePageContent.forEach(element => {
  content.appendChild(element);
});

homeBtn.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  contactBtn.style.backgroundColor = 'white';
  menuBtn.style.backgroundColor = 'white';
  homeBtn.style.backgroundColor = 'green';

  title.innerHTML = 'Pizza Place';

  homePageContent.forEach(element => {
    content.appendChild(element);
  });
});

contactBtn.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  contactBtn.style.backgroundColor = 'green';
  menuBtn.style.backgroundColor = 'white';
  homeBtn.style.backgroundColor = 'white';

  title.innerHTML = 'Contact Us';

  contactContent.forEach(element => {
    content.appendChild(element);
  });
});

menuBtn.addEventListener('click', e => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  contactBtn.style.backgroundColor = 'white';
  menuBtn.style.backgroundColor = 'green';
  homeBtn.style.backgroundColor = 'white';

  title.innerHTML = 'Our Menu';

  menuContent.forEach(element => {
    let name = document.createElement('h1');
    let price = document.createElement('h3');
    let description = document.createElement('h4');

    name.innerHTML = element[0];
    price.innerHTML = element[1];
    description.innerHTML = element[2];

    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(description);
  });
});
