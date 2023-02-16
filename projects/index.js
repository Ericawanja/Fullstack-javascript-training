let data = [
  {
    id: 1,
    title: "clean today",
    description: "do the cleaning today",
  },
  {
    id: 2,
    title: "cook",
    description: "Cook the meal today",
  },
  {
    id: 3,
    title: "cook",
    description: "Cook the meal today",
  },
];

//render todos read
function renderTodos(todos) {
  const container = document.getElementsByClassName("wrapper")[0];
  container.innerHTML = todos
    .map((todo) => {
      return `
    <div class="todo" id=${todo.id}>
          <div class="check"><input type="checkbox" name="" id="" /></div>

          <div class="details">
            <div class="title">${todo.title}</div>
            <div class="desc">${todo.description}</div>
          </div>
          <div class="icons">
            <span class="delete"id=${todo.id}>Delete</span>
            <span class="edit" id=${todo.id}>Edit</span>
          </div>
        </div>
    `;
    })
    .join("");

  const deleteBtn = document.getElementsByClassName("delete");
  const editBtn = document.getElementsByClassName("edit");

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteMethod);
    editBtn[i].addEventListener("click", editMethod);
  }
}

//delete method
function deleteMethod(el) {
  const idToRemove = el.target.parentElement.parentElement.id;
  console.log(idToRemove);
  const newTodos = data.filter((t) => t.id !== +idToRemove);
  data = newTodos;
  renderTodos(newTodos);
}

//openForm or closeForm

const form = document.querySelector(".createForm");
form.style.display = "none";

const createBtn = document.querySelector(".createBtn");
createBtn.addEventListener("click", openForm);

//close form
const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", closeFormMethod);

function closeFormMethod() {
  const form = document.querySelector(".createForm");
  form.style.display = "none";
  //clear form before closing
  document.querySelector("#formTitle").value = "";
  document.querySelector("#taskDesc").value = "";
}

function openForm() {
  const form = document.querySelector(".createForm");
  form.style.display = "block";
}

//save event
const saveBtn = document.querySelector(".submit");
saveBtn.addEventListener("click", createMethod);

function createMethod() {
  const element = data.find((t) => t.id === +elementToEdit);
  if (element) return saveEditedTodo;
  const id = Math.floor(Math.random() * 100);
  //form values
  const title = document.querySelector("#formTitle").value;
  const description = document.querySelector("#taskDesc").value;

  const newTodo = {
    id,
    title,
    description,
  };
  data.push(newTodo);

  renderTodos(data);

  closeFormMethod();
}
//editMethod
function saveEditedTodo(id) {
  const newData = data.map((t) => {
    if (t.id === +id) {
      const title = document.querySelector("#formTitle").value;
      const description = document.querySelector("#taskDesc").value;

      return {
        id,
        title,
        description,
      };
    } else {
      return t;
    }
  });
  renderTodos(newData);
}
//edit

function editMethod(event) {
  const elementToEdit = event.target.id;
  const element = data.find((t) => t.id === +elementToEdit);

  openForm();
  document.querySelector("#formTitle").value = element.title;
  document.querySelector("#taskDesc").value = element.description;
  saveEditedTodo(element.id);
}

renderTodos(data);
