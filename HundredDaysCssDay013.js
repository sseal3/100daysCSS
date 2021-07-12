const overview=document.querySelector(".overview");
const detail=document.querySelector(".detail");
const closeBtn=document.querySelector(".close-button");
const cover=document.querySelector(".cover");
const bottom=document.querySelector(".bottom");
const pic=document.querySelector(".pic");

overview.addEventListener("click",()=>{
    detail.classList.add("open");
    detail.classList.remove("close");
  
    closeBtn.classList.add("open");
    closeBtn.classList.remove("close");
  
    cover.classList.add("open");
    cover.classList.remove("close");
  
    bottom.classList.add("open");
    bottom.classList.remove("close");
  
    pic.classList.add("open");
    pic.classList.remove("close");
});

closeBtn.addEventListener("click",()=>{
    detail.classList.add("close");
    detail.classList.remove("open");
  
    closeBtn.classList.add("close");
    closeBtn.classList.remove("open");
  
    cover.classList.add("close");
    cover.classList.remove("open");
  
    bottom.classList.add("close");
    bottom.classList.remove("open");
  
    pic.classList.add("close");
    pic.classList.remove("open");
});
