var wordCounterRecever = $('.word-couter'),
letterCounterRecever = $('.letter-couter'),
typer = $('#typer');

typer.on('input', function () {
    var typervalue = typer.val();

    typervalueletter = typervalue.replace(/\s+/g, "");

    letterCounterRecever.text(typervalueletter.length);

    var wordCount = typervalue.split(/\S+/).length - 1;
    wordCounterRecever.text(wordCount);
    console.log(wordCount);
});