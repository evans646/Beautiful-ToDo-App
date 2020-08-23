$(this).css("color", "gray")
    $(this).css("text-decoration", "line-through")




    //Check off specific todo by clicking
$("li").click(function(){
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
    //turn it grey
});

//You can simply replace above code with just a  simple line of code by defining a css class and adding  it 
to the element but you will have to make a  new css file and link it to it before

$("this").toggleClass("selected)

.click() will only add listners for existing elements 
.on() will add listeners for all future potential elements



A new method called append



Css
box-sizing