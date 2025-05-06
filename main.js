const addButton = document.getElementById("addButton");

if (addButton) {
    addButton.addEventListener("click", function () {
        const title = document.getElementById("titleValue").value.trim();
        const author = document.getElementById("authorValue").value.trim();

        if (title && author) {
            const newBook = { title, author };
            const books = JSON.parse(localStorage.getItem("fantasyBooks")) || [];
            books.push(newBook);
            localStorage.setItem("fantasyBooks", JSON.stringify(books));
            document.getElementById("titleValue").value = "";
            document.getElementById("authorValue").value = "";
            alert(`${title} by ${author} has been added to our library! 
Check our list of books to view your latest addition!`);
        } else {
            alert("Please fill in both fields.");
        }
    });
}

const valueListDisplay = document.querySelector(".valueListDisplay");

if (valueListDisplay) {
    displayBooks();
}

function displayBooks() {
    const books = JSON.parse(localStorage.getItem("fantasyBooks")) || [];
    valueListDisplay.innerHTML = "";

    if (books.length === 0) {
        valueListDisplay.innerHTML = "<p>No books found.</p>";
    } else {
        books.forEach((book, i) => {
            const p = document.createElement("p");
            p.innerHTML = `▪️ ${book.title} by ${book.author} 
                <button class="deleteButton" onclick="deleteFunc(${i})">Delete</button>`;
            valueListDisplay.appendChild(p);
        });
    }
}

function deleteFunc(index) {
    const books = JSON.parse(localStorage.getItem("fantasyBooks")) || [];
    books.splice(index, 1);
    localStorage.setItem("fantasyBooks", JSON.stringify(books));
    displayBooks();
}
