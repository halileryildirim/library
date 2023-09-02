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
        const bookTitletext = document.createTextNode(`${myLibrary[book].title}`);
        bookTitle.appendChild(bookTitletext);
        
        const bookAuthor = document.createElement("p");
        const bookAuthorText = document.createTextNode(`${myLibrary[book].author}`);
        bookAuthor.appendChild(bookAuthorText);
        
        const bookPages = document.createElement("p");
        const bookPagesText = document.createTextNode(`${myLibrary[book].pages} pages`);
        bookPages.appendChild(bookPagesText);
        
        const readBtn = document.createElement('button');
        if(myLibrary[book].read) {
            let text = document.createTextNode("READ");
            readBtn.appendChild(text);
            readBtn.id = "book-is-read";
        }

        else {
            let text = document.createTextNode("NOT READ");
            readBtn.appendChild(text);
            readBtn.id = "book-is-not-read";
        }
        
        readBtn.addEventListener("click", () => {
            if(readBtn.textContent == "READ") {
                let text = document.createTextNode("NOT READ");
                readBtn.replaceChildren();
                readBtn.appendChild(text);
                readBtn.id = "book-is-not-read";
            }
    
            else if(readBtn.textContent == "NOT READ"){
                let text = document.createTextNode("READ");
                readBtn.replaceChildren();
                readBtn.appendChild(text);
                readBtn.id = "book-is-read";
            }
        })

        const removeBtn = document.createElement("button");
        let text = document.createTextNode("REMOVE");
        removeBtn.appendChild(text);
        removeBtn.id = "removeBtn";

        removeBtn.addEventListener("click", () => {
            bookDiv.remove();
            myLibrary.splice(-1, 1);
        })

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readBtn);
        bookDiv.appendChild(removeBtn);

        library.appendChild(bookDiv);
    }
}

