// Check if there is items in local Storage
if (window.localStorage.getItem("Drafts")) {
  let drafts = JSON.parse(window.localStorage.getItem("Drafts"));
  let draftContent = "";
  for (let i = 0; i < drafts.length; i++) {
    draftContent += `<div class="box bg-white rad-10 p-10 p-relative">
                    <span onclick="deleteDraft(this)">
                    <i class="fa-solid fa-circle-xmark delete"></i>
                    </span>
                    <h3>${drafts[i].Title}</h3>
                    <div class="pdf txt-c">
                      <p class="m-0 txt-l fs-15">
                        ${drafts[i].YourThought}
                      </p>
                    </div>
                  </div>`;
  }
  document.getElementById("drafts-content").innerHTML = draftContent;
}

// Delete Draft
function deleteDraft(del) {
  del.parentElement.remove();
}
