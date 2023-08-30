document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const listButton = document.getElementById("listButton");
    const addBookModal = document.getElementById("addBookModal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close");
    const saveButton = document.getElementById("saveButton");
    const deleteButton = document.getElementById("deleteButton");
    const bookList = document.querySelector("#bookList ul");
  
    addButton.addEventListener("click", () => {
      addBookModal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      addBookModal.style.display = "none";
    });
  
    listButton.addEventListener("click", () => {
      bookList.innerHTML = ""; // Clear previous list items
  
      // Retrieve saved books from local storage and display them
      const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
      savedBooks.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        bookList.appendChild(listItem);
      });
});

saveButton.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;

    if (title && author && pages) {
      const book = { title, author, pages };
      const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
      savedBooks.push(book);
      localStorage.setItem("books", JSON.stringify(savedBooks));

      addBookModal.style.display = "none";
    }
  });

  deleteButton.addEventListener("click", () => {
    // Implement book deletion functionality here
    // You can use a similar approach as for saving books
    // Remove the selected book from the savedBooks array and update local storage
    // Then close the modal
  });
});