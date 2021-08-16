
var wordCounter = $('.this-word');
var textCounter = $('.text-to-count').text();
var letterCounter = $('.letter-couter')
var typer = $('#typer')



typer.on('input', function(){
    var typervalue = typer.val()
    letterCounter.text(typervalue.length)
})