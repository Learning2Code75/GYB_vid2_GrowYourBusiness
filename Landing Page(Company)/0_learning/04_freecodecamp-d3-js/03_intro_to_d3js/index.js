console.log(d3);
const svg = d3.select('svg');
svg.style("background-color",'white');


const height = parseFloat(svg.attr('height'));
const width = +svg.attr('width');

const g = svg.append('g')
			 .attr('transform',`translate(${width/2},${height/2})`)


const circle = g
				.append('circle')
					.attr('r',height/2)
					.attr('stroke','black')
					.attr('fill','yellow')
					.attr('stroke-width',5);

const eyeRadius =30;
const eyeSpacing = 100;
const eyeOffsetY = -80;
const eyeBrowWidth = 70;
const eyeBrowHeight = 10;
const eyeBrowOffsetY = -60;

const eyesGroup = g.append('g')
					   .attr('transform',`translate(0,${eyeOffsetY})`);
const leftEye = eyesGroup
				.append('circle')
					.attr('r',eyeRadius)
					.attr('cx',- eyeSpacing)

const rightEye = eyesGroup
				.append('circle')
				.attr('r',eyeRadius)
				.attr('cx',+ eyeSpacing)

const eyeBrowGroup = eyesGroup.append('g')
			       	 	    	.attr('transform',`translate(0,${eyeBrowOffsetY})`);

eyeBrowGroup		
	.transition().duration(2000)
		.attr('transform',`translate(0,${eyeBrowOffsetY - 50})`)
	.transition().duration(2000)
		.attr('transform',`translate(0,${eyeBrowOffsetY })`)

const leftEyeBrow = eyeBrowGroup
					.append('rect')
						.attr('width',eyeBrowWidth)
						.attr('height',eyeBrowHeight)
						.attr('x',-eyeSpacing - eyeBrowWidth/2)

const rightEyeBrow = eyeBrowGroup
					.append('rect')
						.attr('width',eyeBrowWidth)
						.attr('height',eyeBrowHeight)
						.attr('x',eyeSpacing - eyeBrowWidth/2);



//d3 arc: 
let arc = d3.arc();


const mouth = g .append('path')
					.attr('d',arc({
						innterRadius: 0,
						outerRadius:150,
						startAngle:Math.PI/2,
						endAngle:Math.PI*3/2
					}))
					.attr('fill','none')
					.attr('stroke','black')
					.attr('stroke-width',10);

