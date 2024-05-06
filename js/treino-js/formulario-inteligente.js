$('#push-form').click(function() {
    let nome = $('#nome').val()
    let email = $('#email').val()
     if(nome != '' && email != '') {
        alert(`Seja bem vindo ${nome}. Seus dados estão protegidos: ${email}`)
        $('.contact-page').animate({
            opacity: 'toggle'
        })
        $('.about-page').removeClass()
    }
})



$('#tarefa-enviar').click(function() {
    let takeInput = $('#input-blog').val();

    $('#blog').append('<li>' + `${takeInput}` + '</li>')

    $('#input-blog').val('');
})


$('#tarefa-saved').click(function() {
    $('#sucesso-salvar').append('<p>'+ 'Salvo!' +'</p>').css({
        'background': '#28a745',
        'color': 'white',
        'font-size': '1.2em',
        'width': '300px',
        'margin': 'auto',
         'text-align': 'center',
         'border-radius': '20px',
    })
})