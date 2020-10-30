//1.
/*d3.select();
d3.selectAll();

d3.select('h1')
.style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');


d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('2nd Paragraph');
d3.select('body').append('p').text('3rd Paragraph');

d3.select('p').style('color','red');

d3.selectAll('p').style('color', 'blue');*/


//2

/*var dataset = [1,2,3,4,5];

d3.select('body')
.selectAll('p')
.data(dataset)
.enter()
.append('p')
//.text('test');
.text(function(d){ return(d);});
*/

//3
/*
var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
	.attr("width", svgWidth)
	.attr("height", svgHeight);

var barChart = svg.selectAll("rect")//select rect
	.data(dataset)					//choose data
	.enter()						//insert data
	.append("rect")					//attach rect to svg
	.attr("y", function(d){
		return svgHeight - d;		//return y co-ordinate of each rect in reference to top of svg
	})
	.attr("height", function(d){	//return height of rect as datapoint
		return d;
	})
	.attr("width", barWidth - barPadding) //return width of rect as width-padding 
	.attr("transform", function(d, i){
		var translate = [barWidth*i, 0]; //move each bar over by barwidth times the index of the datapoint
		return `translate(${translate})`;
	});*/


//4 - continues from 3

/*
var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
	.attr("width", svgWidth)
	.attr("height", svgHeight);

var barChart = svg.selectAll("rect")//select rect
	.data(dataset)					//choose data
	.enter()						//insert data
	.append("rect")					//attach rect to svg
	.attr("y", function(d){
		return svgHeight - d;		//return y co-ordinate of each rect in reference to top of svg
	})
	.attr("height", function(d){	//return height of rect as datapoint
		return d;
	})
	.attr("width", barWidth - barPadding) //return width of rect as width-padding 
	.attr("transform", function(d, i){
		var translate = [barWidth*i, 0]; //move each bar over by barwidth times the index of the datapoint
		return `translate(${translate})`;
	});

var text = svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){
		return d;
	})
	.attr("y", function(d){
		return svgHeight-d-10;
	})
	.attr("x", function(d, i){
		return barWidth*(i+0.25);
	})
	.attr("fill", "blue");*/


//5 - continues from 4
/*
var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
	.attr("width", svgWidth)
	.attr("height", svgHeight);

var yScale = d3.scaleLinear()
	.domain([0,d3.max(dataset)])
	.range([0,svgHeight]);


var barChart = svg.selectAll("rect")//select rect
	.data(dataset)					//choose data
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
	});

var text = svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){
		return d;
	})
	.attr("y", function(d){
		return yScale-d-10;
	})
	.attr("x", function(d, i){
		return barWidth*(i+0.25);
	})
	.attr("fill", "blue");
*/

//6


/*var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300

var svg = d3.select('svg')
	.attr("width", svgWidth)
	.attr("height", svgHeight);

var xScale = d3.scaleLinear()
	.domain([0,d3.max(dataset)])
	.range([0,svgWidth]);

var yScale = d3.scaleLinear()
	.domain([0,d3.max(dataset)])
	.range([svgHeight,0]);


var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
.attr("transform", "translate(50,10)")
.call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append("g")
.attr("transform", `translate(50, ${xAxisTranslate})`)
.call(x_axis);*/



//7

/*
var dataset = {"SPR001":[1,2,3,4,5],
			   "SPR002":[6,4,10,6,4],
			   "SPR003":[3,2,3,2,4],
			   "SPR004":[4,3,4,1,4],
			   "SPR005":[5,2,3,0,4]
			   }


var svgWidth = 200, svgHeight = 90, barPadding = 1;
var barWidth = (svgWidth/5);



var yScale = d3.scaleLinear()
	.domain([0,d3.max(dataset["SPR002"])])
	.range([0,svgHeight]);

var svg = d3.select('svg')
	.attr("width", svgWidth)
	.attr("height", svgHeight)
	.attr("id", "test");


var barChart = svg.selectAll("rect")//select rect
	.data(dataset["SPR002"])					//choose data
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
	});
*/


