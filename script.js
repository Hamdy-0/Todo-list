const listItems = document.querySelector(".todo-lists");
const listItem = document.querySelectorAll(".todo-name");
const todo = document.querySelector("#todoName");
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.classList.add("todo-name");
  li.innerHTML = todo.value;
  listItems.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  todo.value = "";
});

listItems.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

// Check when the hight is over
