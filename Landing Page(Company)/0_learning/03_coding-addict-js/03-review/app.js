const reviews = [
	{
		id:1,
		name:"name1",
		job:"job1",
		img:"imgUrl1",
		text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident error similique reiciendis dolores voluptatum quo tempore impedit odio iusto. ",
	},
	{
		id:2,
		name:"name2",
		job:"job1",
		img:"imgUrl1",
		text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident error similique reiciendis dolores voluptatum quo tempore impedit odio iusto. ",
	},
	{
		id:3,
		name:"name3",
		job:"job1",
		img:"imgUrl1",
		text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident error similique reiciendis dolores voluptatum quo tempore impedit odio iusto. ",
	},
	{
		id:4,
		name:"name4",
		job:"job1",
		img:"imgUrl1",
		text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident error similique reiciendis dolores voluptatum quo tempore impedit odio iusto. ",
	},
	{
		id:5,
		name:"name5",
		job:"job1",
		img:"imgUrl1",
		text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident error similique reiciendis dolores voluptatum quo tempore impedit odio iusto. ",
	},
];


// select items: 

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0 ;

// load initial item: 
window.addEventListener('DOMContentLoaded',()=>{
	showPerson(currentItem);
});


// show person

const showPerson = (personID)=>{
	const item = reviews[personID];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}



nextBtn.addEventListener('click',()=>{
	currentItem++;
	if(currentItem> reviews.length -1){
		currentItem=0;
	}
	showPerson(currentItem);
})

prevBtn.addEventListener('click',()=>{
	currentItem--;
	if(currentItem<0){
		currentItem=reviews.length-1;
	}
	showPerson(currentItem);
})

randomBtn.addEventListener('click',()=>{
	currentItem = Math.floor(Math.random()*reviews.length);
	showPerson(currentItem);
})
