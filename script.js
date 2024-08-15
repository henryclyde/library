const myLibrary = [];

document.getElementById("submit").addEventListener("click", addBook);

function Book(title,author,readYet) {
    this.title = title;
    this.author = author;
    this.readYet = readYet;
}

function addBook() {
    // let title = prompt("What book would you like to add?");
    // let author = prompt(`Who is the author of "${title}"`);
    // let readYet = prompt(`Have you read "${title}" yet? (yes/no)`);
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let readYet = document.getElementById("read").value;
    const newBook = new Book(title,author,readYet);
    myLibrary.push(newBook);
    let titleText = document.createTextNode(`${myLibrary[myLibrary.length-1].title}`);
    let authorText = document.createTextNode(`${myLibrary[myLibrary.length-1].author}`);
    let readText = document.createTextNode(`${myLibrary[myLibrary.length-1].readYet}`);
    addBookToTable(titleText,authorText,readText);
}

function addBookToTable(t,a,r) {
    let table = document.querySelector("table");

    let newRow = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");
    let readYet = document.createElement("td");

    title.appendChild(t);
    author.appendChild(a);
    readYet.appendChild(r);

    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(readYet);

    table.appendChild(newRow);
}

function populateBooks() {
    for (let i in myLibrary) {
        let titleText = document.createTextNode(`${myLibrary[i].title}`);
        let authorText = document.createTextNode(`${myLibrary[i].author}`);
        let readText = document.createTextNode(`${myLibrary[i].readYet}`);
        addBookToTable(titleText,authorText,readText);
    }
}

addBook();
populateBooks();
console.log(myLibrary);