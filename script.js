let myLibrary = [];

const donateButton = document.querySelector(".donate");
const browseButton = document.querySelector(".browse");
const form = document.querySelector(".form");
const collection = document.querySelector(".collection");

window.addEventListener('load', () => {
    mockLibrary();
})


browseButton.addEventListener("click", () => {
    displayLibrary();
});

donateButton.addEventListener('click', () => {
    if(form.style.display == 'grid') {
        form.style.display = 'none';
    } else {
        form.style.display = 'grid';
    }
});

function mockLibrary() {
    const book1 = new Book("Meditations", "Marcus Aurelius", 300);
    const book2 = new Book("Ad urbe condita", "Livy", 2300);
    const book3 = new Book("De re publica ", "Cicero", 231);

    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
}

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {

}


//TODO: Fix table concept etc :)
function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        const displayed = document.createTextNode(myLibrary[i].name);
        collection.appendChild(displayed);
    }
}