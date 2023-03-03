const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll(".cards li");

filterElement.addEventListener('change', filterCards);
function filterCards() {
  if (filterElement.value != "") {
    console.log("fds")
    for (let card of cards) {
      let title = document.querySelector(".header h2");
      title = title.textContent.toLowerCase();
      let filterText = filterElement.value.toLowerCase();
      // console.log(title.includes(filterText))
      if (title.includes(filterText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
