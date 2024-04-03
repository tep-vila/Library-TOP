const addBookButton = document.querySelector("#addBookButton");
const form = document.querySelector(".form");
const bookShelf = document.querySelector(".shelf");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const haveRead = document.querySelector("#haveRead");

function Book(title, author, page, haveRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.haveRead = haveRead;
}

function createBookObject() {
  const book = new Book(
    title.value,
    author.value,
    page.value,
    haveRead.checked
  );
}

function createBookElement() {
  const book = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookPage = document.createElement("p");

  book.classList.add("book");
  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookPage.textContent = page.value;

  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(bookPage);

  bookShelf.appendChild(book);
}

addBookButton.addEventListener("click", (event) => {
  console.log(event.target);
  form.showModal();
});
