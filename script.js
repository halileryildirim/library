const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

const newBookBtn = document.querySelector("#new-book-btn");
const mainDialog = document.querySelector("#form-dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const library = document.querySelector("#library-showcase")

newBookBtn.addEventListener("click", () => {
    mainDialog.showModal();    
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
}) 

