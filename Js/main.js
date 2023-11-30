// // Dark mode
// const toggleBtn = document.getElementById("toggleBtn");
// const page = document.getElementById("page");

// toggleBtn.addEventListener("click", () => {
//   page.classList.toggle("dark-mode");
// });

// Save Drafts
let saveDraft = document.getElementById("save-draft");

let objectOfContentDrafts = [];
if (window.localStorage.getItem("Drafts")) {
  objectOfContentDrafts = JSON.parse(window.localStorage.getItem("Drafts"));
}

saveDraft.addEventListener("submit", function (e) {
  // Prevents the default form submission behavior
  e.preventDefault();
  if (
    saveDraft.children[0].value !== "" &&
    saveDraft.children[1].value !== ""
  ) {
    let titleValue = saveDraft.children[0].value;
    let yourThought = saveDraft.children[1].value;

    let content = {
      id: Date.now(),
      Title: titleValue,
      YourThought: yourThought,
    };

    objectOfContentDrafts.push(content);
    addArrayToLocal(objectOfContentDrafts);

    document.querySelector(".sucess").style.cssText =
      "visibility: visible; opacity: 1; transition: 2s ease";

    setTimeout(() => {
      document.querySelector(".sucess").style.cssText =
        "visibility: hidden; opacity: 0; transition: 1s ease";
    }, 4000);
  }
  saveDraft.children[0].value = "";
  saveDraft.children[1].value = "";
});

function addArrayToLocal(array) {
  window.localStorage.setItem("Drafts", JSON.stringify(array));
}

// Delete Latest Tasks
function deleteTask(del) {
  del.parentElement.remove();
}

let tasksRow = document.querySelectorAll(".title");

tasksRow.forEach((task) => {
  task.addEventListener("click", () => {
    task.classList.toggle("done");
  });
});
