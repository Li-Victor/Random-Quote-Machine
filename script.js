$(document).ready(function() {
    $('#newQuoteButton').on('click', function() {

        var random = Math.floor(Math.random() * 999999);
        var URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=' + random + '&format=jsonp&lang=en&jsonp=?';
        $.getJSON(URL, function(response) {
            $('#quoteDisplay').html('<pre>' + response.quoteText + ' - ' + response.quoteAuthor + '</pre>');
        });


        // request done in ajax
        // $.ajax({
        //     url: 'http://api.forismatic.com/api/1.0/',
        //     jsonp: 'jsonp',
        //     dataType: 'jsonp',
        //     data: {
        //         method: 'getQuote',
        //         lang: 'en',
        //         format: 'jsonp',
        //         key: random
        //     }
        // }).done(function(response) {
        //     console.log(response);
        // });


    });

});
