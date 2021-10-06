// change color to select a particular theme
const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


const getRandomColor = ()=>{
	let hexColor = '#';
	for(let i=0; i<6;i++){
		hexColor = hexColor + hex[getRandomNumber()]
	}
	return hexColor;
}

const getRandomNumber =()=>{
	return Math.floor(Math.random()*hex.length);
}

/*sample 3:*/  

const sample3_btn1 = document.querySelector('.sample3_theme1');
const sample3_btn2 = document.querySelector('.sample3_theme2');
const sample3_btn3 = document.querySelector('.sample3_theme3');
const sample3_btn4 = document.querySelector('.sample3_theme4');


// background 
const sample3 = document.querySelector('.sample3box');

sample3_btn1.addEventListener('click',()=>{
	const randColor = getRandomColor();
	sample3.style.backgroundColor = randColor;
	document.querySelector(".sample3_theme1_color").textContent = '('+randColor+')';
})
//text color
sample3_btn2.addEventListener('click',()=>{
	const randColor = getRandomColor();
	sample3.style.color = randColor;
	document.querySelector(".sample3_theme2_color").textContent = '('+randColor+')';
})

//card text color 
const sample3_card = document.querySelectorAll('.sample3box_card')
// console.log(sample3_card)

sample3_btn3.addEventListener('click',()=>{
	const randColor = getRandomColor();

	[...sample3_card].forEach(card=>{
		card.style.color = randColor;
	})
	document.querySelector(".sample3_theme3_color").textContent = '('+randColor+')';


})
//card background
sample3_btn4.addEventListener('click',()=>{
	const randColor = getRandomColor();
	[...sample3_card].forEach(card=>{
		card.style.backgroundColor = randColor;
	})
	document.querySelector(".sample3_theme4_color").textContent = '('+randColor+')';
})


/*cart*/

const cartPrice = document.querySelector('.cart-item-price');
let prodQTY = 0;

const btnIncrease = document.querySelector('.button-increase');
const btnDecrease = document.querySelector('.button-decrease');

btnIncrease.addEventListener('click',(e)=>{
	prodQTY++;
	cartPrice.textContent = prodQTY;
})
btnDecrease.addEventListener('click',(e)=>{
	prodQTY--;
	cartPrice.textContent = prodQTY;
	if(prodQTY<1){
		cartPrice.textContent=1;
		prodQTY=1;
	}
})