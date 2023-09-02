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
        bookDiv.id = 'books';
        const bookTitle = document.createElement("p");
        const bookTitletext = document.createTextNode(`Title: ${myLibrary[book].title}`);
        bookTitle.appendChild(bookTitletext);
        
        const bookAuthor = document.createElement("p");
        const bookAuthorText = document.createTextNode(`Author: ${myLibrary[book].author}`);
        bookAuthor.appendChild(bookAuthorText);
        
        const bookPages = document.createElement("p");
        const bookPagesText = document.createTextNode(`${myLibrary[book].pages} pages`);
        bookPages.appendChild(bookPagesText);
        
        const readBtn = document.createElement('button');
        if(myLibrary[book].read) {
            let text = document.createTextNode("READ");
            readBtn.appendChild(text);
        }

        else {
            let text = document.createTextNode("NOT READ");
            readBtn.appendChild(text);
        }
        

        const removeBtn = document.createElement("button");
        removeBtn.id = 'remove-button';
        let text = document.createTextNode("REMOVE");
        removeBtn.appendChild(text);
        
        removeBtn.addEventListener("click", () => {
            bookDiv.remove();
            myLibrary.splice(book, 1);
        })


        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readBtn);
        bookDiv.appendChild(removeBtn);

        library.appendChild(bookDiv);
    }
}

