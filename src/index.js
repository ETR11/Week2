let buttonId = 0;

document.getElementById("add-comment").addEventListener("click", function () {
  const comment1 = document.createElement("div");
  comment1.className = "comment";
  let cr = document.createElement("p");
  cr.className = "comment-rating";
  let ct = document.createElement("p");
  ct.className = "comment-text";
  let button = document.createElement("button");
  button.id = buttonId.toString();
  button.innerHTML = "Remove";
  button.onclick = function () {
    const buttons = document.getElementsByClassName("remove-comment");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id == this.id) {
        const list = document.getElementById("cl");
        list.removeChild(list.childNodes[i]);
      }
    }
  };
  buttonId++;
  button.className = "remove-comment";
  button.style.visibility = "hidden";
  let selectText = document.getElementById("rating");
  cr.innerHTML = selectText.options[selectText.selectedIndex].text;
  ct.innerHTML = document.getElementById("cs").value;
  comment1.appendChild(cr);
  comment1.appendChild(ct);
  comment1.appendChild(button);
  document.getElementById("cl").appendChild(comment1);
});

/*document
          .getElementById("remove-comments")
          .addEventListener("click", function () {
            const list = document.getElementById("cl");
            list.removeChild(list.childNodes[1]);
            buttons.style.visibility = "visible";
            let del = confirm("Delete");
            if (del == true) {
              document.getElementById("cl").innerHTML = "";
            }
          });*/
document
  .getElementById("remove-comments")
  .addEventListener("click", function () {
    const buttons2 = document.getElementsByClassName("remove-comment");
    for (let i = 0; i < buttons2.length; i++) {
      buttons2[i].style.visibility = "visible";
    }
  });
