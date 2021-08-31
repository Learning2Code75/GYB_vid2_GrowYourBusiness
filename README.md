# Grow Your Business

## product perspective
1. grow your business by improving your online pressence
2. display home page 
3. contact page
4. about page
6. services page: 12 services till now
5. pricing page: pricing for all 

## software requirement specification: 
1. landing page website using : HTML , CSS , JS
2. selling 12 services now 
3. contents of the website: 
		- nav bar: navigate to all pages,
		- social bar:  social media(github,linkedin,youtube , insta, facebook) and email
		- home page : breif about company , call to action (form to submit service directly)
		- contact page: call to action
		- about page : about company gyb, one para about me, passionate web developer, aspiring to learn new technologies related to web. right now building growYourBusiness projects for clients to enhance resume and one service per client for now to just test out the waters.In the future , planning to expand to more services and provide more than one services to clients.
		- pricing page : currently application is under development phase therefore providing one service per client for free 
		- services page : 11 services as a grid, choose a service and contact me regarding it. 

4. Services inside GYB application: 
	- D3.js visualizations
	- Sales Order Generator: 
		1. get product data from google sheets API
		2. get client , general data from google sheets API 
		3. use product data in dependent dropdowns to take input for product table 
		4. print the pdf for the sales order 


## Products availiable:
1. vid1: PersonalPortfolio - React, CSS
2. vid2: GrowYourBusiness - HTML , CSS , JS , d3
3. vid3: MicroBlog - Next, MongoDB 
4. vid4: MacroBlog - Next, Sanity
5. vid5: BookkeepingManagement - Graphql, Mongo, React, Apollo
6. vid6: InventoryManagementSystem - Graphql, Mongo, React, Apollo
7. vid7: BusinessToConsumerPO - Graphql, Mongo, React, Apollo
8. vid8: BusinessToBusinessPO - React
9. vid9: dataAnalytics - R, shiny.js,(tensorflow, node,express,postgres)

## References : 
refer GYB_webdev_vid2_gyb: https://drive.google.com/drive/folders/1iySQXnYL34MJf4-XXSVE6f9aeK0hLoN9?usp=sharing 

## Learning: 
1. traversy media - html css: 
	learnt about templating css like bootstrap , css grids
	https://youtu.be/p0bGHP-PXD4

2. freecodecamp - js for language:


3. coding addict - js for general utilities: 


4. freecodecamp - d3.js: 

	
5. html css - responsive design:


6. html css js - responsive design:	


7. google sheets API: 
	https://youtu.be/VPI27L_fQC4 

8. dependent dropdowns in javascript: 
	https://youtube.com/playlist?list=PLRmEk9smitaUDco5Y_bYClnFNCHx1jmWY 

9. html css - responsive navbar: 
	https://youtu.be/8QKOaTYvYUA

10. CSS for invoice : 
	https://youtu.be/J7kH-yXEy8w?list=PLhoNfB3WZFScWKvVE-_wdqe6_PH9LctiG

# 4. Freecodecamp d3.js : Data Visualization: 
 - link: [d3_js_freecodecamp](https://youtu.be/_8V5o2UHG0E)
1. analysis
2. design
3. Construction - html css svg javascript d3.js

## Things to learn: 
1. Design and create data visualizations
2. Conduct exploratory data analysis using visualization
3. Craft visual presentations of data analysis using visualization
4. Use knowledge of perception and cognition to evaluate visualization design alternatives.
5. Design and evaluate color palletes for visualization based on principles of perception
6. Apply data transformations such as aggregation of data visualization in various domains.
7. Identify opportunities for application of data visualization theory and principles 
8. Critique exisiting visualizations bassed on data visualization theory and principles.
9. Develop interactive visualizations for the web using js and d3

## Why Visualize data?
1. visual representation of dataset help people carry out tasks more effectively.
2. replace cognition with perception

## Inputs of Data Visualization: Data and Tasks
1. tables, networks, spatial(position on earth, countries/states)
2. attribute types: Categorical , Ordered(Ordinal , Quantitative)
	- examples: categorical: country, religion; quantitive: 
	- temperature,latitude, longitude, number of people dead 
3. Special cases: 
	time : point in time, region in space
	space: point in space, region in space
	
	|		  | Point  		| Region 		 |
	| :---:   | :-:    		| :-:     		 |
	| Space   | latitude    | coutry  		 |
	| Time    | instant    	| interval    	 |
	| Quantity| value    	| interval    	 |
4. Tasks 
	- what questions do you want to answer
	- what is the problem you are trying to solve?
	- what decisions are you trying to make?
	- what outcomes are you hoping for? 
	- what story do you wnat to tell?
	- what tasks should the viewer be able to perform?

## Intro to JavaScript 
1. audience:
	- programming background
	- need to learn js quickly
	- use it in projects

2. ECMASCRIPT(ES6) syntax , most commonly used language features

3. sources: 
	- [Eloquent Javascript](https://eloquentjavascript.net/)
	- [ECMAScript 6 features](https://github.com/lukehoban/es6features)
4. parts covered: 
    - what is js?
    - values, types, operators 
    - program structure
    - functions  
    - data structures: objects and arrays
    - higher - order functions
    - modules 
    - asynchronous programming

    

## Intro to HTML ,CSS , SVG 
1. Audience
	- learning about web dev, graphics and data visualization
	- need to know the basics(no libraries)

2. Topics:
	- making shapes and text on the screen
	- HTML 
	- CSS
	- SVG

3. HTML Specifiction encompasses: 
	- SVG
	- CSS
	- HTML the syntax

4. Cars Report with HTML 
	- header title
	- bulleted list

5. Cars Report with CSS
	- customize font
	- highlight an item

6. Making Shapes with SVG
	- SVG as image format
	- SVG in HTML

	- coordinate system
	- circles
	- rectangles
	- lines
	- colors
	- groups

	- [First SVG](https://commons.wikimedia.org/wiki/File:Ghostscript_Tiger.svg)
	- [PNG of the above](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.downloadclipart.net%2Fbrowse%2F93449%2Fsiberian-tiger-png-picture-clipart&psig=AOvVaw3cjAjBx6gIcs7VUFyKcJ_E&ust=1630417669109000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJDFnaXx2PICFQAAAAAdAAAAABAD)

## Intro to d3.js - face
1. audience:
	- already know basics of javascript , html , css, svg
	- no prior experience with D3.js
2. topics: 
	- loading d3.js
	- importing d3 function using es6
	- creating a face using SVG and d3
	- animation with transitions
3. D3.js: 
	- [d3_docs](https://d3js.org/)


## Making a Bar Chart with D3.js and SVG
1. Audience: 
	- D3 DOM manipulation and SVG
2. want to learn about visualization data with d3 joins , scales and axes
3. Topics: 
	- representing a data table in javascript
	- creating rectangles for each row
	- using linear and band scales
	- margin convention 
	- adding axes
4. CSV example for bar chart for population: 
	- country,population
 	- China, 1410000
 	- India, 1310000
 	- United States, 326767
 	- Indonesia , 266896
5. D3 data join
	- enter: data 
	- update: data,elements
	- exit: elements
6. linear scale: 
	- data space (domain) --> screen space(range)
	- for quantitative attributes
7. band scale: 
	- data space (domain) --> screen space( range)
	- for ordinal attributes
	- bandwidth is the width of the bar
8. d3 margin convention to create margins around the


## Customizing Axes of a Bar Chart

## Making a scatter plot with d3.js

## making line and area charts with d3.js

## general update pattern of d3.js

## marks and channels in data visualization

## interaction with unidirectional data flow using d3.js

## making a world map with d3

## cheap tricks for interaction on d3.js world map

## blank canvas

## building a tree visualization of world countries with d3.js

## color and size legends with d3.js

## choropleth map with d3.js

## interactive filtering on a choropleth map 

## using color in visualization

## scatter plot with menus

## circles on a map

## line chart with multiple lines

## melting and munging data with javascript 

## selecting a year on a line chart 



# 5. html css - responsive design:
- link :https://youtu.be/D-h8L5hgW-w

