
// Creating new comments 

document.getElementById("post").addEventListener("click", function () {
    const newComment = document.getElementById("comments");
    const comment = newComment.value;
    const commentContainer = document.getElementById("comment-container");
    const post = document.createElement("p");
    post.innerText = comment;
    commentContainer.appendChild(post);
    newComment.value = "";
  });

//   Creating delete option like github. 

const givenValue = document.getElementById("input-text");
      givenValue.addEventListener("keyup", function (event) {
        const values = event.target.value;
        if (values === "delete") {
          document.getElementById("delete-btn").removeAttribute("disabled");
        } else {
          document.getElementById("delete-btn").setAttribute("disabled", true);
        }
      });

      document
        .getElementById("delete-btn")
        .addEventListener("click", function () {
          const deleteItem = document.getElementById("delete-info");
          deleteItem.style.display = "none";
        });

// Event delegate exploring 

