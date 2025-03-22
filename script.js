//your JS code here. If required.
"use strict";

let myform = document.querySelector("#book-form");

let tbody = document.querySelector("#book-list");

myform.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  // creating new row
  let newrow = document.createElement("tr");

  let titleCell = document.createElement("td");
  titleCell.textContent = title;
  newrow.appendChild(titleCell);

  let authorCell = document.createElement("td");
  authorCell.textContent = author;
  newrow.appendChild(authorCell);

  let isbnCell = document.createElement("td");
  isbnCell.textContent = isbn;
  newrow.appendChild(isbnCell);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "X";
  newrow.appendChild(deleteBtn);

  tbody.appendChild(newrow);

  deleteBtn.addEventListener("click",()=>{
	newrow.remove();
  })

   document.querySelector("#title").value = "";
   document.querySelector("#author").value = "";
   document.querySelector("#isbn").value = "";

});
