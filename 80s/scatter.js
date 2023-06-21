d3.csv('80s.csv', d3.autoType).then(data => {
  // Variables para almacenar los datos de los ejes x e y
  var xAxisData = [];
  var yAxisData = [];

  // Extraer los datos del archivo CSV y asignarlos a las variables correspondientes
  data.forEach(row => {
    xAxisData.push(row.danceability);
    yAxisData.push(row.popularity);
  });

  // Datos para el scatter plot
  var plotData = [
    {
      x: xAxisData,       // Valores en el eje x (danceability)
      y: yAxisData,       // Valores en el eje y (popularity)
      mode: 'markers',    // Tipo de marcadores
      type: 'scatter'     // Tipo de gráfico (scatter plot)
    }
  ];

  // Configuración del diseño del scatter plot
  var layout = {
    title: 'Diagrama de dispersión',
    xaxis: {
      title: 'Danceability'
    },
    yaxis: {
      title: 'Popularity'
    },
    style: {
      fontFamily: "arial",
      fontSize: 12
    },
    height: 400,
    marginLeft: 60,
    width: 715,
    marginBottom: 50
  };

  // Crea el scatter plot en el div con id "scatterPlot"
  Plotly.newPlot('scatterPlot', plotData, layout);
});