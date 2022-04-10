let titles = document.querySelectorAll(`.content__q`);

let arrows = document.querySelectorAll(`.content__arrow`);

let answers = document.querySelectorAll(`.answer`);

var visible = (content) => {
  titles.forEach((title) => {
    title.style.color = "hsl(237, 12%, 33%)";
    title.style.fontWeight = `normal`;
  });

  document.getElementById(
    content
  ).children[0].style.color = `hsl(238, 29%, 16%)`;

  document.getElementById(
    content
  ).children[0].style.fontWeight = `bold`;

  arrows.forEach((a) => {
    a.style.transform = "rotate(0deg)";
  });

  document.getElementById(content).children[1].style.transform =
    "rotatex(180deg)";

  answers.forEach((answer) => {
    answer.style.display = "none";
  });

  document.getElementById(content).children[2].style.display = "inline";
};
