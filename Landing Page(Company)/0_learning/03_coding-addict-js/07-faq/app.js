const questionBtns = document.querySelectorAll('.question-btn');

// dom traversal

// questionBtns.forEach((btn)=>{
// 	btn.addEventListener('click',(e)=>{
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	})
// })



// selectors inside element:

const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
	// console.log(question);
	const btn = question.querySelector('.question-btn');
	// console.log(btn);
	btn.addEventListener('click',()=>{
		questions.forEach((item)=>{
			if(item !== question){
				item.classList.remove('show-text');
			}
		})

		question.classList.toggle("show-text");
	})
})