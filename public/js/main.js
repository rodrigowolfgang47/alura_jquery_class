var wordCounterRecever = $('.word-couter'),
    letterCounterRecever = $('.letter-couter'),
    typer = $('#typer'),
    seconds = $('.seconds'),
    secondsCounter = seconds.text()

typer.on('input', function () {
    var typervalue = typer.val();

    typervalueletter = typervalue.replace(/\s+/g, "");

    letterCounterRecever.text(typervalueletter.length);

    var wordCount = typervalue.split(/\S+/).length - 1;
    wordCounterRecever.text(wordCount);
    console.log(wordCount);
});

typer.on('click', function(){

    var conterInterval = setInterval(function(){
        secondsCounter--;
        seconds.text(secondsCounter);
        if (secondsCounter < 1){
            typer.attr('disabled', true);
            clearInterval(conterInterval);
        };
    }, 1000);
});