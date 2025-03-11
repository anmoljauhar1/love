let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let heart = document.querySelector(".heart");

no.addEventListener("click", function () {
  let x = Math.floor(Math.random() * 1460) + 1;
  let y = Math.floor(Math.random() * 660) + 1;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});

yes.addEventListener("click", function () {
  h1.innerText = "I Love You Too ...";
  h1.style.color = "white";

  body.classList.add("likebody");

  body.style.background = "rgb(238, 73, 177)";

  heart.style.display = "block";
  no.style.display = "none";
});
