$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        console.log(this);
        
        var text = $(this).siblings(".entry_data").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
        
    })
    $("#hour1 .entry_data").val(localStorage.getItem("hour1"));
    $("#hour2 .entry_data").val(localStorage.getItem("hour2"));
    $("#hour3 .entry_data").val(localStorage.getItem("hour3"));
    $("#hour4 .entry_data").val(localStorage.getItem("hour4"));
    $("#hour5 .entry_data").val(localStorage.getItem("hour4"));
    $("#hour6 .entry_data").val(localStorage.getItem("hour6"));
    $("hour7. entry_data").val(localStorage.getItem("hour7"));

    $("#hour8 .entry_data").val(localStorage.getItem("hour8"));
    $("#hour9 .entry_data").val(localStorage.getItem("hour9"));
    $("#hour10 .entry_data").val(localStorage.getItem("hour10"));
    $("#hour11 .entry_data").val(localStorage.getItem("hour11"));
    $("#hour12 .entry_data").val(localStorage.getItem("hour12"));
    $("#hour13 .entry_data").val(localStorage.getItem("hour13"));
    $("#hour14 .entry_data").val(localStorage.getItem("hour14"));
    $("#hour15 .entry_data").val(localStorage.getItem("hour15"));
    $("#hour16 .entry_data").val(localStorage.getItem("hour16"));
    $("#hour17 .entry_data").val(localStorage.getItem("hour17"));
    $("#hour18 .entry_data").val(localStorage.getItem("hour18"));

    function hourTracker () {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
        
            if(blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
    })

    }
    hourTracker ();

})
