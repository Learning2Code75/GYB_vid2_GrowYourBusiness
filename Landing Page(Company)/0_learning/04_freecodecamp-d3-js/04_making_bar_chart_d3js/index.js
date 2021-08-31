console.log(d3);
const svg = d3.select('svg');
svg.style("background-color",'white');
let csv = d3.csv;
let scaleLinear = d3.scaleLinear;
let max = d3.max;
let scaleBand = d3.scaleBand;

const height = parseFloat(svg.attr('height'));
const width = +svg.attr('width');

const render = data =>{

	const xValue = d => d.population;
	const yValue = d => d.country;
	const margin = {
		top:20,
		right:20,
		bottom:20,
		left:20
	}

	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;


	const xScale = scaleLinear()
					.domain([0,max(data,xValue)])
					.range([0,width]);
	console.log(xScale.domain());
	console.log(xScale.range());

	const yScale = scaleBand()
					.domain(data.map(yValue))
					.range([0,height]);

	const g = svg.append('g')
				  	.attr('transform',`translate(${margin.left},${margin.top})`);

	g.selectAll('rect').data(data)
		.enter().append('rect')
					.attr('y', d=>yScale(yValue(d)))
					.attr('innerWidth',d=>xScale(xValue(d)))
					.attr('innerHeight',yScale.bandwidth())
}

csv('data.csv').then(data =>{
	data.forEach(d=>{
		d.population = +d.population*1000
	})
	render(data);
})



