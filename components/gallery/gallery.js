$ = require('../../node_modules/jquery');

function filterCards (cards, filtparam) {
    if (filtparam.toLowerCase() == 'all') {
        cards.removeClass('hidden');
        return;
    }
    cards.each(function(i, card){
        var card = $(card);
        if (card.data('category').toLowerCase() != filtparam.toLowerCase()) {
            card.addClass('hidden');
        } else {
            card.removeClass('hidden');
        }
    });
}

exports.init = function() {
    $.getJSON('../issues.json', function(data) {
        // console.log(data)
    });

    $('.gallery').each(function(){
        var gallery = $(this),
            filterButtons = gallery.find('.gallery__filterButton'),
            cards = gallery.find('.gallery__item');

        filterButtons.click(function(e){
            e.preventDefault();
            var button = $(this),
                filtparam = button.data('filtparam');

            filterButtons.removeClass('gallery__filterButton_active');
            button.addClass('gallery__filterButton_active');
            filterCards(cards, filtparam);
        });
    });
}
