//data & constants
var dataset = {
			   "SPR001":[0.1,0.2,0.3,0.25,0.15],
			   "SPR002":[0.45,0.34,0.1,0.05,0.06],
			   "SPR003":[0.3,0.2,0.3,0.2,0.4],
			   "SPR004":[0.4,0.3,0.4,0.1,0.4],
			   "SPR005":[0.5,0.2,0.3,0.0,0.4],
			   "SPR006":[0.1,0.2,0.3,0.25,0.15],
			   "SPR007":[0.45,0.34,0.1,0.05,0.06],
			   "SPR008":[0.3,0.2,0.3,0.2,0.4],
			   "SPR009":[0.4,0.3,0.4,0.1,0.4],
			   "SPR010":[0.5,0.2,0.3,0.0,0.4],
			   }

var dataset2 = {
			   "SPR001":[0.2,0.2,0.23,0.25,0.15],
			   "SPR002":[0.8,0.3,0.13,0.05,0.06],
			   "SPR003":[0.6,0.2,0.9,0.2,0.7],
			   "SPR004":[0.5,0.3,0.4,0.1,0.4],
			   "SPR005":[0.7,0.8,0.3,0.9,0.4],
			   "SPR006":[0.4,0.2,0,0.25,0.8],
			   "SPR007":[0.4,0.3,0.1,0.05,0.06],
			   "SPR008":[0.3,0.2,0,0.2,0.4],
			   "SPR009":[0.2,0.2,0.4,0.1,0.4],
			   "SPR010":[0.5,0.5,0,0.6,0.4],
			   }

//variables
var svgWidth = 50, svgHeight = 50, barPadding = 1;
var barWidth = (svgWidth/5);
var yScale = d3.scaleLinear()
	.domain([0,1])
	.range([0,svgHeight]);

var dataNames = Object.getOwnPropertyNames(dataset);
var length = dataNames.length;









//build the table
var numCols = 5;

var table = $('table')

for(let i=0;i<length;i++){

	var title = dataNames[i];

	var row = $('<tr></tr>');

	row.attr('id', `row${title}`);

	//for(let j=0;j<numCols;j++){

		var cell_1 = $('<td></td>');
		cell_1.text(`${title}`)
		.attr('class','riskTitle');

		var cell_2 = $('<td></td>');
		cell_2.attr('id', `row${i}-plot`)
		.attr('class', 'plot');

		var cell_3 = $('<td></td>');

		cell_3
		.attr('id',`row${i}-three`)
		.attr('class', 'three');

		row
		.append(cell_1)
		.append(cell_2)
		.append(cell_3);


	//}

	table.append(row);
}









//create the bar charts
for(let j=0; j<length; j++){
	//create new svg
	var createSVG = $("<svg> </svg>")
		.width(svgWidth)
		.height(svgHeight)
		.attr('id', `id${j}`);

	//attach new svg to relevant cell
	$(`#row${j}-plot`).append(createSVG);

	//select the new svg by id
	var svg = d3.select(`#id${j}`);


	//create bar charts 
	var barChart = svg.selectAll("rect")//select rect
		.data(dataset[dataNames[j]])					//choose data
		.enter()						//insert data
		.append("rect")					//attach rect to svg
		.attr("y", function(d){
			return svgHeight - yScale(d);		//return y co-ordinate of each rect in reference to top of svg
		})
		.attr("height", function(d){	//return height of rect as datapoint
			return yScale(d);
		})
		.attr("width", barWidth - barPadding) //return width of rect as width-padding 
		.attr("transform", function(d, i){
			var translate = [barWidth*i, 0]; //move each bar over by barwidth times the index of the datapoint
			return `translate(${translate})`;
		})
		.attr('class', 'bar')
		.attr('id', function(d,i){
			return `${j}${i}`;
		});
}

















//create the bar charts
for(let j=0; j<length; j++){
	//create new svg
	var createSVG = $("<svg> </svg>")
		.width(svgWidth)
		.height(svgHeight)
		.attr('id', `id${j}-three`);

	//attach new svg to relevant cell
	$(`#row${j}-three`).append(createSVG);

	//select the new svg by id
	var svg = d3.select(`#id${j}-three`);


	//create bar charts 
	var barChart = svg.selectAll("rect")//select rect
		.data(dataset2[dataNames[j]])					//choose data
		.enter()						//insert data
		.append("rect")					//attach rect to svg
		.attr("y", function(d){
			return svgHeight - yScale(d);		//return y co-ordinate of each rect in reference to top of svg
		})
		.attr("height", function(d){	//return height of rect as datapoint
			return yScale(d);
		})
		.attr("width", barWidth - barPadding) //return width of rect as width-padding 
		.attr("transform", function(d, i){
			var translate = [barWidth*i, 0]; //move each bar over by barwidth times the index of the datapoint
			return `translate(${translate})`;
		})
		.attr('class', 'bar')
		.attr('id', function(d,i){
			return `${j}${i}-threebar`;
		});
}




//event listeners
$('.bar').on('mouseover', function(e){
	console.log(e);

	const idNum = e.target.id;
	const bar = $(`#${idNum}`); 

	bar.css({"fill": "rgb(255,0,0)"})
	.a;


})

$('.bar').on('mouseleave', function(e){

	const idNum = e.target.id;
	const bar = $(`#${idNum}`); 

	bar.css({"fill": "rgb(0,0,0)"});

})
