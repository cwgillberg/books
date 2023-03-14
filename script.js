let myLibrary = [];
var browseActive = false;
var donateActive = false;

const donateButton = document.querySelector(".donate");
const browseButton = document.querySelector(".browse");
const form = document.querySelector(".form");
const collection = document.querySelector(".collection");
const submitButton = document.querySelector('.submit');
const speaker = document.querySelector('.speaker');

window.addEventListener('load', () => {
    mockLibrary();
})

browseButton.addEventListener("click", () => {
    if(browseActive == false && donateActive == false) {
        displayLibrary();
        browseActive = true;
    } else if(browseActive == false && donateActive == true) {
        toggleForm('off');
        donateActive = false;

        displayLibrary();
        browseActive = true;
    } else {
        hideLibrary();
        browseActive = false;
    }
});

donateButton.addEventListener('click', () => {
    if(donateActive == true) {
        toggleForm('off')
        donateActive = false;

    } else if(donateActive == false && browseActive == true) {
        hideLibrary();
        browseActive = false;

        toggleForm('on');
        donateActive = true;

    } else {
        toggleForm('on');
        donateActive = true;
    }

});

submitButton.addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    if(title !== '' && author !== '' && pages !== '') {
        addBookToLibrary(title, author, pages);
        document.querySelector('form').reset();  
        toggleForm('off');
        speakerTimeOut(`Thank you for submitting <em>${title}</em> to the library!`);
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

function toggleForm(state) {
    if(state == 'on') {
        form.style.display = 'grid';
    } else {
        form.style.display = 'none';
    }
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}


function withdraw(title) {
    let index = 0;

    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title == title) {
            index = i;
        }
    }

    speakerTimeOut(`You have withdrawn <em>${title}</em>, please return it within a period of 10 days`);

    myLibrary.splice(index, 1);

    hideLibrary();
    displayLibrary();
}

function makeCard(title, author, pages) {
    //card and card sections
    let card = document.createElement('div');
    card.className = 'card';

    let cardLeft = document.createElement('div');
    cardLeft.className = 'card-left';

    let cardRight = document.createElement('div');
    cardRight.className = 'card-right';

    //card elements
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

function hideLibrary() {
    //credit: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while(collection.firstChild) {
        collection.removeChild(collection.lastChild);
    }
}

function speakerTimeOut(msg) {
    speaker.innerHTML = msg;
    setTimeout(()=>{
        speaker.innerHTML = '';
    }, 4000);
}
