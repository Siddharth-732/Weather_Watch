const togglebtn = document.getElementsByClassName('toggle_btn')[0];
const sidebar = document.querySelector("#sidebar")

togglebtn.addEventListener("click", () => {
    console.log("clicked");
  sidebar.classList.toggle("collapsed");
});

