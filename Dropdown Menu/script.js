const optionMenu = document.querySelector(".select-menu"),
    selectBtn = document.querySelector(".select-btn");
    

selectBtn.addEventListener("click", ()=>{
    optionMenu.classList.toggle("active");
})
