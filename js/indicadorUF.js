$(document).ready(function(){
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var valorUF = dailyIndicators.uf.valor;

        // Mostrar el valor inicialmente
        $("#resultadoCLP").html(`
            <input type="number" id="clp" class="form-control clp" placeholder="CLP" value="${valorUF.toFixed(2)}">
        `);
        $("#resultadoUF").html(`
            <input type="number" id="uf" class="form-control uf" placeholder="UF" value=1>
        `);

        // Calcular y actualizar el valor cuando se cambia el input del UF
        $("#uf").on('input', function() {
            var cantidadUF = parseFloat($(this).val());
            // Calcular el valor en pesos chilenos
            var valorEnPesos = cantidadUF * valorUF;
            // Actualizar el otro input
            $("#resultadoCLP input").val(valorEnPesos.toFixed(2));         
        });

        // Calcular y actualizar el valor cuando se cambia el input del CLP
        $("#clp").on('input', function() {
            var valorEnPesos = parseFloat($(this).val());
            // Calcular el valor en UF
            var valorCLP = valorEnPesos / valorUF;
            // Actualizar el otro input
            $("#resultadoUF input").val(valorCLP.toFixed(6));
        });

        var resultadoo = 1 / valorUF;
        console.log(resultadoo.toFixed(6));
    }).fail(function() {
        console.log('Error al consumir la API!');
    });
});
