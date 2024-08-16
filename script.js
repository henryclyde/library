const myLibrary = [];

document.getElementById("submit").addEventListener("click", addBook);

function Book(title,author,readYet) {
    this.title = title;
    this.author = author;
    this.readYet = readYet;
}


function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let readYet = document.getElementById("read").checked;
    const newBook = new Book(title,author,readYet);
    myLibrary.push(newBook);
    let titleText = document.createTextNode(`${myLibrary[myLibrary.length-1].title}`);
    let authorText = document.createTextNode(`${myLibrary[myLibrary.length-1].author}`);
    let readText =  document.createElement("input")
    readText.type = "checkbox";
    readText.checked = readYet.checked;
    readText.addEventListener("click",()=>{
        newBook.readYet = !newBook.readYet;
    });

    let table = document.querySelector("table");

    let newRow = document.createElement("tr");
    let titleTd = document.createElement("td");
    let authorTd = document.createElement("td");
    let readYetTd = document.createElement("td");
    let removeTd = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        removeButton.closest("tr").remove();
    });

    titleTd.appendChild(titleText);
    authorTd.appendChild(authorText);
    readYetTd.appendChild(readText);
    removeTd.appendChild(removeButton);

    newRow.appendChild(titleTd);
    newRow.appendChild(authorTd);
    newRow.appendChild(readYetTd);
    newRow.appendChild(removeTd);

    table.appendChild(newRow);
    document.getElementById("report").addEventListener("click", ()=>{
        console.log(myLibrary);
    });
}




