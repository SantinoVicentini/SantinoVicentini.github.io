document.addEventListener("DOMContentLoaded", function(event) {
$("#chart-line").delay(1000).fadeIn(500);

var lineDataset80 = [
    {
    "date": 0,
    "calls": 0,
    "song": ''
  }, 
  {
    "date": 44.6,
    "calls": 88,
    "song": 'Sweet Child O Mine'
  },
  {
    "date": 53.2,
    "calls": 87,
    "song": 'Livin On A Prayer'
  },
  {
    "date": 67.2,
    "calls": 63,
    "song": 'Under Pressure'
  },
  {
    "date": 72.9,
    "calls": 73,
    "song": 'When Doves Cry'
  },
  {
    "date": 92,
    "calls": 83,
    "song": 'Billie Jean'
  }
]

var lineDatasetNew = [
    {
      "date": 10,
      "calls": 50,
      "song": "New Song 1"
    },
    {
      "date": 30,
      "calls": 70,
      "song": "New Song 2"
    },
    {
      "date": 50,
      "calls": 40,
      "song": "New Song 3"
    }
  ];
  

function drawGraph(data) {

  var margin = {top: 30, right: 30, bottom: 50, left: 64},
      width  = 860 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

  var xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width]);

  var yScale = d3.scaleLinear()
  .domain([
    0, d3.max(data, function (d) {
      return d.calls;
    })
  ])
  .range([height, 0]);

  var xAxisValues = data.map(function(d) {
    return d.date;
  });

  var xAxis = d3.axisBottom()
  .scale(xScale)
  .tickFormat(d3.format("d"))
  .ticks(10)
  .tickValues(xAxisValues);

  var yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(5)
  .tickFormat(d3.format("d"));

  //Initiate the line function
  var lineFunction = d3.line()
  .x(function (d) {
    return xScale(d.date);
  })
  .y(function (d) {
    return yScale(d.calls);
  });

  //Initiate the area line function
  var areaFunction = d3.area()
  .x(function (d) {
    return xScale(d.date);
  })
  .y0(height)
  .y1(function (d) {
    return yScale(d.calls);
  });


  //Add the svg canvas for the line chart
  var svg = d3.select("#chart-line")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //Define the gradient below the line chart
  var areaGradient = svg.append('defs')
  .append("linearGradient")
  .attr('id', 'areaGradient')
  .attr("x1", "0%").attr("y1", "0%")
  .attr("x2", "0%").attr("y2", "100%");


  //Append the first stop - the color at the top
  areaGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#208b46")
    .attr("stop-opacity", 0.4);

  //Append the second stop - white transparant almost at the end
  areaGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#22452e")
    .attr("stop-opacity", 0);


  data.forEach(function (d) {
    d.date  = +d.date;
    d.calls = +d.calls;
  });

  //Create the chart
  //Add the X Axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("transform", "translate(364,14)")
    .attr("y", "2em")
    .style("text-anchor", "middle")
    .text("Danceability");

  //Add the Y Axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-1.5em")
    .attr("y", "-3em")
    .style("text-anchor", "end")
    .text("Popularity");



  // gridlines in y axis function
  function make_y_gridlines() {
    return d3.axisLeft().scale(yScale)
      .ticks(5);
  }

  // add the Y gridlines
  svg.append("g")
    .attr("class", "gridline")
    .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
         );


  //Draw the underlying area chart filled with the gradient
  svg.append("path")
    .attr("class", "area")
    .style("fill", "url(#areaGradient)")
    .attr("d", areaFunction(data));

  //Draw the line
  svg.append("path")
    .attr("class", "line")
    .attr("d", lineFunction(data));

  // Define the div for the tooltip
  var tooltip = d3.select("#chart-line").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

  svg.selectAll(".lineDots")
    .data(data, function (d) {
    return d.date;
  })
    .enter().append("circle")
    .attr("class", "lineDots")
    .attr("r", 3)
    .attr("cx", function (d) {
    return xScale(d.date);
  })
    .attr("cy", function (d) {
    return yScale(d.calls);
  })
    .on("mouseover", function (d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 1);
    tooltip.html("<span>" + d.calls + ': ' + d.song + "</span>")
      .style("left", (d3.event.pageX - 25) + "px")
      .style("top", (d3.event.pageY - 38) + "px");
  })
    .on("mouseout", function (d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });
  //Draw the additional line
/* svg.append("path")
.attr("class", "line")
.attr("d", lineFunction(lineDatasetNew));

// Add the additional line dots
svg.selectAll(".lineDotsNew")
.data(lineDatasetNew, function (d) {
  return d.date;
})
.enter().append("circle")
.attr("class", "lineDotsNew")
.attr("r", 3)
.attr("cx", function (d) {
  return xScale(d.date);
})
.attr("cy", function (d) {
  return yScale(d.calls);
})
.on("mouseover", function (d) {
  tooltip.transition()
    .duration(200)
    .style("opacity", 1);
  tooltip.html("<span>" + d.calls + ': ' + d.song + "</span>")
    .style("left", (d3.event.pageX - 25) + "px")
    .style("top", (d3.event.pageY - 38) + "px");
})
.on("mouseout", function (d) {
  tooltip.transition()
    .duration(500)
    .style("opacity", 0);
});
*/
}

drawGraph(lineDataset80);
});