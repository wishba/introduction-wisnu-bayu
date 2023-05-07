document.getElementById("scroll-left").addEventListener("click", function () {
  let container = document.getElementById("project-container");
  container.scroll({
    left: container.scrollLeft - 200,
    behavior: "smooth"
  });
});

document.getElementById("scroll-right").addEventListener("click", function () {
  let container = document.getElementById("project-container");
  container.scroll({
    left: container.scrollLeft + 200,
    behavior: "smooth"
  });
});
