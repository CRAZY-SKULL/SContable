$(document).ready(function () {
    $("#videoTroll").hide();

    $("#btnYoutube").click(function () {
        $("#videoTroll").show();
        $(".video-container").hide();
        $("#youtubePlayer").html('<iframe width="100%" height="500px" src="https://www.youtube.com/embed/GBIIQ0kP15E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });


    $("#monto").on('input',function () {
        // Obtener el valor del precio del producto
        var monto = parseFloat($(this).val());

        // Calcular el IVA (19% en Chile)
        var iva = monto * 0.19;

        // Calcular el valor neto (sin IVA)
        var neto = monto;

        // Calcular el valor bruto (con IVA)
        var bruto = monto + iva;

        // Formatear los valores con puntos como separador de miles
        var netoFormateado = neto.toLocaleString('es-CL');
        var ivaFormateado = iva.toLocaleString('es-CL', { minimumFractionDigits: 2 });
        var brutoFormateado = bruto.toLocaleString('es-CL');
        if (isNaN(monto) || monto === 0 || monto === '') {
            netoFormateado= 0;
            ivaFormateado= 0;
            brutoFormateado= 0;

        } else {
            $(this).removeClass('input-danger'); // Quitar clase de peligro si es un número válido
        };
        // Mostrar el resultado
        $("#resultadoIVA").html(`
            <div class="clear">
                <div class="col col01 text-center">
                    <h5>VALOR NETO</h5><span>${netoFormateado}</span>
                </div>
                <div class="col col02 text-center">
                    <h5>IVA</h5><span>(19%) </span><span>${ivaFormateado}</span>
                </div>
                <div class="col col03 text-center">
                    <h5>TOTAL</h5><span>(valor bruto) </span><span>$${brutoFormateado}</span>
                </div>
            </div>
        `);
        
    });
});
