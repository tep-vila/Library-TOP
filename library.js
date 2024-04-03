const addBookButton = document.querySelector("#addBookButton");
const form = document.querySelector(".form");
const bookShelf = document.querySelector(".shelf");
const submit = document.querySelector(".submit");
const allInputs = form.querySelectorAll("input");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const haveRead = document.querySelector("#haveRead");

const bookStack = [];

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

  bookStack.push(book);
}

function addDeleteButton(bookElement) {
  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete Book";
  bookElement.appendChild(deleteButton);
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
  book.classList.add(haveRead.checked ? "read" : "notRead");
  createBookObject();
  addDeleteButton(book);
  bookShelf.appendChild(book);
}

function clearInput() {
  allInputs.forEach((field) => {
    field.value = "";
    field.checked = false;
  });
}

addBookButton.addEventListener("click", (event) => {
  console.log(event.target);
  form.showModal();
});

submit.addEventListener("click", () => {
  createBookElement();
  clearInput();
  form.close();
});
