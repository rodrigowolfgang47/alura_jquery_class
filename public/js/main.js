// I got the variables here
var wordCounterRecever = $('.word-couter'),
    letterCounterRecever = $('.letter-couter'),
    typer = $('#typer'),
    seconds = $('.seconds'),
    secondsCounter = seconds.text()

// I created a word and caracteres counter
typer.on('input', function () {
    var typervalue = typer.val();

    typervalueletter = typervalue.replace(/\s+/g, "");

    letterCounterRecever.text(typervalueletter.length);

    var wordCount = typervalue.split(/\S+/).length - 1;
    wordCounterRecever.text(wordCount);
    console.log(wordCount);
});

// starts here the second counter

typer.one('input', function(){

    var conterInterval = setInterval(function(){
        secondsCounter--;
        seconds.text(secondsCounter);
        if (secondsCounter < 1){
            typer.attr('disabled', true);
            clearInterval(conterInterval);
        };
    }, 1000);
});