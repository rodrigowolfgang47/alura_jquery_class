// I got the main variables here
var wordCounterRecever = $('.word-couter'),
    letterCounterRecever = $('.letter-couter'),
    typer = $('#typer'),
    seconds = $('.seconds'),
    resetButton = $('#reset');


$(document).ready(function () {
    startsCounter();
    caracterCounter();
    resetGame();
});


function caracterCounter() {
    // I created a word and caracteres counter
    typer.on('input', function () {
        var typervalue = typer.val();
        typervalueletter = typervalue.replace(/\s+/g, "");
        letterCounterRecever.text(typervalueletter.length);
        var wordCount = typervalue.split(/\S+/).length - 1;
        wordCounterRecever.text(wordCount);
    });
}



function startsCounter() {
    // starts here the second counter
    var secondsCounter = seconds.text()
    typer.one('input', function () {
        var counterInterval = setInterval(function () {
            secondsCounter--;
            seconds.text(secondsCounter);
            if (secondsCounter < 1) {
                typer.attr('disabled', true);
                clearInterval(counterInterval);
            }
            resetButton.on('click', function(){
                clearInterval(counterInterval)
                resetGame();
            });
        }, 2000);
    });
}

function resetGame(){
    var inicialSeconds = seconds.text()
    resetButton.on('click', function () {
        typer.val("")
        seconds.text(inicialSeconds);
        typer.attr('disabled', false);
        wordCounterRecever.text('0');
        letterCounterRecever.text('0');
        startsCounter()
    });
};