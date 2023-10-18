$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Ex: (xx) xxxxx-xxxx'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Ex: xxx.xxx.xxx-xx'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'Ex: xxxxx-xxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        }
    })
})

