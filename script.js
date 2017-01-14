"use strict";
$(document).ready(function() {
    $('#newQuoteButton').on('click', function() {

        var random = Math.floor(Math.random() * 999999);
        var URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=' + random + '&format=jsonp&lang=en&jsonp=?';
        var jqxhr = $.getJSON(URL)
        .done(function(response) {
            $('blockquote p').html(response.quoteText);
            $('blockquote footer').html(response.quoteAuthor);
        })
        .fail(function() {
            $('blockquote p').html("Something has gone terribly");
            $('blockquote footer').html("for real, something has gone terribly wrong");
        });

    });

    $('#TweetButton').on('click', function() {
        var twitterUrl = 'https://twitter.com/intent/tweet?text=';
        twitterUrl += $('blockquote p').text() + '&hashtags=' + $('blockquote footer').text();
        window.open(twitterUrl);
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
