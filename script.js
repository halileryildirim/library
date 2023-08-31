const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    
}

const showDialog = document.getElementById("main-dialog");
showDialog.addEventListener("click", function() {
    let bookForm = document.getElementById("book-form");
    bookForm.style.display = "block";
})
