function createGrid(e)
{
    for(var rows=0;rows<e;rows++)
    {
        for(var columns=0;columns<e;columns++)
        {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/e);
    $(".grid").height(960/e);
};
function clearGrid()
{
    $(".grid").remove();
};
function refreshGrid()
{
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};
$(document).ready(function()
{
    createGrid(16);
    $(".grid").mouseover(function() 
    {
        $(this).css("background-color", "blue");
    });
    $(".newGrid").click(function() 
    {
        refreshGrid();
        $(".grid").mouseover(function() 
        {
            $(this).css("background-color", "yellow");
        });
    });
});
      