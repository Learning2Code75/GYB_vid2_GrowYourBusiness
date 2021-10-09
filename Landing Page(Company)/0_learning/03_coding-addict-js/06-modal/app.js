const openModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");


openModalBtn.addEventListener("click",()=>{
	modalOverlay.classList.add("show-overlay");
})

closeModalBtn.addEventListener("click",()=>{
	modalOverlay.classList.remove("show-overlay");
})