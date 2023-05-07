document.getElementById("scroll-left").addEventListener("click", function () {
  let container = document.getElementById("project-container")
  container.scrollLeft -= 300
})

document.getElementById("scroll-right").addEventListener("click", function () {
  let container = document.getElementById("project-container")
  container.scrollLeft += 300
})