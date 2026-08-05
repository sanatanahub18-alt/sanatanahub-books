fetch("books.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("books-container");

data.forEach(book => {

container.innerHTML += `
<div class="book-card">

<img src="${book.cover}" alt="${book.title}">

<h3>${book.title}</h3>

<p>${book.description}</p>

<div class="buttons">

<a href="${book.amazon}" target="_blank">Amazon</a>

<a href="${book.gumroad}" target="_blank">Gumroad</a>

</div>

</div>
`;

});

});
