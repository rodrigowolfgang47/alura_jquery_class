var wordCounterRecever = $('.word-counter');
var letterCounterRecever = $('.letter-couter')
var typer = $('#typer')

typer.on('input', function () {
    var typervalue = typer.val()
    letterCounterRecever.text(typervalue.length)

    var wordCount = typervalue.split(' ').length
    console.log(wordCount)
})