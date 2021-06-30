const menu_button = document.querySelector(".menu");

menu_button.addEventListener("click",(e) => {
  if (!menu_button.classList.contains("open"))
  {
    menu_button.classList.add("open");
    menu_button.classList.remove("close");
  }
  else
  {
    menu_button.classList.add("close");
    menu_button.classList.remove("open");
  }
})