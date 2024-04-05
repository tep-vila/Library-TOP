const addBookButton = document.querySelector("#addBookButton");
const form = document.querySelector(".form");
const bookShelf = document.querySelector(".shelf");
const submit = document.querySelector(".submit");
const allInputs = form.querySelectorAll("input");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const haveRead = document.querySelector("#haveRead");

let bookStack = [];

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
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete Book";

  deleteButton.addEventListener("click", () => {
    const book = deleteButton.parentElement;
    const bookTitleElement = book.querySelector("h3");
    const bookTitle = bookTitleElement.textContent;

    console.log(bookTitle);
    deleteBookFromArray(bookTitle);
    bookElement.remove();
  });

  bookElement.appendChild(deleteButton);
}

function deleteBookFromArray(bookTitle) {
  const updatedBookStack = bookStack.filter((book) => {
    console.log(book.title);
    book.title !== bookTitle;
  });

  bookStack = updatedBookStack;
}

function addChangeStatusButton(bookElement) {
  const button = document.createElement("button");
  const book = bookElement;
  const title = book.querySelector("h3").textContent;

  button.classList.add("changeStatus");
  button.textContent = "Change Status";
  console.log(book.classList.value);

  button.addEventListener("click", () => {
    if (book.classList.value === "book") {
      book.classList.add("read");
    } else if (book.classList.value === "book read") {
      book.classList.remove("read");
    }

    changeBookStatusInArray(title);
  });

  bookElement.appendChild(button);
}

function changeBookStatusInArray(title) {
  bookStack = bookStack.map((book) => {
    if (book.title === title) {
      book.haveRead = !book.haveRead; // Toggle the haveRead property
    }
    return book; // Return the modified book
  });
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
  if (haveRead.checked) {
    book.classList.add("read");
  } else {
    book.classList.remove("read");
  }

  createBookObject();
  addChangeStatusButton(book);
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

const exitButton = document.querySelector(".top > div:nth-child(2) ");
exitButton.addEventListener("click", () => {
  clearInput();
  form.close();
});
