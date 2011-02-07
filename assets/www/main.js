var result = '';
var g = new GlitchText();

$(function(){
    $('input#glitch').click(glitch);
    $('input#tweet').click(tweet);
});


var glitch = function(){
    var source = $('textarea#source').val();
    result = source;
    while(true){
        result = g.random(source);
        if(Math.random() > 0.4) break;
    }
    $('div#result').html(result);
};

var tweet = function(){
    location.href = 'http://twitter.com/home?status='+result;
};
