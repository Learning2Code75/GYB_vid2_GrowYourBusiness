// const testGS = ()=>{
// 	let dataFetched= [];
// 	const url = "https://script.google.com/macros/s/AKfycbysDuU89IdH6woLSBuqBqzJjF_5goSPemM2vJUXDlOgUnFAKzoSlX1XwOqSX24n9y4p/exec";
// 	fetch(url)
// 		.then((d)=> (d.json()))
// 		.then(async(d)=> dataFetched= await saveData(d[0].data));
// 	return dataFetched;
// }

// 	// const url = "https://script.google.com/macros/s/AKfycbyrs6FQ5ALE4L0EtSkoFdTt8ObXUfRt-StwetJGt85zKq8gHoq7wNuj--_SKzih33hn/exec";
	


// let menu=[];
// let finalData = [];
// const saveData = async (data) =>{
// 	menu = await data;
// 	finalData = menu;
// 	console.log(finalData);
// 	return finalData;
// }

// let finalDataFetched = testGS();
// console.log(finalData)


// let data= [];
// const url = "https://script.google.com/macros/s/AKfycbysDuU89IdH6woLSBuqBqzJjF_5goSPemM2vJUXDlOgUnFAKzoSlX1XwOqSX24n9y4p/exec";
// // const getMenuData = async ()=>{
// // 	const response = await fetch(url);
// // 	const data = await response.json();
// // 	addData(data);
// // }
// async function getMenuData(){
// const response = await fetch(url);
// 	const data = await response.json();
// 	addData(data);	
// }

// // const addData = (obj)=>{
// // 	data.push(obj);
// // }
// function addData(obj){
// 	data.push(obj);
// }

// getMenuData();

// console.log(data);


// async function getMenuData(url){
// 	const response = await fetch(url);
// 	return response.json();
// }

// // const getMenuData = async(url)=>{
	
// // }
// const url = "https://script.google.com/macros/s/AKfycbysDuU89IdH6woLSBuqBqzJjF_5goSPemM2vJUXDlOgUnFAKzoSlX1XwOqSX24n9y4p/exec";
// const data = await getMenuData(url);
// console.log(data); 


// async function getData(url) {
//   const response = await fetch(url);

//   return response.json();
// }
// const url = "https://script.google.com/macros/s/AKfycbysDuU89IdH6woLSBuqBqzJjF_5goSPemM2vJUXDlOgUnFAKzoSlX1XwOqSX24n9y4p/exec";

// const data = await getData(url);

// console.log({ data })


const url = "https://script.google.com/macros/s/AKfycbysDuU89IdH6woLSBuqBqzJjF_5goSPemM2vJUXDlOgUnFAKzoSlX1XwOqSX24n9y4p/exec";
fetch(url)
	.then((response)=> response.json())
	.then((json)=> {
		let data = json;
		initialize(data);
		// console.log(data);
	})
	.catch((err)=> console.log(err.message))

const initialize = (data)=>{
	menu = data[0].data;
	console.log(menu);

	// window.addEventListener("DOMContentLoaded",()=>{
	// 	// let displayMenu - 
	// 	console.log("hello")
	// })

	console.log("hello");

	displayMenuItems(menu);

	displayMenuButtons(menu);

}

const displayMenuItems = (menuItems)=>{
	const sectionCenter = document.querySelector('.section-center');

	let displayMenu = menuItems.map((item)=>{
		// console.log(item);
		return `<article class="menu-item">
				<img src=${item.imgUrl} alt=${item.title} class="photo" />
				<div class="item-info">
					<header>
						<h4>${item.title}</h4>
						<h4 class="price">₹${item.price}</h4>	
					</header>
					<p class="item-text">${item.desc}</p>
					<p>${item.disc&&("Discount:"+item.disc + "%")}</p>

				</div>
			</article>			
		 `;
	})

	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;
	console.log(displayMenu)
}

const displayMenuButtons = (menu)=>{
	const categories = menu.reduce((values,item)=>{
		if(!values.includes(item.category)){
			values.push(item.category);
		}
		return values;
	},['all']);
	// console.log(categories)
	const categoryBtns = categories.map((category)=>{
		return `<button class="filter-btn" type="button" data-id=${category}>
				${category}
				</button>`;
	}).join("");
	// console.log(categoryBtns)
	document.querySelector(".btn-container").innerHTML=categoryBtns;

	const filterBtns = document.querySelectorAll('.filter-btn');
	console.log(filterBtns)
	filterBtns.forEach((btn)=>{
		btn.addEventListener("click",(e)=>{
			const category=e.currentTarget.dataset.id;
			// console.log(category);
			const menuCategory=menu.filter((menuItem)=>{
				if(menuItem.category === category){
					return menuItem;
				}
			});
			console.log(menuCategory)

			if(category === "all"){
				displayMenuItems(menu);
			}else{
				displayMenuItems(menuCategory)
			}
		})
	})
}