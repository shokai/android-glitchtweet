var result = '';
var g = new GlitchText();

$(function(){
    $('div#glitch').click(glitch);
    $('div#tweet').click(tweet).css('visibility', 'hidden');
    $('textarea#source').live('click', function(e){
        $('textarea#source').val('').die('click');
    });
});


var glitch = function(){
    var source = $('textarea#source').val();
    if(source.length < 1) return;
    result = source;
    while(true){
        result = g.random(source);
        if(Math.random() > 0.4) break;
    }
    $('div#result').html(result);
    $('div#tweet').css('visibility','visible');
};

var tweet = function(){
    window.open('http://twitter.com/home?status='+result, 'twitter');
};
