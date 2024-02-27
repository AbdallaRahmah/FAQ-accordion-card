const questionList = document.querySelectorAll(`.content .question`);

questionList.forEach((item) => {
  item.addEventListener("click", (e) => {
    listController(e.target);
  });
});

function listController(item) {
  let status = item.getAttribute("aria-expanded");

  if (status == "false") {
    closeLists(questionList);
    openList(item);
  } else {
    closeLists(questionList);
  }
}

function closeLists(list = []) {
  list.forEach((item) => {
    item.parentElement.classList.remove("active");
    item.setAttribute("aria-expanded", "false");
  });
}

function openList(item) {
  item.parentElement.classList.add("active");
  item.setAttribute("aria-expanded", "true");
}
