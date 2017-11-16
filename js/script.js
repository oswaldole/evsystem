
     $.datepicker.regional['es'] = {
     closeText: 'Cerrar',
     prevText: '< Ant',
     nextText: 'Sig >',
     currentText: 'Hoy',
     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
     monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
     dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
     dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: false,
     showMonthAfterYear: false,
     yearSuffix: ''
     };
     
     $.datepicker.setDefaults($.datepicker.regional['es']);
    $(function () {
    $("#fecha").datepicker();
    });

  $(function () {
  $.datepicker.setDefaults($.datepicker.regional["es"]);
  $(".datepicker").datepicker({
  firstDay: 1
  });
  });

  $(document).ready(function(){
   $("#agregar1").on("click",function(){
    $clone=$("table tbody tr:first").clone();
    $clone.find("input").each(function(){
     $(this).val("");
    });
    $("table:first tbody").append($clone);
   });
  });

  $(document).ready(function(){
    $("#borrar1").click(function(){
      $("table:first tbody tr:last").remove();
    }) 
  });

  $(document).ready(function(){
   $("#agregar2").on("click",function(){
    $clone=$("table tbody tr:last").clone();
    $clone.find("input").each(function(){
     $(this).val("");
    });
    $("table:last tbody").append($clone);
   });
  });

  $(document).ready(function(){
    $("#borrar2").click(function(){
      $("table:last tbody tr:last").remove();
    }) 
  });

  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

  
// 
// ZONA DE GRAFICOS
//

// Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
  google.charts.setOnLoadCallback(drawChart4);
  google.charts.setOnLoadCallback(drawChart5);
  google.charts.setOnLoadCallback(drawChart6)
  google.charts.setOnLoadCallback(drawVisualization);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Estado', 'cantidad'],
    ['No medidos', 8],
    ['Peligro', 2],
    ['Alerta', 4],
    ['Admisible', 2],
    ['Observacion', 8]
  ]);

    // Optional; add a title and set the width and height of the chart
    var options = {pieHole:'0.4'};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('donut_chart1'));
    chart.draw(data, options);

    var chart = new google.visualization.PieChart(document.getElementById('donut_chart2'));
    chart.draw(data, options);

    var chart = new google.visualization.PieChart(document.getElementById('donut_chart3'));
    chart.draw(data, options); 
  }

  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'cantidad', { role: 'style' }, { role: 'annotation' } ],
          ['No medidos', 8, 'blue', 'No medidos' ],
          ['Peligro', 2, 'red', 'Peligro' ],
          ['Alerta', 4, 'orange', 'Alerta' ],
          ['Admisible', 2, 'green', 'Admisible' ]

  ]);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "",

        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('bar_chart1'));
    chart.draw(view, options);

    var chart = new google.visualization.BarChart(document.getElementById('bar_chart2'));
    chart.draw(view, options);

    var chart = new google.visualization.BarChart(document.getElementById('bar_chart3'));
    chart.draw(view, options); 

    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart1'));
    chart.draw(view, options);

    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart2'));
    chart.draw(view, options);  
  }

  function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Mes', 'Programados', 'Medidos', 'No Medidos'],
          ['Enero', 80, 75, 5],
          ['Febrero', 85, 78, 7],
          ['Marzo', 81, 79, 2],
          ['Abril', 84, 80, 4]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));
        chart.draw(data, options);

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
        chart.draw(data, options);
     }

     function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'cantidad', { role: 'style' }, { role: 'annotation' } ],
          ['Alineacion', 15, 'blue', 'No medidos' ],
          ['Balanceo', 18, 'red', 'Peligro' ],
          ['Rodamientos', 7, 'orange', 'Alerta' ],
          ['Altura Mecanica', 10, 'green', 'Admisible' ]

  ]);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "",

        bar: {groupWidth: "60%"},
        legend: { position: "none" },
      };
    // Display the chart inside the <div> element with id="piechart"

    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart1'));
    chart.draw(view, options);

    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart2'));
    chart.draw(view, options);  
  }
  function drawChart5() {
    var data = google.visualization.arrayToDataTable([
    ['Estado', 'cantidad'],
    ['Acertado', 16],
    ['No Acertado', 4],
    ['Incertidumbre', 2]
  ]);

    // Optional; add a title and set the width and height of the chart
    var options = {title:''};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('pie_chart1'));
    chart.draw(data, options);

  }
  function drawChart6() {
    var data = google.visualization.arrayToDataTable([
        ['Estado', 'cantidad', { role: 'style' }, { role: 'annotation' } ],
          ['Acertado', 16, 'blue', 'No medidos' ],
          ['No Acertado', 4, 'red', 'Peligro' ],
          ['Incertidumbre', 2, 'orange', 'Alerta' ]
  ]);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "",

        bar: {groupWidth: "60%"},
        legend: { position: "none" },
      };
    // Display the chart inside the <div> element with id="piechart"

    var chart = new google.visualization.ColumnChart(document.getElementById('column_chart3'));
    chart.draw(view, options);
  }
  function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Ahorro PdM', 'Ahorro PdM Acumulado'],
         ['2018/01',  2435,      2435],
         ['2018/02',  3843,      6276],
         ['2018/03',  6412,      12690],
         ['2018/04',  7526,      20216],
         ['2018/05',  4718,      24934]
      ]);

    var options = {
      title : ' ',
      vAxis: {title: 'Dolares'},
      hAxis: {title: 'Mes'},
      seriesType: 'bars',
      series: {1: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('combo_chart'));
    chart.draw(data, options);
  }

  //
  //  ZONA DE VINCULOS DEL MENU
  //

    $(document).on('click', '#menu_componente' , function(event) {
      event.preventDefault();
      $("#contenido").load("Componente.html");
    });

    $(document).on('click', '#menu_dashboard' , function(event) {
      event.preventDefault();
      $("#contenido").load("dashboard.html");
    });

    $(document).on('click', '#menu_activos' , function(event) {
      event.preventDefault();
      $("#contenido").load("Activos.html");
    });

    $(document).on('click', '#menu_vibracion' , function(event) {
      event.preventDefault();
      $("#contenido").load("Vibracion.html");
    });

    $(document).on('click', '#menu_orden_trabajo' , function(event) {
      event.preventDefault();
      $("#contenido").load("ot.html");
    });

    $(document).on('click', '#menu_gestion_casos' , function(event) {
      event.preventDefault();
      $("#contenido").load("casos.html");
    });    

    $(document).on('click', '#menu_lubricantes' , function(event) {
      event.preventDefault();
      $("#contenido").load("Lubricantes.html");
    });

    $(document).on('click', '#menu_plan_lubricacion' , function(event) {
      event.preventDefault();
      $("#contenido").load("Planes_lubricacion.html");
    });   

    $(document).on('click', '#menu_cliente_empresa' , function(event) {
      event.preventDefault();
      $("#contenido").load("cliente.html");
    });   

    $(document).on('click', '#menu_personal' , function(event) {
      event.preventDefault();
      $("#contenido").load("personal_trabajo.html");
    });

    $(document).on('click', '#menu_planta' , function(event) {
      event.preventDefault();
      $("#contenido").load("planta.html");
    });

    $(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
