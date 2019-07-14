$(document).ready(function() {
    
    //delete item
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });

    //strikethrough
    $('.shopping-list').on('click', '.shopping-item-toggle', function () {
        $(this).parent().prev().toggleClass('shopping-item__checked');
    });

    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        //saves the user input to a variable 
        let item = $('#shopping-list-entry').val();
        //adds the user input as a li
        $('.shopping-list').append('<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });
});
