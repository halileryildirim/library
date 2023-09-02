const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    library.replaceChildren();
    render();
}

const newBookBtn = document.querySelector("#new-book-btn");
const mainDialog = document.querySelector("#form-dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const library = document.querySelector("#library-showcase");


newBookBtn.addEventListener("click", () => {
    mainDialog.showModal();    
})

cancelBtn.addEventListener("click", () => {
    mainDialog.close();
})

confirmBtn.addEventListener("click", (event) => {
    let validity = document.getElementById("book-form").checkValidity();
    if(validity) {
        event.preventDefault();
        addBookToLibrary();
    }
    
}) 
 
function render() {
    for (const book in myLibrary) {

        const bookDiv = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookTitletext = document.createTextNode(`Title: ${myLibrary[book].title}`);
        bookTitle.appendChild(bookTitletext);
        bookDiv.appendChild(bookTitle);
        
        const bookAuthor = document.createElement("p");
        const bookAuthorText = document.createTextNode(`Author: ${myLibrary[book].author}`);
        bookAuthor.appendChild(bookAuthorText);
        bookDiv.appendChild(bookAuthor);


        const bookPages = document.createElement("p");
        const bookPagesText = document.createTextNode(`${myLibrary[book].pages} pages`);
        bookPages.appendChild(bookPagesText);
        bookDiv.appendChild(bookPages);

        const readButton = document.createElement('button');
        if(myLibrary[book].read) {
            let text = document.createTextNode("READ");
            readButton.appendChild(text);
        }

        else {
            let text = document.createTextNode("NOT READ");
            readButton.appendChild(text);
        }
        bookDiv.appendChild(readButton);
        library.appendChild(bookDiv);
    }
}
