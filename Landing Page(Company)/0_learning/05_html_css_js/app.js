console.log('hello')
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// display mobile menu: 

const mobileMenu = ()=>{
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
	body.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu)

//animations:
gsap.registerPlugin(ScrollTrigger);
gsap.from('.animate-hero',{
	duration:2,
	opacity:0,
	y:-150,
	stagger:0.2
});

gsap.from('.animate-services',{
	scrollTrigger:'.animate-services',
	duration:2,
	opacity:0,
	x:-150,
	stagger:.12
});
gsap.from('.animate-img',{
	scrollTrigger:'.animate-img',
	duration:2,
	opacity:0,
	x:-200
})

gsap.from('.animate-membership',{
	scrollTrigger:'.animate-membership',
	duration:3,
	opacity:0,
	x:-200,
	stagger:0.3,
	delay:0.5
})

gsap.from('.animate-card',{
	scrollTrigger:'.animate-card',
	duration:3,
	opacity:0,
	y:-200,
	stagger:0.6,
	delay:0.3
})

gsap.from('.animate-team',{
	scrollTrigger:'.animate-team',
	duration:2,
	opacity:0,
	x:-200,
	delay:0.3
})

gsap.from('.animate-team-text-down',{
	scrollTrigger:'.animate-team-text-down',
	duration:2,
	opacity:0,
	x:-200,
	delay:0.3
})



gsap.from('.animate-email',{
	scrollTrigger:'.animate-email',
	duration:2,
	opacity:0,
	x:-200,
	stagger:0.3,
	delay:0.3
})

gsap.from('.animate-form',{
	scrollTrigger:'.animate-form',
	duration:2,
	opacity:0,
	y:200,
	stagger:0.3,
	delay:0.3
})






