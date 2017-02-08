$('form').submit(function () {
    var input = $('input').val();
    $('ul').append('<li><button id="x" href="">x</button>' + input + '</li>');
    $('input').val('');
    return false;
});

$(document).on('click', '#x', function (e) {
    e.preventDefault();
    $(this).parent().fadeOut();
});
