const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");



toggleBtn.addEventListener('click',()=>{
	// if(!sidebar.classList.contains("show-sidebar")){
	// 	sidebar.classList.add("show-sidebar");
	// }else{
	// 	sidebar.classList.remove("show-sidebar");
	// }
	sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener('click',()=>{
	if(sidebar.classList.contains("show-sidebar")){
		sidebar.classList.remove("show-sidebar")
	}
})