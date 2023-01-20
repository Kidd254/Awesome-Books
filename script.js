/* eslint-disable max-len */
const dynamicCard = document.querySelector('.dynamic');
const addBtn = document.querySelector('#btn');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

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
  const addedBooks = document.querySelector('.new-books');
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
  listOfBooks.splice(listOfBooks.findIndex((e) => e.title === listOfBooks[index].title && e.author === listOfBooks[index].title), 1);
}

function bookLoader() {
  for (let i = 0; i < listOfBooks; i += 1) {
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
    });
    dynamicCardChild.appendChild(remove);
    const underline = document.createElement('hr');
    dynamicCardChild.appendChild(underline);
    dynamicCard.appendChild(dynamicCardChild);
  }
}

addBtn.addEventListener('click', () => {
  addBooks(titleInput.Value, authorInput.value);
});

bookLoader();
