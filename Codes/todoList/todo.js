$(function (){
    //add event handler
    $("#add").on("click", function(){
        var val = $("input").val();   //take the value of the input
        if (val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append(" <button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val(""); //clear the input
            $(".rem").on("click", function() {
                $(this).parent().remove();
            });
        } else {
            alert("Space cannot be empty");
        }
    });
});