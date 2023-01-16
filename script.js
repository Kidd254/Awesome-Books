/* eslint-disable no-alert */
const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');
const addInput = document.querySelector('#add-book');
const bookList = document.querySelector('#books');

addInput.addEventListener('click', () => {
  if (titleInput.value === '' && authorInput.value === '') {
    alert('Enter any input!');
  } else {
    const bookListRow = document.createElement('div');
    const newTitle = document.createElement('article');
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);
    const newAuthor = document.createElement('article');
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);
    const removeInput = document.createElement('input');
    removeInput.value = 'remove';
    bookListRow.appendChild(removeInput);

    bookList.appendChild(bookListRow);
  }
});
