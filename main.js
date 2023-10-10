$(document).ready(function () {
    $('#adicionar-tarefa').click(function () {
        const novaTarefa = $('#nome-tarefa').val();
        if (novaTarefa.trim() !== '') {
            $('#listado-tarefas').append('<li>' + novaTarefa + '</li>');
            $('#nome-tarefa').val('');
        }
    });

    $('#listado-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });
});