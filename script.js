/* eslint-disable max-len */
const dynamicCard = document.querySelector('.dynamic');
const addBtn = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const listOfBooks = [{
  title: 'Shreds of Tenderness',
  author: 'John Ruganda',

},
{
  title: 'Rich Dad Poor Dad',
  author: 'Robert Kiosaki',
},
];

function addBooks(title, author) {
  const tempBooks = {
    title,
    author,
  };

  listOfBooks.push(tempBooks);
  const addedBooks = document.querySelector('.newbooks');
  const childEl = document.createElement('article');
  const grandChild = document.createElement('p');
  grandChild.innerText = tempBooks.title;
  childEl.appendChild(grandChild);
  const grandChild2 = document.createElement('p');
  grandChild2.innerText = tempBooks.author;
  childEl.appendChild(grandChild2);
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    childEl.style.display = 'none';
  });
  childEl.appendChild(removeBtn);
  const line = document.createElement('hr');
  childEl.appendChild(line);
  addedBooks.appendChild(childEl);
}

function removeBook(index) {
  listOfBooks.splice(listOfBooks.findIndex((e) => e.title === listOfBooks[index].title && e.author === listOfBooks[index].author), 1);
}

function bookLoader() {
  for (let i = 0; i < listOfBooks.length; i += 1) {
    const dynamicCardChild = document.createElement('article');
    const dynamicCardGrand = document.createElement('p');
    dynamicCardGrand.innerText = listOfBooks[i].title;
    dynamicCardChild.append(dynamicCardGrand);
    const dynamicCardGrand2 = document.createElement('p');
    dynamicCardGrand2.innerText = listOfBooks[i].author;
    dynamicCardChild.append(dynamicCardGrand2);
    const remove = document.createElement('button');
    remove.innerText = 'Remove';
    remove.addEventListener('click', () => {
      removeBook(i);
      dynamicCardChild.style.display = 'none';
    });
    dynamicCardChild.appendChild(remove);
    const underline = document.createElement('hr');
    dynamicCardChild.appendChild(underline);
    dynamicCard.appendChild(dynamicCardChild);
  }
}

addBtn.addEventListener('click', () => {
  addBooks(titleInput.value, authorInput.value);
});

let storedData = {
  title: '',
  author: '',
};

window.onload = () => {
  if (titleInput && authorInput) {
    const objectForm = localStorage.getItem('storedData');
    if (objectForm) {
      storedData = JSON.parse(objectForm);
      titleInput.value = storedData.title;
      authorInput.value = storedData.author;
    }
  }

  titleInput.addEventListener('change', () => {
    storedData.title = titleInput.value;
    localStorage.setItem('storedData', JSON.stringify(storedData));
  });

  authorInput.addEventListener('change', () => {
    storedData.author = authorInput.value;
    localStorage.setItem('storedData', JSON.stringify(storedData));
  });
};

/* let storedData = {
  title: '',
  author: '',
};

storedData = JSON.parse(localStorage.getItem('text'));
titleInput.addEventListener('click', () => {
  storedData.title = titleInput.value;
  localStorage.setItem('input', JSON.stringify(storedData));
});

authorInput.addEventListener('click', () => {
  storedData.author = authorInput.value;
  localStorage.setItem('input', JSON.stringify(storedData));
});
if (localStorage.getItem('input')) {
  let objectForm = localStorage.getItem('input');
  objectForm = JSON.parse(objectForm);
  document.getElementById('title').value = objectForm.title;
  document.getElementById('author').value = objectForm.author;
} */

bookLoader();
