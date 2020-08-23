//Check off specific todo by clicking
$("ul").on("click", "li", function() {
    //if li is grey turn it black
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else
    else {
        $(this).css({
            color: "grey",
            textDecoration: "line-through"

        });
    }
    //turn it's grey
});
//Click on X to delete todo
$("ul").on("click", "span", function(e) { // (e) can be anything...evt,e, event etc..
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type='text").keypress(function(e) {
    if (e.which === 13) {
        //Grabbing new todo text from input
        var TodoText = $(this).val();
        $(this).val("");
        //Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>   " + TodoText + "</li>"); //Select and element and append it to the new stuufs to it
    }
});

$(".fa-edit").click(function() {
    $("input[type='text").fadeToggle()
})