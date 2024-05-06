$(document).ready(function() {
    $('#push-form').click(function(e) {
        e.preventDefault();
        let nome = $('#nome').val()
        let email = $("#email").val()

        if($('#nome').val() != '' && $("#email").val() != '') {
            alert(`Seja bem vindo ${nome}, Seus dados estão salvos com sucesso:${email}`);
    

            $('.contact-page').animate({
                opacity: 'toggle'
            });

            $('.div-aclub').removeClass();
        }
        })
})