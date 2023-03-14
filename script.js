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

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {

}

/*
function make card
    set title -> title
    set author -> author
    set pages -> pages


*/

function makeCard(title, author, pages) {
    let card = document.createElement('div');
    card.className = 'card';

    let cardLeft = document.createElement('div');
    cardLeft.className = 'card-left';

    let cardRight = document.createElement('div');
    cardRight.className = 'card-right';

    let cardTitle = document.createElement('p');
    cardTitle.style.textDecoration = 'underline';
    cardTitle.innerHTML = title;

    let cardAuthor = document.createElement('p');
    cardAuthor.style.fontStyle = 'italic';
    cardAuthor.innerHTML = author;

    let cardPages = document.createElement('p');
    cardPages.innerHTML = `${pages} pages`;

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'withdraw title';

    removeButton.addEventListener('click', () => {
        withdraw(title);
    });

    cardLeft.appendChild(cardTitle);
    cardLeft.appendChild(cardAuthor);
    cardLeft.appendChild(cardPages);

    cardRight.appendChild(removeButton);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    return card;
}

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        collection.appendChild(makeCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages));
    }

   
}

function withdraw(title) {

}