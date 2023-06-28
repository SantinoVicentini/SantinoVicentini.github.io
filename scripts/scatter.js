// Rutas de los archivos CSV
var csvFile = "/PlaylistD/00s.csv";
  // Configuración del gráfico
var margin = { top: 20, right: 20, bottom: 30, left: 40 };
var width = 700 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

  // Crear el contenedor del gráfico
var svg = d3.select("#scatterplot")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Escalas para los ejes x e y
var xScale = d3.scaleLinear().range([0, width]).domain([0, 100]);
var yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

  // Ejes x e y
var xAxis = d3.axisBottom().scale(xScale);
var yAxis = d3.axisLeft().scale(yScale);

  // Agregar los ejes al gráfico
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  // Cargar los datos del archivo CSV
  d3.csv(csvFile, function(data) {
    // Convertir los valores de popularidad y danceability en números
    data.forEach(function(d) {
      d.popularity = +d.popularity;
      d.danceability = +d.danceability;
    });

    
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
    
    // Agregar los puntos al gráfico
    svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 4)
    .attr("cx", function(d) { return xScale(d.popularity); })
    .attr("cy", function(d) { return yScale(d.danceability); })
    .style("fill", function(d) {
      if (d.genre === "rock") {
        return "#ff0000"; // Pintar de rojo si el género es "rock"
      } else {
        return "#0099ff"; // Otros géneros se pintan de azul acero
      }
    })
    .style("cursor", function(d) {
      if (d.genre === "rock") {
        return "pointer"; // Cambiar el cursor a "pointer" si el género es "rock"
      } else{
        return "pointer";
      }
    })
    .style("fill-opacity", function(d) {
      if (d.genre === "rock") {
        return 0.5; // Establecer la opacidad a 0.5 si el género es "rock"
      } else{
        return 0.5
      }
    })
    .style("stroke", function(d) {
      if (d.genre === "rock") {
        return "#740000"; // Establecer el color de borde a #740000 si el género es "rock"
      } else{
        return "#006eff";
      }
    })
    .style("stroke-opacity", function(d) {
      if (d.genre === "rock") {
        return 0.4; // Establecer la opacidad del borde a 0.4 si el género es "rock"
      } else {
        return 0.4
      }
    })
    .on("mouseover", function (d) {
      if (d.genre === "rock") {
        d3.select(this)
          .style("fill-opacity", 1) // Aumentar la opacidad a 1 en el evento "mouseover" si el género es "rock"
          .style("stroke-width", "20px"); // Establecer el ancho del borde a "20px" en el evento "mouseover" si el género es "rock"
      } else{
        d3.select(this)
        .style("fill-opacity", 1) // Aumentar la opacidad de llenado a 1 en el evento "mouseover" si el género no es "rock"
        .style("stroke-width", "20px"); // Establecer el ancho de borde a "20px" en el evento "mouseover" si el género no es "rock"
      }
      tooltip.transition()
        .duration(200)
        .style("opacity", 1);
      tooltip.html("<span>" + d.name + ' // (' + d.popularity + ' ; ' + d.danceability + ') ' +  "</span>")
        .style("left", (d3.event.pageX - 25) + "px")
        .style("top", (d3.event.pageY - 38) + "px");
    })
    .on("mouseout", function (d) {
      if (d.genre === "rock") {
        d3.select(this)
          .style("fill-opacity", 0.5) // Restaurar la opacidad a 0.5 en el evento "mouseout" si el género es "rock"
          .style("stroke-width", "1px"); // Restaurar el ancho del borde a "1px" en el evento "mouseout" si el género es "rock"
      } else{
        d3.select(this)
        .style("fill-opacity", 0.5) // Restaurar la opacidad de llenado a 0.5 en el evento "mouseout" si el género no es "rock"
        .style("stroke-width", "1px"); // Restaurar el ancho de borde a "1px" en el evento "mouseout" si el género no es "rock"
      }
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
        // Etiquetas de los ejes
        svg.append("text")
          .attr("class", "x label")
          .attr("text-anchor", "end")
          .attr("x", width)
          .attr("y", height - 6)
          .text("POPULARITY");

        svg.append("text")
          .attr("class", "y label")
          .attr("text-anchor", "end")
          .attr("y", 6)
          .attr("dy", ".75em")
          .attr("transform", "rotate(-90)")
          .text("DANCEABILITY");

    })
