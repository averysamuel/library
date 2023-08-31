
let myLibrary = [];
const theHobbit = new Book('The Hobbit','J.R.R Tolkein','295','yes');
const theWind = new Book('The Wind','Avery','255', 'no');
const theSea = new Book('The Sea','AveryAgain','285', 'no');


function Book(title, author, pages) {
    this.title = title
    this.author = author 
    this.pages = pages 
    //this.read = read
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

//add book to library array and display on screen 
const container = document.querySelector('#container');
function addBookToLibrary(book){
    myLibrary.push(book);
    let index = myLibrary.indexOf(book);

        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const removeBtn = document.createElement('button');
        const readBtn = document.createElement('button');
       
        bookCard.classList.add('bookCard', `bookNum${index}`);
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        removeBtn.classList.add('removeBtn',`${index}`);
        readBtn.classList.add('readBtn',`${index}`);
        removeBtn.addEventListener('click',()=> { //remove book
            let bookIndex = removeBtn.classList[1];
            removeBook(bookIndex);
        })
        readBtn.addEventListener('click',()=> { //mark read
            let bookIndex = readBtn.classList[1];
            markRead(bookIndex);
        })

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} pages`;
        removeBtn.textContent = "Remove";
        readBtn.textContent = "Read";
        //bookCard.textContent = book.info();
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(removeBtn);
        container.appendChild(bookCard);
    }
addBookToLibrary(theHobbit);
addBookToLibrary(theWind);
addBookToLibrary(theSea);


//remove book from library 
function removeBook(bookIndex) {
    const removeBook = document.querySelector(`.bookNum${bookIndex}`);
    container.removeChild(removeBook);
    
}


//open the dialog box when clicking new book button 
const openDialog = document.getElementById('openDialogBtn');
const dialogBox  = document.getElementById('dialogBox');
openDialog.addEventListener('click',() => {
   dialogBox.showModal(); 
})

//add new book to library when add book button clicked 
const addBook = document.getElementById('addBook');
const bookTitle = dialogBox.querySelector('#bookTitle');
const bookAuthor = dialogBox.querySelector('#bookAuthor');
const bookPages = dialogBox.querySelector('#bookPages');
const outputBox = document.querySelector('output');

addBook.addEventListener('click',() =>{
    let newBook = new Book(bookTitle.value,bookAuthor.value,bookPages.value);
    addBookToLibrary(newBook);
    console.log(bookTitle.value);
    document.querySelector('form').reset();
    dialogBox.close();
})

//mark book read 
function markRead(bookIndex) {
    const readBook = document.getElementsByClassName(`readBtn ${bookIndex}`);
    readBook[0].classList.toggle('read');
    if (readBook[0].classList.contains('read')){
        readBook[0].textContent = 'Unread';
    }
    else{
        readBook[0].textContent = 'Read';
    }
    
}
  

