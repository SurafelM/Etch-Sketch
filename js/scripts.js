//almost global variables. 
$(document) .ready(function ()
{
    //register click event listener.
    $('#sketchBtn') .click(function ()
    {
        var grid_no = prompt('please Enter number of squares to draw/arrange for sketching', 10);
        if (grid_no > 81) {
            alert('it takes more time and the squares are Unnoticable');
        } 
        else {
            animater($('.sketchContainer'));
            drawNewSquare(grid_no);
            mouseE($('.square'));
        }
    });
    $('#clear') .click(function ()
    {
        $('.sketchContainer') .empty();
    });
});
//function to sketch the window.
function drawNewSquare(no_of_grids)
{
    $('.sketchContainer') .empty();
    //arrange variables of the divs and the size.
    var $width = $('.sketchContainer') .width() / no_of_grids - 6;
    var $height = $('.sketchContainer') .height() / no_of_grids - 6;
    //start arranging the divs first.
    for (var i = 0; i < no_of_grids; i++)
    {
        for (var j = 1; j < no_of_grids; j++)
        {
            $('.sketchContainer') .append('<div class="square"><div/>');
        }
        $('.sketchContainer') .append('<div class="square"><div/>');
    }
    //set width and height of the squares

    $('.square') .width($width);
    $('.square') .height($height);
}
//make an animation while sketching.

function animater(dive)
{
    dive.animate({
        width: '0px'
    }, 200);
    dive.animate({
        width: '1000px'
    }, 200);
}
//function for mouseenter event

function mouseE(dive)
{
    dive.mouseenter(function ()
    {
        if ($('#style :selected') .val() === '0')
        {
            $(this) .css('background', 'blue');
        } 
        else if ($('#style :selected') .val() === '1')
        {
            $(this) .css('background', randomColor());
        } 
        else if ($('#style :selected') .val() === '2')
        {
            $(this) .css('background', 'black');
        } 
        else if ($('#style :selected') .val() === '3')
        {
            $(this) .css('background', 'gold');
        }
    });
}
//random color generator

function randomColor()
{
    var color = '#';
    for (var i = 0; i < 3; i++)
    {
        color += ('0' + (Math.random() * 256 | 0) .toString(16)) .substr( - 2);
    }
    return color;
}
