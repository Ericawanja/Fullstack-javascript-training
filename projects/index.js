const deleteBtn = document.getElementsByClassName("delete");
const editBtn = document.getElementsByClassName("edit");
//[1,2,3,4,5,6]

// deleteBtn.map((element) => {
//
// });

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteMethod);
}

function deleteMethod(event) {
  const elementToDel = event.target.id;

  let parent = document.getElementById(elementToDel);
  parent.style.display = "none";
}
