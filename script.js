let myLibrary = [];

const donateButton = document.querySelector(".donate");
const browseButton = document.querySelector(".browse");
const form = document.querySelector(".form");

browseButton.addEventListener("click", () => {

});

donateButton.addEventListener("click", () => {
    form.style.display = "none";
    console.log("clicked");
});

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function displayLibrary() {}