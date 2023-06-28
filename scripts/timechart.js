document.addEventListener("DOMContentLoaded", function(event) {
$("#chart-line").delay(1000).fadeIn(500);

const text = document.getElementById('text-box');


var lineDataset80 = [
    {
    "date": 1979,
    "calls": 0,
    "song": ''
  },
  {
    "date": 1981,
    "calls": 63,
    "song": 'Under Pressure'
  },
  {
    "date": 1982,
    "calls": 83,
    "song": 'Billie Jean'
  },
  {
    "date": 1984,
    "calls": 73,
    "song": 'When Doves Cry'
  },
  {
    "date": 1986,
    "calls": 87,
    "song": 'Livin On A Prayer'
  },
  {
    "date": 1987,
    "calls": 88,
    "song": 'Sweet Child O Mine'
  }
]

var lineDataset90 = [
    {
      "date": 1989,
      "calls": 0,
      "song": ""
    },
    {
      "date": 1990,
      "calls": 69,
      "song": "Entre Dos Tierras"
    },
    {
      "date": 1992,
      "calls": 85,
      "song": "Smells Like Teen Spirit"
    },
    {
      "date": 1995,
      "calls": 65,
      "song": "Wonderwall"
    },
    {
      "date": 1996,
      "calls": 83,
      "song": "Wannabe"
    },
    {
      "date": 1998,
      "calls": 82,
      "song": "Baby One More Time"
    }
  ];

  var lineDataset00 = [
    {
      "date": 1999,
      "calls": 0,
      "song": ""
    },
    {
      "date": 2000,
      "calls": 88,
      "song": "In the End"
    },
    {
      "date": 2001,
      "calls": 66,
      "song": "What a Girl Wants"
    },
    {
      "date": 2002,
      "calls": 47,
      "song": "A dios Le Pido"
    },
    {
      "date": 2003,
      "calls": 81,
      "song": "Crazy In Love"
    },
    {
      "date": 2009,
      "calls": 84,
      "song": "Bad Romance"
    }
  ];

  var lineDataset10 = [
    {
      "date": 2009,
      "calls": 0,
      "song": ""
    },
    {
      "date": 2011,
      "calls": 82,
      "song": "Rolling In The Deep"
    },
    {
      "date": 2012,
      "calls": 71,
      "song": "Shake It Out"
    },
    {
      "date": 2013,
      "calls": 82,
      "song": "Radioactive"
    },
    {
      "date": 2014,
      "calls": 90,
      "song": "Do I Wanna Know?"
    },
    {
      "date": 2016,
      "calls": 81,
      "song": "Work"
    }
  ];

  var lineDatasetAllPop = [
    {
      "date": 1979,
      "calls": 0,
      "song": ""
    },
    {
      "date": 1982,
      "calls": 83,
      "song": "Billie Jean"
    },
    {
      "date": 1984,
      "calls": 73,
      "song": "When Doves Cry"
    },
    {
      "date": 1996,
      "calls": 83,
      "song": "Wannabe"
    },
    {
      "date": 1998,
      "calls": 82,
      "song": "Baby One More Time"
    },
    {
      "date": 2001,
      "calls": 66,
      "song": "What a Girl Wants"
    },
    {
      "date": 2003,
      "calls": 81,
      "song": "Crazy In Love"
    },
    {
      "date": 2009,
      "calls": 84,
      "song": "Bad Romance"
    },
    {
      "date": 2011,
      "calls": 82,
      "song": "Rolling In The Deep"
    },
    {
      "date": 2012,
      "calls": 71,
      "song": "Shake It Out"
    },
    {
      "date": 2016,
      "calls": 81,
      "song": "Work"
    }
  ];

  var lineDatasetAllRock = [
    {
      "date": 1979,
      "calls": 0,
      "song": ""
    },
    {
      "date": 1981,
      "calls": 63,
      "song": "Under Pressure"
    },
    {
      "date": 1986,
      "calls": 87,
      "song": "Livin On A Prayer"
    },
    {
      "date": 1987,
      "calls": 88,
      "song": "Sweet Child O Mine"
    },
    {
      "date": 1990,
      "calls": 69,
      "song": "Entre Dos Tierras"
    },
    {
      "date": 1992,
      "calls": 85,
      "song": "Smells Like Teen Spirit"
    },
    {
      "date": 1995,
      "calls": 65,
      "song": "Wonderwall"
    },
    {
      "date": 2000,
      "calls": 88,
      "song": "In The End"
    },
    {
      "date": 2002,
      "calls": 47,
      "song": "A Dios Le Pido"
    },
    {
      "date": 2013,
      "calls": 82,
      "song": "Radioactive"
    },
    {
      "date": 2014,
      "calls": 90,
      "song": "Do I Wanna Know?"
    }
  ];



  var currentDataset = lineDataset80; // Dataset actual
  

function drawGraph(data) {

  var margin = {top: 30, right: 30, bottom: 50, left: 64},
      width  = 1200 - margin.left - margin.right,
      height = 430 - margin.top - margin.bottom;

  var xMin = d3.min(data, function(d) {
      return d.date;
  });
      
  var xMax = d3.max(data, function(d) {
      return d.date;
  });
      
  var xScale = d3.scaleLinear()
    .domain([xMin, xMax])
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
  .ticks(6)
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
    .attr("x", "14em")
    .attr("y", "3em")
    .style("text-anchor", "middle")
    .text("YEAR");

  //Add the Y Axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-12em")
    .attr("y", "-3em")
    .style("text-anchor", "end")
    .text("POPULARITY");



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
    .attr("class", "linee")
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
    .attr("class", "lineDotss")
    .attr("r", 4)
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

}

function drawGraphAll(data, data2) {

  var combinedData = data.concat(data2);

  var margin = {top: 30, right: 30, bottom: 50, left: 64},
      width  = 1200 - margin.left - margin.right,
      height = 430 - margin.top - margin.bottom;

  var xMin = d3.min(combinedData, function(d) {
      return d.date;
  });
      
  var xMax = d3.max(combinedData, function(d) {
      return d.date;
  });
      
  var xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([0, width]);

  var yScale = d3.scaleLinear()
  .domain([
    0, d3.max(data2, function (d) {
      return d.calls;
    })
  ])
  .range([height, 0]);

  var yScale2 = d3.scaleLinear()
  .domain([
    0, d3.max(data2, function(d) {
      return d.calls;
    })
  ])
  .range([height, 0]);

  var xAxisValues = combinedData.map(function(d) {
    return d.date;
  });

  var xAxis = d3.axisBottom()
  .scale(xScale)
  .tickFormat(d3.format("d"))
  .ticks(6)
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

  var lineFunction2 = d3.line()
  .x(function(d) {
    return xScale(d.date);
  })
  .y(function(d) {
    return yScale2(d.calls);
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

  var areaFunction2 = d3.area()
  .x(function(d) {
    return xScale(d.date);
  })
  .y0(height)
  .y1(function(d) {
    return yScale2(d.calls);
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
    .attr("stop-color", "blue")
    .attr("stop-opacity", 0.4);

  //Append the second stop - white transparant almost at the end
  areaGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "lightblue")
    .attr("stop-opacity", 0);

  // Define el gradiente para el área de data2
  var areaGradient2 = svg.append('defs')
    .append("linearGradient")
    .attr('id', 'areaGradient2')
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "0%").attr("y2", "100%");

  // Agrega los stops para el gradiente de data2
  areaGradient2.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "red")  // Cambia el color del stop superior del gradiente de data2
    .attr("stop-opacity", 0.4);

  areaGradient2.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "lightred")  // Cambia el color del stop inferior del gradiente de data2
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
    .attr("x", "14em")
    .attr("y", "3em")
    .style("text-anchor", "middle")
    .text("YEAR");

  //Add the Y Axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-10em")
    .attr("y", "-3em")
    .style("text-anchor", "end")
    .text("POPULARITY");



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

  svg.append("path")
    .attr("class", "area2")
    .style("fill", "url(#areaGradient2)")  // Utiliza el nuevo gradiente para el área de data2
    .attr("d", areaFunction2(data2));
  

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
    .attr("r", 4)
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
  svg.append("path")
  .attr("class", "line2")
  .attr("d", lineFunction2(data2))
   // Cambia el color de la línea según tus preferencias


  svg.selectAll(".lineDots2")
  .data(data2, function(d) {
    return d.date;
  })
  .enter().append("circle")
  .attr("class", "lineDots2")
  .attr("r", 4)
  .attr("cx", function(d) {
    return xScale(d.date);
  })
  .attr("cy", function(d) {
    return yScale2(d.calls);
  })
  .on("mouseover", function(d) {
    tooltip.transition()
      .duration(200)
      .style("opacity", 1);
    tooltip.html("<span>" + d.calls + ': ' + d.song + "</span>")
      .style("left", (d3.event.pageX - 25) + "px")
      .style("top", (d3.event.pageY - 38) + "px");
  })
  .on("mouseout", function(d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });

}

drawGraphAll(lineDatasetAllPop, lineDatasetAllRock)

function updateGraph() {
  // Limpia el gráfico existente
  d3.select("#chart-line svg").remove();

  // Dibuja el gráfico con el dataset actualizado
  drawGraph(currentDataset);
}

function updateGraph2() {
  // Limpia el gráfico existente
  d3.select("#chart-line svg").remove();

  // Dibuja el gráfico con el dataset actualizado
  drawGraphAll(lineDatasetAllPop, lineDatasetAllRock);
}

// Función para animar el trazado de la línea gradualmente
function animateLine() {
  var line = d3.select(".line");

  // Obtener el largo total de la línea
  var totalLength = line.node().getTotalLength();

  // Configurar la línea inicialmente con longitud cero y opacidad cero
  line.attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .style("opacity", 0)
    .style("display", "block");

  // Animar el trazado de la línea
  line.transition()
    .duration(2000)  // Duración de la animación en milisegundos
    .attr("stroke-dashoffset", 0)
    .style("opacity", 1);
}

function animateLine2() {
  var line = d3.select(".line2");

  // Obtener el largo total de la línea
  var totalLength = line.node().getTotalLength();

  // Configurar la línea inicialmente con longitud cero y opacidad cero
  line.attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .style("opacity", 0)
    .style("display", "block");

  // Animar el trazado de la línea
  line.transition()
    .duration(2000)  // Duración de la animación en milisegundos
    .attr("stroke-dashoffset", 0)
    .style("opacity", 1);
}

function animateLine3() {
  var line = d3.select(".linee");

  // Obtener el largo total de la línea
  var totalLength = line.node().getTotalLength();

  // Configurar la línea inicialmente con longitud cero y opacidad cero
  line.attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .style("opacity", 0)
    .style("display", "block");

  // Animar el trazado de la línea
  line.transition()
    .duration(1500)  // Duración de la animación en milisegundos
    .attr("stroke-dashoffset", 0)
    .style("opacity", 1);
}

// Función para mostrar los textos en el gráfico
function showTexts() {
  var svg = d3.select("#chart-line svg");

  // Agregar el primer texto
  svg.append("text")
    .attr("class", "chart-text")
    .attr("x", 800)  // Coordenada x del primer texto
    .attr("y", 127)  // Coordenada y del primer texto
    .style("fill", "#276bff")
    .text("POP");

  // Agregar el segundo texto
  svg.append("text")
    .attr("class", "chart-text")
    .attr("x", 450)  // Coordenada x del segundo texto
    .attr("y", 185)  // Coordenada y del segundo texto
    .style("fill", "#ff4040")
    .text("ROCK");
}

// Manejador de evento para el botón
$("#update-button").click(function() {
  // Cambia el dataset actual al nuevo dataset
  currentDataset = lineDataset90;

  // Actualiza el gráfico
  updateGraph();

  animateLine3();
  document.getElementById("text-box").innerText = "En la decada del 90, la cancion mas popular fue (Smells Like Teen Spirit) el famoso hit mundial de Nirvana con un 85/100. Sin embargo, la cancion mas bailable fue del genero pop (Wannabe) con un 81/100.";
  text.style.display = 'flex'
});

// Manejador de evento para el botón
$("#update-button2").click(function() {
  // Cambia el dataset actual al nuevo dataset
  currentDataset = lineDataset80;

  // Actualiza el gráfico
  updateGraph();
  animateLine3();
  document.getElementById("text-box").innerText = "En la decada del 80, donde empezo el auge del POP, con el artista de pop conocido como, Rey del Pop, Michael Jackson, la cancion (Billie Jean) es una de las mas conocidas del genero, alcanzando una popularidad de 83/100 siendo una de las mas bailables con un 92/100. El ROCK no se queda atras con (Sweet Child O Mine) siendo la mas popular de la decada con un 88/100.";
  text.style.display = 'flex'

  
});

// Manejador de evento para el botón
$("#update-button3").click(function() {
  // Cambia el dataset actual al nuevo dataset
  currentDataset = lineDataset00;

  // Actualiza el gráfico
  updateGraph();
  animateLine3();
  document.getElementById("text-box").innerText = "Entremos en los 2000... Aqui vuelve a ocurrir que la cancion mas popular es del genero ROCK con la famosa cancion (In The End) de Linkin Park con un 88/100 y la cancion mas bailable vuelve a ser del genero POP (What A Girl Wants) de Christina Aguilera con un 75/100.";
  text.style.display = 'flex'


});

// Manejador de evento para el botón
$("#update-button4").click(function() {
  // Cambia el dataset actual al nuevo dataset
  currentDataset = lineDataset10;

  // Actualiza el gráfico
  updateGraph();
  animateLine3();
  document.getElementById("text-box").innerText = "Acercandonos mas a la actualidad (decada del 2010) tenemos a la cancion de ROCK mas popular (Do I Wanna Know?) de Arctic Monkeys con un 90/100 y la mas bailable es de genero POP (Rolling in the Deep) de Adele con un 77/100.";
  text.style.display = 'flex'

});

$("#update-button5").click(function() {
  // Cambia el dataset actual al nuevo dataset
  updateGraph2();
  animateLine();
  animateLine2();
  showTexts()
  document.getElementById("text-box").innerText = "Para concluir construimos un grafico de dos lineas, una de POP y otra de ROCK, de todas las decadas en la cual se observa que las canciones de POP son mas bailables que las de ROCK y las canciones de ROCK son mas populares que las de POP en general. La cancion mas popular es (Do I Wanna Know?) y la mas bailable es (Billie Jean).";
  text.style.display = 'flex'
  
});


});