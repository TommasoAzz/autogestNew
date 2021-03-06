$(document).ready(function() {
    const $btnProsegui = $("button#btnProsegui");
    const $modulo = $("div#modulo");
    const $formIscrizione = $("form#iscrizione");

    //ALERT CHE INFORMA SU COME DISISCRIVERSI
    const alertInfo = "<div class='alert alert-info' role='alert'>" +
        "<button id='btnCloseAlertForever' type='button' class='close' data-dismiss='alert' aria-label='Chiudi'><span aria-hidden='true'>&times;</span></button>" +
        "<strong>Attenzione!</strong> Se ti accorgi di esserti sbagliato ad iscrivere, vai nella pagina <code>I miei corsi</code> e premi il pulsante <strong><span class='fa fa-ban' aria-hidden='true'></span> Annulla l'iscrizione</strong>." +
        "</div>";

    if(getCookie("alertClosed") === "") { //controllo il contenut dell'alert
        setCookie("alertClosed", "false", 1);
        $modulo.append(alertInfo);
    } else if(getCookie("alertClosed") === "false") $modulo.append(alertInfo);

    $btnProsegui.prop('disabled', true);

    $btnProsegui.click(function() {
        $formIscrizione.submit();
    });

    $('button#btnCloseAlertForever').click(function() {
        setCookie("alertClosed", "true", 1);
    });

    $('select#corso').change(function() {
        if($(this).val() !== ""){
            $btnProsegui.prop('disabled', false);
            let info = $('select#corso option:selected').data('info');
            if(info.length !== 0) {
                $('#informazioni span').remove();
                $('#informazioni').append(`<span>${info}</span>`);
                $('#informazioni').prop('hidden', false);
            } else {
                $('#informazioni').prop('hidden', true);
                $('#informazioni span').remove();
            }
        } else {
            $btnProsegui.prop('disabled', true);
            $('#informazioni').prop('hidden', true);
            $('#informazioni span').remove();
        }
    }).keypress(function(e) {
        if(e.which == 13) $formIscrizione.submit();
    });

});
