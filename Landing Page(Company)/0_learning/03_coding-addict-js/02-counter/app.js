let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
[...btns].forEach(btn=>{
	btn.addEventListener('click',(e)=>{
		const types = e.currentTarget.classList
		if (types.contains("decrease")){
			count --;
		}else if(types.contains("increase")){
			count++;
		}else if(types.contains("reset")){
			count =0;
		}
	value.textContent = count;

	if(count>0){
		value.style.color = "green"
	}else if(count <0){
		value.style.color = "red"
	}else{
		value.style.color ="purple"
	}
	})	
	

})