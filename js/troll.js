$(document).ready(function () {
    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 1000); // Mostrar el modal después de 1 segundo



    // Manejar el click en el botón de cierre
    $("#btn-close").click(function () {
        $(this).removeClass("selected");
        $("#siBtn").addClass("selected").delay(1000).queue(function (next) {
            $(this).removeClass("selected");
            $('#exampleModal').modal('hide'); // Ocultar el modal después de 3 segundos
            replaceImageWithGif();
            playBackgroundAudio();
        });
    });
    $("#siBtn").click(function () {
        $("#siBtn").addClass("selected").delay(1000).queue(function (next) {
            $('#exampleModal').modal('hide'); // Ocultar el modal después de 3 segundos
            replaceImageWithGif();
            playBackgroundAudio();
        });
    });

    // Manejar el evento de presionar el botón de escape
    $(document).keydown(function (event) {
        if (event.keyCode == 27) { // 27 es el código de la tecla ESC
            replaceImageWithGif();
            playBackgroundAudio();
        }
    });

    // Función para reemplazar la imagen con un gif que ocupe toda la página
    function replaceImageWithGif() {
        var modalContent = $('#mtroll');
        modalContent.empty(); // Vaciar el contenido de la modal-content

        // Agregar un elemento de imagen con el gif deseado
        modalContent.append('<video autoplay loop muted style="width: 100%; height: auto;"><source src="/images/xdd.mp4" type="video/mp4"></video>');
    }

    // Reproducir audio al hacer clic fuera del modal
    $(document).on('click', function () {
        playbackgroundclick();
    });

     // Función para reproducir el audio de fondo
     function playBackgroundAudio() {
        var backgroundAudio = document.getElementById('backgroundAudio');
        backgroundAudio.play();
    }
    // Función para reproducir el audio de fondo
    function playbackgroundclick() {
        var backgroundAudio = document.getElementById('backgroundclick');
        backgroundAudio.play();
    }



    // Manejar el evento mouseenter en el botón "No"
    $('#noBtn').one('mouseenter', function () {
        moveButton();
    });

    // Función para mover el botón
    function moveButton() {
        console.log("Moving button");
        var button = $('#noBtn');
        var container = button.parent();
        var containerWidth = container.width();
        var containerHeight = container.height();
        var buttonWidth = button.outerWidth();
        var buttonHeight = button.outerHeight();
        var newPosition = {
            left: Math.random() * (containerWidth - buttonWidth),
            top: Math.random() * (containerHeight - buttonHeight)
        };
        button.css({ left: newPosition.left, top: newPosition.top });
        // Desvinculamos el evento 'mouseenter' antes de volver a vincularlo
        button.off('mouseenter');
        // Volvemos a mover el botón cuando se mueve el cursor
        button.on('mouseenter', function () {
            moveButton();
        });
    }
});
